// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Image, Text, View, StyleSheet, TextInput } from 'react-native';
import HTVButton from '../HTVButton/HTVButton';
import HTVTextBox from '../HTVTextBox/HTVTextBox';


function LoginPage() {
  const logo = require ('../../assets/Logo.png');
  const [username, setUsername] = useState ('');
  const [password, setPassword] = useState ('');

  const currentFieldEditor = React.createRef();
  
  sumbitValues = () => {
    alert(currentFieldEditor.current.this.state.name)
  }

  return (
    <View style={styles.container}>
      <Image 
        source={ logo } style={{width: 100, height: 100}}
      />

      <Text style= {{fontSize: '15px', color : '#33601A', marginTop: 15}}>
        Sign into your account
      </Text>

      <View style= {styles.input}>
        <HTVTextBox placeholder='Enter Username' ref={this.currentFieldEditor}/>
        <HTVTextBox placeholder='Enter Password' />
      </View>

      <View style= {styles.input}>
        <HTVButton  buttonText = 'Sign In' />
      </View>

      <Text style= {{fontSize: '15px', color : '#33601A', marginTop: 20}}>
        Don't have an account? Register here!
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
});

export default LoginPage;
