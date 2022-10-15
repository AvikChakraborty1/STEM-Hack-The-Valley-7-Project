import { StyleSheet, Text, Pressable, View } from 'react-native';

function HTVButton(props) {

  const hpadding = props.hpadding != null ? props.hpadding: 50;
  const buttonText = props.buttonText != null ? props.buttonText: 'Enter text';


  const styles = StyleSheet.create({
    button: {
      paddingHorizontal: hpadding,
      paddingVertical: '5px',
      backgroundColor: '#E4EFCB',
      borderRadius: '25px',
    },
    text: {
      color: '#7D7973',
      fontSize: '20px',
      fontWeight: 'Medium'
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