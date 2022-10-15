import { StyleSheet, Text, Pressable, View } from 'react-native';

function HTVButton() {
  return (
    <View style={styles.button}>
      <Pressable
      style={styles.button}
      >
        <Text style={styles.text}>
          Hello
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingLeft: '50px',
    paddingRight: '50px',
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

export default HTVButton;