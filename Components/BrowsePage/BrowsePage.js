import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ChallengeCard from '../ChallengeCard/ChallengeCard';
import NavigationBar from '../NavigationBar/NavigationBar';
import { ScrollView } from 'react-native';
import { initializeApp } from 'firebase/app';

import { getDatabase, ref, onValue, set } from 'firebase/database';

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



export default function BrowsePage() {
  
  const [challengeList, setChallengeList] = useState([]);
  const [refresh, setRefresh] = useState(0)
  const arr = [1,2,3,4]

  const challengeListener = () => {
    const db = getDatabase();
    const reference = ref(db, 'Challenges/');
    onValue(reference, (snapshot) => {
      var data = snapshot.val();
      var list = []
      if(snapshot.exists()){
        for(let key in data){
          list.push(data[key]);
        }
      }
      setChallengeList(list)
    });
  }

  useEffect(() => {
    challengeListener();
    console.log(challengeList)
  }, [])


  //etRefresh(refresh+1);
  return (
    <View style={styles.container}>
      
      <SearchBar />
      <View style={styles.scroller}>
        <ScrollView>
          {
            challengeList.length > 0 && challengeList.map((item) => {
              return <ChallengeCard name={item.name} desc={item.description} imageURL={item.image}/>
            })
          }
        </ScrollView>
      </View>
      <NavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  scroller: {
    marginBottom: '80px',
    height: '80%',
  },
  container: {
    flex: '1',
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
