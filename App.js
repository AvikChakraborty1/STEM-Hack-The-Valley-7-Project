import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import BrowsePage from './Components/BrowsePage/BrowsePage';
import RegisterPage from './Components/RegistrationPage/Register';
import ProgressCard from './Components/ProgressCard/ProgressCard';
import HomePage from './Components/HomePage/HomePage';
import LeaderboardPage from './Components/LeaderboardPage/LeaderboardPage';

export default function App() {
  const levels = [5, 10, 9, 2, 1, 4]
  return (
    <LeaderboardPage />
  );
}

const styles = StyleSheet.create({
  scroller: {
    marginBottom: '80px',
  },
  container: {
    flex: '1',
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
