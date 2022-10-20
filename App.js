import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import HTVButton from './Components/HTVButton/HTVButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './Components/LoginPage/LoginPage';
import RegistrationPage from './Components/RegistrationPage/Register';
import BrowsePage from './Components/BrowsePage/BrowsePage';
import HomePage from './Components/HomePage/HomePage';
import CreateChallengePage from './Components/CreateChallengePage/CreateChallengePage';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import LeaderboardPage from './Components/LeaderboardPage/LeaderboardPage';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>     
        <Stack.Screen name ="LoginPage" component={HomePage} /> 
        <Stack.Screen name ="RegistrationPage" component={RegistrationPage} />
        <Stack.Screen name ="BrowsePage" component={BrowsePage} />
        <Stack.Screen name ="HomePage" component={HomePage} />
        <Stack.Screen name ="CreateChallengePage" component={CreateChallengePage} />
        <Stack.Screen name ="ProfilePage" component={ProfilePage} />
        <Stack.Screen name ="LeaderboardPage" component={LeaderboardPage} />     
      </Stack.Navigator>
      {/* <View style={styles.container}>
        <Text>Hello world! hi { name }</Text>
        <HTVButton />
        <Text>asdfasdf</Text>
        <StatusBar style="auto" />
        </View> */}
      {/* <Text>Hello world!</Text> */}
    </NavigationContainer>

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
