import {Text, View, StyleSheet } from 'react-native';
import HTVButton from '../HTVButton/HTVButton';
import HTVTextAndTextBox from '../HTVTextAndTextBox/HTVTextAndTextBox';
import HTVTextBox from '../HTVTextBox/HTVTextBox';
import NumericInputAndText from '../NumericInputAndText/NumericInputAndText';
import SearchBar from '../SearchBar/SearchBar';
import StartEndNumericInput from '../StartEndNumericInput/StartEndNumericInput';

function CreateChallengePage() {
    const styles = StyleSheet.create({
      textAndTextBoxContainer : {
        marginBottom : '20px',
      },
      container:{
        height: '100vh',
        width:'100vw',
        padding : '20px'
      },
      start:{
        width: '40px'
      }
    });
    
    return (
      <View style={styles.container}>
       <HTVTextAndTextBox style={styles.textAndTextBoxContainer} text="Enter Challenge Name" textBoxHeight='60px'></HTVTextAndTextBox>

       <HTVTextAndTextBox style={styles.textAndTextBoxContainer} text="Enter Challenge Description" textBoxHeight='120px'></HTVTextAndTextBox>

       <StartEndNumericInput></StartEndNumericInput>

       <HTVButton buttonText='Create Challenge'></HTVButton>
      </View> 
    );
    
  }
  
  
  
  export default CreateChallengePage;