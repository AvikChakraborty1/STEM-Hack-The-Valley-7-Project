// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Image, Text, View, StyleSheet, TextInput, Pressable } from 'react-native';
import { auth } from '../../firebase';
import HTVButton from '../HTVButton/HTVButton';
import HTVTextBox from '../HTVTextBox/HTVTextBox';
import { useNavigation } from '@react-navigation/native';


function LoginPage() {
  const logo = require ('../../assets/Logo.png');
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

<<<<<<< Updated upstream
  const navigation = useNavigation();
=======
>>>>>>> Stashed changes

  const onSignInPressed = () => {
    console.warn("sign in pressed");
    navigation.navigate('BrowsePage');
  }

  const onRegisterPressed = () => {
    console.warn("register pressed");
    navigation.navigate('RegistrationPage');
  }

  return (
    <View style={styles.container}>
      <Image 
        source={ logo } style={{width: 100, height: 100}}
      />

      <Text style= {{fontSize: '15px', color : '#33601A', marginTop: 15}}>
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
        <Text style={styles.text} onPress = {onSignInPressed}>
          Sign In
        </Text>
      </Pressable>
      </View>

      <Text onPress={onRegisterPressed} style= {{fontSize: '15px', color : '#33601A', marginTop: 15, marginBottom: 15}}>
        Don't have an account? <Text style={styles.underline} >Register here! </Text>
      </Text>

    </View>

  );
}

const styles = StyleSheet.create({
  input : {
    marginTop : 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  button: {
    paddingLeft: '50px',
    paddingRight: '50px',
    paddingVertical: '10px',
    backgroundColor: '#FBEEDB',
    borderRadius: '25px',
    marginVertical: 8,
    marginBottom: 4,
    marginTop: 8,
  },
  text: {
    color: '#8F877D',
    fontSize: '20px',
    fontWeight: 'Medium',
    height: 20,
  },
  signinbutton: {
    paddingHorizontal: 50,
    paddingVertical: '5px',
    backgroundColor: '#E4EFCB',
    borderRadius: '25px',
    marginVertical: 8,
    margin : 25,
  },
});

export default LoginPage;
