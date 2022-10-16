import React, {useState} from 'react';
import { Image, Text, View, StyleSheet, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  getAuth,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDYWL3POFDFXDAASpxwi7D_9L19ZyjITfA",
  authDomain: "hackthevalley-86d05.firebaseapp.com",
  databaseURL: "https://hackthevalley-86d05-default-rtdb.firebaseio.com",
  projectId: "hackthevalley-86d05",
  storageBucket: "hackthevalley-86d05.appspot.com",
  messagingSenderId: "277759021828",
  appId: "1:277759021828:web:01abad7b753075bc61b651",
  measurementId: "G-9KCDJZ9YP3"
};

let myApp = initializeApp(firebaseConfig);

const auth = getAuth(myApp)

function LoginPage() {
  const logo = require ('../../assets/Logo.png');
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const navigation = useNavigation();


  const handleSignIn = () =>{
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log('User signed in!');
      navigation.navigate('HomePage');
    })
    .catch(error => {

      console.log("User was unable to sign in!")
      console.error(error);
    });
    }

  const onSignInPressed = () => {
    console.warn("sign in pressed");
    // navigation.navigate('BrowsePage');
    navigation.navigate('HomePage');
  }

  const onRegisterPressed = () => {
    console.warn("register pressed");
    navigation.navigate('RegistrationPage');
  }

  return (
    <View style={styles.container}>
      <Image 
        source={ logo } style={{width: 150, height: 150}}
      />

      <Text style= {{fontSize: '19px', color : '#33601A', marginTop: 20, marginBottom: 80}}>
        Sign into your account
      </Text>

      <View style={styles.button}>
      <TextInput
        style={styles.text}
        placeholder={'Enter Email'}
        onChangeText={(email) => setEmail(email)}
      />
      </View>

      <View style={styles.button}>
      <TextInput
        style={styles.text}
        secureTextEntry={true}
        placeholder={'Enter Password'}
        onChangeText={(password) => setPassword(password)}
      />
      </View>

      {/* <View style= {styles.input}>
        <HTVButton  buttonText = 'Sign In' />
      </View> */}

      <View style={styles.signinbutton}>
      <Pressable style={styles.signinbutton}>
        <Text style={styles.text} onPress = {handleSignIn}>
          Sign In
        </Text>
      </Pressable>
      </View>

      <Text 
        onPress={onRegisterPressed} 
        style= {{fontSize: '15px', color : '#33601A', marginTop: 25, marginBottom: 10}}>
        Don't have an account? <Text style={styles.underline} >Register here! </Text>
      </Text>

    </View>

  );
}

const styles = StyleSheet.create({
  input : {
    paddingTop : 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 20,
  },
  button: {
    paddingLeft: '50px',
    paddingRight: '50px',
    paddingVertical: '10px',
    backgroundColor: '#FBEEDB',
    borderRadius: '25px',
    marginVertical: 20,
    marginBottom: 25,
    // marginTop: 20,
    justifyContent: 'center',
  },
  text: {
    color: '#7D7973',
    fontSize: '20px',
    fontWeight: 'Light',
    height: 20,
    alignContent:'center',
  },
  signinbutton: {
    paddingHorizontal: 8,
    paddingVertical: '3px',
    backgroundColor: '#E4EFCB',
    borderRadius: '25px',
    marginVertical: 5,
    margin : 25,
    // marginTop: 10,
    alignItems:'center',
  },
});

export default LoginPage;
