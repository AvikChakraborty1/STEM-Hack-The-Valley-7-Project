import { StyleSheet, Text, Image, View, Pressable, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react';

function NavigationBar(props) {
  var imageIcon = require('../../assets/peopleIcon.png')
  var homeIcon = require('../../assets/homeicon.png')
  var searchIcon = require('../../assets/homeicon.png')
  var createIcon = require('../../assets/homeicon.png')

  const navigation = useNavigation();

  const onHomePressed = () => {
    //console.warn("sign in pressed");
    //navigation.navigate('HomePage');
    props.handler(0)
  }
  const onBrowsePressed = () => {
    //console.warn("browse pressed");
    props.handler(1)
  }

  const onCreatePressed = () => {
    //console.warn("create pressed");
    props.handler(2)
  }

  const onProfilePressed = () => {
    //console.warn("profile pressed");
    props.handler(3)
  }

  return (
    <View style={navbar.card}>
        <View style={navbar.horizontalLayout}>
          <Pressable style={navbar.icon} 
              onPress={() => props.handler(0)}>
            <Image source={homeIcon} style={{ height: 40, resizeMode: 'contain' }} />
            <Text >
              Home
            </Text>
          </Pressable>
          <Pressable style={navbar.icon} 
              onPress={() => props.handler(1)}>
            <Image source={searchIcon} style={{ height: 40, resizeMode: 'contain' }} />
            <Text >
              Search
            </Text>
          </Pressable>
          <Pressable style={navbar.icon} 
              onPress={() => props.handler(2)}>
            <Image source={createIcon} style={{ height: 40, resizeMode: 'contain' }} />
            <Text >
              Create
            </Text>
          </Pressable>
          <Pressable style={navbar.icon} onPress={() => props.handler(3)}>
            <Image source={imageIcon} style={{ height: 40, resizeMode: 'contain' }} />
            <Text>
              Profile</Text>
          </Pressable>
        </View>
    </View>
  )
}

const navbar = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'flex-end',
    position: 'fixed',
    paddingBottom: 40,
    height: 100,
  },
  horizontalLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    width: '100%',
  },
  icon: {
    height: 30,
    width: '25%',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
  },
})

export default NavigationBar
