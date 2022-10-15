import {Text, View, StyleSheet } from 'react-native';
import HTVTextBox from '../HTVTextBox/HTVTextBox';

function HTVTextAndTextBox(props) {
    const textBoxText = props.text ? props.text: 'default';
    const textBoxHeight = props.textBoxHeight;
    const styles = StyleSheet.create({
      text: {
        color: '#5B5B5B',
        fontSize: '20px',
        fontWeight: 'Medium',
        textAlign: 'center'
      },
      textAndTextBoxContainer : {
        //marginBottom : '50px',
        justifyContent: 'center',
        marginVertical: '20px',
      },
    });
    
    return (
      <View style={styles.textAndTextBoxContainer}>
        <Text style={styles.text}>{ textBoxText }</Text>
        <HTVTextBox height = {textBoxHeight}></HTVTextBox>
      </View> 
    );
    
  }
  
  
  
  export default HTVTextAndTextBox;