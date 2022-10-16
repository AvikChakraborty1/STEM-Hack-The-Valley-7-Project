import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

function HTVTextBox(props) {
  const height = props.height != null ? props.height: '25px';
  const placeholder = props.placeholder != null ? props.placeholder: 'Placeholder';
  const keyboardType = props.keyboardType ? props.keyboardType: 'default';
  const multiline = props.multiline === null ? true: props.multiline;

  const styles = StyleSheet.create({
    button: {
      paddingLeft: '25px',
      paddingRight: '25px',
      paddingVertical: '10px',
      backgroundColor: '#FBEEDB',
      borderRadius: '25px',
      marginVertical: 8,
      marginBottom: 4,
    },
    text: {
      color: '#8F877D',
      fontSize: '20px',
      fontWeight: 'Medium',
      height: height,
    }
  });
  
  return (
    <View style={styles.button}>
      <TextInput
        style={styles.text}
        placeholder={placeholder}
        keyboardType = {keyboardType}
        multiline = {multiline}
        textAlign = 'center'
      />
    </View>
  );
  
}



export default HTVTextBox;