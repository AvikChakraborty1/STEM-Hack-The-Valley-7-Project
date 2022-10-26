import { StyleSheet, Text, Image, View, Pressable, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react';

function NavigationBar() {
  var imageIcon = require('../../assets/peopleIcon.png')
  var homeIcon = require('../../assets/homeicon.png')
  var searchIcon = require('../../assets/homeicon.png')
  var createIcon = require('../../assets/homeicon.png')

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

  const onProfilePressed = () => {
    console.warn("profile pressed");
    navigation.navigate('ProfilePage');
  }

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.horizontalLayout}>
          <Pressable style={styles.icon} 
              onPress={() => onHomePressed()}>
            <Image source={homeIcon} style={{ height: 40, resizeMode: 'contain' }} />
            <Text >
              Home
            </Text>
          </Pressable>
          <Pressable style={styles.icon} 
              onPress={() => onBrowsePressed()}>
            <Image source={searchIcon} style={{ height: 40, resizeMode: 'contain' }} />
            <Text >
              Search
            </Text>
          </Pressable>
          <Pressable style={styles.icon} 
              onPress={() => onCreatePressed()}>
            <Image source={createIcon} style={{ height: 40, resizeMode: 'contain' }} />
            <Text >
              Create
            </Text>
          </Pressable>
          <Pressable style={styles.icon} onPress={() => onProfilePressed()}>
            <Image source={imageIcon} style={{ height: 40, resizeMode: 'contain' }} />
            <Text>
              Profile</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '45%',
    backgroundColor: '#ffffff',
    position: 'fixed',
    bottom: 0,
    height: '100%',
  },
  cardContent: {
    width: '100%',
  },
  horizontalLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    width: '225%',
  },
  icon: {
    height: 30,
    width: '25%',
    alignItems: 'center',
  },
})

export default NavigationBar
