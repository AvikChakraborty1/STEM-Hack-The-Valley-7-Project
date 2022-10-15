import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

function HTVTextBox(props) {
  const height = props.height != null ? props.height: '25px';
  const placeholder = props.placeholder != null ? props.placeholder: 'Placeholder'
  super(props)

  const styles = StyleSheet.create({
    button: {
      paddingLeft: '50px',
      paddingRight: '50px',
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
        multiline
        ref={currentFieldEditor}
      />
    </View>
  );
  
}



export default HTVTextBox;