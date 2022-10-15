import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ChallengeCard from '../ChallengeCard/ChallengeCard';
import NavigationBar from '../NavigationBar/NavigationBar';
import { ScrollView } from 'react-native';
import ProgressCard from '../ProgressCard/ProgressCard';

export default function HomePage() {
  const levels = [5, 10, 9, 2, 1, 4, 5, 10, 9, 2, 1, 4]
  return (
    <View style={styles.container}>
      
      <SearchBar />
      <View style={styles.scroller}>
        <ScrollView>
        <View style={styles.container}>
      { levels.map(i => {
        return <ProgressCard level={i}/>
      })
      }
    </View>
        </ScrollView>
      </View>
      <NavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  scroller: {
    marginBottom: '80px',
  },
  container: {
    backgroundColor: '#f9f9f9',
    alignItems: 'left',
  },
});
