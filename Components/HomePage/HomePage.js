import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ChallengeCard from '../ChallengeCard/ChallengeCard';
import NavigationBar from '../NavigationBar/NavigationBar';
import { ScrollView } from 'react-native';
import ProgressCard from '../ProgressCard/ProgressCard';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { useNavigation } from '@react-navigation/native';
import BrowsePage from '../BrowsePage/BrowsePage';
import LeaderboardPage from '../LeaderboardPage/LeaderboardPage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDYWL3POFDFXDAASpxwi7D_9L19ZyjITfA",
  authDomain: "hackthevalley-86d05.firebaseapp.com",
  databaseURL: "https://hackthevalley-86d05-default-rtdb.firebaseio.com",
  projectId: "hackthevalley-86d05",
  storageBucket: "hackthevalley-86d05.appspot.com",
  messagingSenderId: "277759021828",
  appId: "1:277759021828:web:01abad7b753075bc61b651",
  measurementId: "G-9KCDJZ9YP3"
};

let myApp = initializeApp(firebaseConfig);

export default function HomePage() {

  const navigation = useNavigation();
  const [challengeList, setChallengeList] = useState([]);
  const [challengeSelected, setChallengeSelected] = useState(null)

  const onChallengedPressed = (item) => {
    setChallengeSelected(item)
  }

  const challengeListener = () => {
    const db = getDatabase();
    const reference = ref(db, `Users/-NEPTSWXJrHj2fWHFpd2/challenges`);
    onValue(reference, (snapshot) => {
      var data = snapshot.val();
      var list = []
      if(snapshot.exists()){
        for(let key in data){
          list.push(data[key]);
        }
      }
      setChallengeList(list)
      console.log('Challenge', list)
    });
  }

  useEffect(() => {
    challengeListener();
    console.log(challengeList)
  }, [])
  
  {

    return (
      challengeSelected ? 
      <Pressable onPress={() => onChallengedPressed(null)} style={styles.container}>
        <LeaderboardPage info={challengeSelected}/>
      </Pressable>
      :
    
    <View style={styles.container}>
      
      <Image source={require('../../assets/stemText.png')} style={{width: '100%', height: 70, resizeMode: 'contain', marginTop: '20px'}} />
      <View style={styles.scroller}>
        <ScrollView>
        <View style={styles.container}>
      { challengeList.map((item) => {
        return (
        <Pressable onPress={() => onChallengedPressed(item)}>
          <ProgressCard rank={item.rank} name={item.name} level={parseInt((item.progress / item.endValue) * 10, 10)}/>
        </Pressable>
        )
      })
      }
      </View>
        </ScrollView>
      </View>
      <Pressable onPress={() => onChallengedPressed(null)}>
        <NavigationBar />
      </Pressable>
    </View>
  );
}
}

const styles = StyleSheet.create({
  scroller: {
    paddingTop: '10px',
    marginBottom: '80px',
    height: '75%',
  },
  container: {
    flex: '1',
    backgroundColor: '#ffffff',
    alignItems: 'left',
    justifyContent: 'center',
  },
});
