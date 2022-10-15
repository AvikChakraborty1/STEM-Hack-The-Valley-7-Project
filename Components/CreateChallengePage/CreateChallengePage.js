import {Text, View, StyleSheet } from 'react-native';
import HTVTextAndTextBox from '../HTVTextAndTextBox/HTVTextAndTextBox';
import HTVTextBox from '../HTVTextBox/HTVTextBox';
import SearchBar from '../SearchBar/SearchBar';
import StartEndNumericInput from '../StartEndNumericInput/StartEndNumericInput';

function CreateChallengePage() {
    const styles = StyleSheet.create({
      textAndTextBoxContainer : {
        marginBottom : '30px',
      },
      container:{
        height: '100%',
        width:'75%'
      }
    });
    
    return (
      <View style={styles.container}>
       <HTVTextAndTextBox style={styles.textAndTextBoxContainer} text="Enter Challenge Name" textBoxHeight='60px'></HTVTextAndTextBox>

       <HTVTextAndTextBox style={styles.textAndTextBoxContainer} text="Enter Challenge Description" textBoxHeight='120px'></HTVTextAndTextBox>
       <StartEndNumericInput></StartEndNumericInput>
      </View> 
    );
    
  }
  
  
  
  export default CreateChallengePage;