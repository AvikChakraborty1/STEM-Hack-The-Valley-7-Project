import {Text, View, StyleSheet } from 'react-native';
import HTVButton from '../HTVButton/HTVButton';
import HTVTextAndTextBox from '../HTVTextAndTextBox/HTVTextAndTextBox';
import StartEndNumericInput from '../StartEndNumericInput/StartEndNumericInput';
import { getDatabase, ref, onValue, set, get, child} from 'firebase/database';

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

    // const database = getDatabase();
    // const dbRef = ref(database);
    // get(child(dbRef, 'Challenges')).then((snapshot) => {
    //   if (snapshot.exists()){
    //     foreach(key in snapshot){
    //       console.log(key.name);
    //     }
    //   }
    //   else{
    //     console.log("No Data");
    //   }

    // }).catch((error) => {
    //   console.log(error);
    // })

    
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