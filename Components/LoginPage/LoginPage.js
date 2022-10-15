// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, View, StyleSheet, TextInput } from 'react-native';
// import { TextInput } from 'react-native-web';
import HTVButton from '../HTVButton/HTVButton';
import HTVTextBox from '../HTVTextBox/HTVTextBox';


function LoginPage() {
  const logo = require ('../../assets/Logo.png');
  return (
    <View style={styles.container}>
      <Image source={ logo } style={{width: 100, height: 100}} />
      <Text style= {{fontSize: '15px', color : '#4E8A2B', margin: 5}}>
        Sign into your account
      </Text>
      <View style= {styles.input}>
        <HTVTextBox placeholder='Enter Username' />
        <HTVTextBox placeholder='Enter Password' />
        <HTVButton  buttonText = 'Sign In'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input : {
    marginVertical : 15,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default LoginPage;
