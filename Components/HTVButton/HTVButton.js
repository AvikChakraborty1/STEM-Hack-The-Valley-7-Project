import { StyleSheet, Button, View } from 'react-native';

function HTVButton() {
  return (
    <View>
      <Button
        title="Press me"
        onPress={alert('Simple Button pressed')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HTVButton;