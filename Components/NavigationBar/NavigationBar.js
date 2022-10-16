import { StyleSheet, Text, Image, View, Pressable, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react';

function NavigationBar() {
  var imageIcon = require('../../assets/peopleIcon.png')
  var homeIcon = require('../../assets/homeicon.png')
  var searchIcon = require('../../assets/magnifying-glass-solid.svg')
  var createIcon = require('../../assets/square-plus-regular.svg')

  const navigation = useNavigation();

  const onHomePressed = () => {
    console.warn("sign in pressed");
    navigation.navigate('HomePage');
  }
  const onBrowsePressed = () => {
    console.warn("browse pressed");
    navigation.navigate('BrowsePage');
  }

  const onCreatePressed = () => {
    console.warn("create pressed");
    navigation.navigate('CreateChallengePage');
  }

  // const onProfilePressed = () => {
  //   console.warn("browse pressed");
  //   navigation.navigate('RegistrationPage');
  // }

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.horizontalLayout}>
          <Pressable style={styles.icon}>
            <Image source={homeIcon} style={{ minWidth: 30, height: 40 }} />
            <Text 
              onPress={onHomePressed} >
              Home
            </Text>
          </Pressable>
          <Pressable style={styles.icon}>
            <Image source={searchIcon} style={{ minWidth: 30, height: 40 }} />
            <Text 
              onPress={onBrowsePressed} >
              Search
            </Text>
          </Pressable>
          <Pressable style={styles.icon}>
            <Image source={createIcon} style={{ minWidth: 30, height: 40 }} />
            <Text
              onPress={onCreatePressed} >
              Create
            </Text>
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
