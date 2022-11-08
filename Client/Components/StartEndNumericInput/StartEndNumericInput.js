import {Text, View, StyleSheet } from 'react-native';
import NumericInputAndText from '../NumericInputAndText/NumericInputAndText';

function StartEndNumericInput() {
    const styles = StyleSheet.create({
      container:{
        flex : 1,
        flexDirection: 'row',
        justifyContent : 'center',
      },
    });
    
    return (
      <View style={styles.container}>
        <NumericInputAndText text = 'start' placeholder = '0'></NumericInputAndText>
        <NumericInputAndText text = 'goal' placeholder = '0'></NumericInputAndText>
      </View>
    );
    
  }
  
  
  
  export default StartEndNumericInput;