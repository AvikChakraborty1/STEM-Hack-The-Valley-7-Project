// import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, StyleSheet } from 'react-native';
// import Logo from '../../assets/Logo.png';

function LoginPage() {
  return (
    <View>
      {/* <Image source={ require('../../assets/Logo.png')} style={styles.logo} /> */}
      <Image
        style={styles.logo}
        source={require('../../assets/Logo.png')}
      />
      <Text>Sign in screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width : '70%',
    height : '100',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginPage;
