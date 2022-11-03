import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

function HTVTextBox(props) {
  const height = props.height != null ? props.height: 25;
  const placeholder = props.placeholder != null ? props.placeholder: 'Placeholder';
  const keyboardType = props.keyboardType ? props.keyboardType: 'default';
  const multiline = props.multiline === null ? true: props.multiline;

  const styles = StyleSheet.create({
    button: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingVertical: 10,
      backgroundColor: '#FBEEDB',
      borderRadius: 20,
      marginVertical: 8,
      marginBottom: 4,
    },
    text: {
      color: '#8F877D',
      fontSize: 20,
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