import { StyleSheet, Text, Pressable, View } from 'react-native';

function HTVButton(props) {

  const hpadding = props.hpadding != null ? props.hpadding: 25;
  const buttonText = props.buttonText != null ? props.buttonText: 'Enter text';


  const styles = StyleSheet.create({
    button: {
      paddingHorizontal: hpadding,
      paddingVertical: '5px',
      backgroundColor: '#E4EFCB',
      borderRadius: '25px',
      marginVertical: 8,
      margin : 25,
    },
    text: {
      color: '#7D7973',
      fontSize: '15px',
      fontWeight: 'Medium',
      textAlign : 'center'
    }
  });

  return (
    <View style={styles.button}>
      <Pressable
      style={styles.button}
      >
        <Text style={styles.text}>
          {buttonText}
        </Text>
      </Pressable>
    </View>
  );
}



export default HTVButton;