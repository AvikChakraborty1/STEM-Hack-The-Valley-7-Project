import {Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-web';
import HTVTextBox from '../HTVTextBox/HTVTextBox';

function NumericInputAndText(props) {
    const textBoxText = props.text ? props.text: 'default';
    const textBoxHeight = props.textBoxHeight ? props.textBoxHeight: '120px';
    const styles = StyleSheet.create({
      text: {
        color: '#5B5B5B',
        fontSize: '20px',
        fontWeight: 'Medium',
        textAlign: 'center'
      },
      container : {
        paddingHorizontal : '30px'
      },
      textInput:{
        color: '#8F877D',
        fontSize: '20px',
        fontWeight: 'Medium',
        height: textBoxHeight,
      }
    });
    
    return (
      <View style={styles.container}>
        <Text style={styles.text}> { textBoxText }</Text>
            <HTVTextBox keyboardType = 'numeric' placeholder = {props.placeholder} multiline = {false}></HTVTextBox>
      </View> 
    );
    
  }
  
  
  
  export default NumericInputAndText;