import { StyleSheet, TextInput, Image, View } from 'react-native';

function SearchBar(props) {
  const height = props.height != null ? props.height: '25px';
  var searchIcon = require('../../assets/searchicon.png')
  
  const styles = StyleSheet.create({
    button: {
      marginTop: '20px',
      width: '90%',
      paddingVertical: '10px',
      backgroundColor: '#D9D9D9',
      borderRadius: '25px',
      flexDirection: 'row',
    },
    text: {
      marginLeft: '10px',
      color: '#5B5B5B',
      fontSize: '20px',
      fontWeight: 'Medium',
      height: height,
    }
  });
  
  return (
    <View style={styles.button}>
      <Image source={searchIcon} style={{ marginLeft: 10, width: 25, height: 25 }} />
      <TextInput
        style={styles.text}
        placeholder='Search challenges'
        multiline
      />
    </View>
  );
  
}



export default SearchBar;