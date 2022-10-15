import { StyleSheet, Text, Image, View, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';

function NavigationBar() {
  var imageIcon = require('../../assets/peopleIcon.png')
  var homeIcon = require('../../assets/homeicon.png')
  var searchIcon = require('../../assets/magnifying-glass-solid.svg')
  var createIcon = require('../../assets/square-plus-regular.svg')

  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.horizontalLayout}>
          <Pressable style={styles.icon}>
            <Image source={homeIcon} style={{ minWidth: 30, height: 40 }} />
            <Text>Home</Text>
          </Pressable>
          <Pressable style={styles.icon}>
            <Image source={searchIcon} style={{ minWidth: 30, height: 40 }} />
            <Text>Search</Text>
          </Pressable>
          <Pressable style={styles.icon}>
            <Image source={createIcon} style={{ minWidth: 30, height: 40 }} />
            <Text>Create</Text>
          </Pressable>
          <Pressable style={styles.icon}>
            <Image source={imageIcon} style={{ minWidth: 30, height: 40 }} />
            <Text>Profile</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '85px',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    position: 'fixed',
    bottom: '0px',
  },
  cardContent: {
    width: '90%',
  },
  horizontalLayout: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: '20px',
    paddingVertical: '15px',
  },
  icon: {
    height: '10px',
    marginBottom: '10px',
  },
})

export default NavigationBar
