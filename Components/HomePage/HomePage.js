import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import ChallengeCard from '../ChallengeCard/ChallengeCard'
import NavigationBar from '../NavigationBar/NavigationBar'
import { ScrollView } from 'react-native'
import ProgressCard from '../ProgressCard/ProgressCard'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue, set } from 'firebase/database'
import { useNavigation } from '@react-navigation/native'
import ProfilePage from '../ProfilePage/ProfilePage'
import BrowsePage from '../BrowsePage/BrowsePage'
import LeaderboardPage from '../LeaderboardPage/LeaderboardPage'
import CreateChallengePage from '../CreateChallengePage/CreateChallengePage'

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDYWL3POFDFXDAASpxwi7D_9L19ZyjITfA',
  authDomain: 'hackthevalley-86d05.firebaseapp.com',
  databaseURL: 'https://hackthevalley-86d05-default-rtdb.firebaseio.com',
  projectId: 'hackthevalley-86d05',
  storageBucket: 'hackthevalley-86d05.appspot.com',
  messagingSenderId: '277759021828',
  appId: '1:277759021828:web:01abad7b753075bc61b651',
  measurementId: 'G-9KCDJZ9YP3',
}

let myApp = initializeApp(firebaseConfig)

export default function HomePage() {

  var imageIcon = require('../../assets/peopleIcon.png')
  var homeIcon = require('../../assets/homeicon.png')
  var searchIcon = require('../../assets/homeicon.png')
  var createIcon = require('../../assets/homeicon.png')


  const [page, setPage] = useState(3)
  const [challengeList, setChallengeList] = useState([])
  const [challengeSelected, setChallengeSelected] = useState(null)

  const onChallengedPressed = (item) => {
    setChallengeSelected(item)
  }

  const handler = (pageNum) => {
    console.log(pageNum)
    pageNum ? setPage(pageNum): setPage(0);
  }

  const challengeListener = () => {
    const db = getDatabase()
    const reference = ref(db, `Users/-NEPTSWXJrHj2fWHFpd2/challenges`)
    onValue(reference, (snapshot) => {
      var data = snapshot.val()
      var list = []
      if (snapshot.exists()) {
        for (let key in data) {
          list.push(data[key])
        }
      }
      setChallengeList(list)
      console.log('Challenge', list)
    })
  }

  useEffect(() => {
    challengeListener()
    console.log(challengeList)
  }, [])

  {
    return (
      <View style={styles.container}>
        {challengeSelected ? (
          <>
          <View style={styles.scroller}>
              <Pressable
                onPress={() => onChallengedPressed(null)}
                style={styles.container}
              >
                <LeaderboardPage info={challengeSelected} />
              </Pressable>
          </View>
          </>
        ) : (
          <>
            
            <View style={styles.scroller}>
            {page <= 1 && <Image
              source={require('../../assets/stemText.png')}
              style={{
                width: '100%',
                height: 70,
                resizeMode: 'contain',
                marginTop: 40,
                position: 'fixed',
              }}
            />}
              <ScrollView>
                { 
                page == 0 ? 
                 challengeList.map((item) => {
                  return (
                    <Pressable onPress={() => onChallengedPressed(item)}>
                      <ProgressCard
                        rank={item.rank}
                        name={item.name}
                        level={parseInt(
                          (item.progress / item.endValue) * 10,
                          10
                        )}
                      />
                    </Pressable>
                  )
                })
                : page == 1 ?
                  <BrowsePage />
                : page == 2 ? 
                  <CreateChallengePage />
                : page == 3 ?
                  <ProfilePage />
                : null
                }
              </ScrollView>
            </View>
          </>
        )}
        <View style={styles.navbar.card}>
          <View style={styles.navbar.horizontalLayout}>
            <Pressable style={styles.navbar.icon} 
                onPress={() => handler(0)}>
              <Image source={homeIcon} style={{ height: 40, resizeMode: 'contain', width: '45%' }} />
              <Text >
                Home
              </Text>
            </Pressable>
            <Pressable style={styles.navbar.icon} 
                onPress={() => handler(1)}>
              <Image source={searchIcon} style={{ height: 40, resizeMode: 'contain', width: '45%' }} />
              <Text >
                Search
              </Text>
            </Pressable>
            <Pressable style={styles.navbar.icon} 
                onPress={() => handler(2)}>
              <Image source={createIcon} style={{ height: 40, resizeMode: 'contain',  width: '45%' }} />
              <Text >
                Create
              </Text>
            </Pressable>
            <Pressable style={styles.navbar.icon} onPress={() => handler(3)}>
              <Image source={imageIcon} style={{ height: 40, resizeMode: 'contain' , width: '45%'  }} />
              <Text>
                Profile</Text>
            </Pressable>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: '1',
    alignItems: 'left',
    backgroundColor: '#ffffff',
  },
  scroller: {
    height: '87%',
    width: '100%',
    backgroundColor: '#ffffff',
  },
  navbar: {
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
    },
    icon: {
      alignItems: 'center',
      flex: 1,
      height: 30,
    },
  }
})