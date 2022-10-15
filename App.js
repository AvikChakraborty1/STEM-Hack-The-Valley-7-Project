import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import HTVButton from './Components/HTVButton/HTVButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './Components/LoginPage/LoginPage';
import RegistrationPage from './Components/RegistrationPage/Register';
import BrowsePage from './Components/BrowsePage/BrowsePage';
import HomePage from './Components/HomePage/HomePage'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name ="LoginPage" component={LoginPage} /> 
        <Stack.Screen name ="RegistrationPage" component={RegistrationPage} />
        <Stack.Screen name ="BrowsePage" component={BrowsePage} />
        <Stack.Screen name ="HomePage" component={HomePage} />
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
