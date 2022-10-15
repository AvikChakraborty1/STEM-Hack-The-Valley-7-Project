import {Text, View, StyleSheet } from 'react-native';
import NumericInput from 'react-native-numeric-input';

function StartEndNumericInput() {
    const styles = StyleSheet.create({
      container:{
        flex : 1,
        flexDirection: 'row',
      },
      inputs:{
        marginLeft : '90px',
        marginRight : '90px',
      }
    });
    
    return (
      <View style={styles.container}>
        <NumericInput style={styles.inputs} initValue={0} onChange={value => console.log(value)}></NumericInput>
        <NumericInput style={styles.inputs} initValue={0} onChange={value => console.log(value)}></NumericInput>
      </View>
    );
    
  }
  
  
  
  export default StartEndNumericInput;