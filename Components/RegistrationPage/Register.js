// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Image, Text, View, StyleSheet, TextInput, Pressable } from 'react-native';
import HTVButton from '../HTVButton/HTVButton';
import HTVTextBox from '../HTVTextBox/HTVTextBox';


function RegisterPage() {
  const logo = require ('../../assets/Logo.png');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const onRegisterPressed = () => {
    console.warn("register pressed");
  }

  const onSignInPressed = () => {
    console.warn("re-naigate to login page")
  }

  return (
    <View style={styles.container}>
      <Image 
        source={ logo } style={{width: 100, height: 100}}
      />

      <Text style= {{fontSize: '15px', color : '#33601A', marginTop: 15}}>
        Create an account!
      </Text>

      <View style={styles.button}>
      <TextInput
        style={styles.text}
        placeholder={'Enter Username'}
        onChangeText={(email) => setEmail(email)}
      />
      </View>

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

      <View style={styles.button}>
      <TextInput
        style={styles.text}
        secureTextEntry={true}
        placeholder={'Re-Enter Password'}
        onChangeText={(password) => setPassword(password)}
      />
      </View>

      {/* <View style= {styles.input}>
        <HTVButton  buttonText = 'Sign In' />
      </View> */}

      <View style={styles.signinbutton}>
      <Pressable style={styles.registerbutton}>
        <Text style={styles.text} onPress = {onRegisterPressed}>
          Register
        </Text>
      </Pressable>
      </View>

      <Text onPress={onSignInPressed} style= {{fontSize: '15px', color : '#33601A', marginTop: 15, marginBottom: 15}}>
        Already have an account? <Text style={styles.underline} >Sign in here! </Text>
      </Text>

    </View>

  );
}

const styles = StyleSheet.create({
  underline : {
    textDecorationLine : "underline",
  },
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
  registerbutton: {
    paddingHorizontal: 50,
    paddingVertical: '5px',
    backgroundColor: '#E4EFCB',
    borderRadius: '25px',
    marginVertical: 8,
    margin : 25,
  },
});

export default RegisterPage;
