import { StyleSheet, TextInput, View } from 'react-native';

function SearchBar(props) {
  const height = props.height != null ? props.height: '25px';
  
  const styles = StyleSheet.create({
    button: {
      paddingLeft: '50px',
      paddingRight: '50px',
      paddingVertical: '10px',
      backgroundColor: '#D9D9D9',
      borderRadius: '25px',
    },
    text: {
      color: '#5B5B5B',
      fontSize: '20px',
      fontWeight: 'Medium',
      height: height,
    }
  });
  
  return (
    <View style={styles.button}>
      <TextInput
        style={styles.text}
        placeholder='Search challenges'
        multiline
      />
    </View>
  );
  
}



export default SearchBar;