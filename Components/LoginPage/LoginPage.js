import React, {useState} from 'react';
import { Image, Text, View, StyleSheet, TextInput, Pressable } from 'react-native';
import HTVButton from '../HTVButton/HTVButton';
import HTVTextBox from '../HTVTextBox/HTVTextBox';
import { useNavigation } from '@react-navigation/native';


function LoginPage() {
  const logo = require ('../../assets/Logo.png');
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const navigation = useNavigation();

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
        <Text style={styles.text} onPress = {onSignInPressed}>
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
    marginTop : 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginVertical: 20,
    // justifyContent: 'center',
    marginTop: 20,
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
    color: '#8F877D',
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
