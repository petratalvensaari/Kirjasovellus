import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, FlatList, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Homescreen from "./Components/Homescreen";
import BooklistNavigator from './Components/BooklistNavigator';

const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "#88d1cb",
        },
        headerTintColor: "#f0fdfa",
      }}>
        <Tab.Screen
          name="Kotisivu"
          component={Homescreen}
        />
        <Tab.Screen
          name="Lukemani kirjat"
          component={BooklistNavigator}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#ffe4e1',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    marginTop: 200,
    marginBottom: 20,
    width: 200,
    borderColor: 'black',
    borderWidth: 1
  },
  napit: {
    marginTop: 30,
    flexDirection: 'row',
    margin: 10,
    width: 150,
    justifyContent: 'space-between',
  },
  text: {
    marginTop: 30,
    color: "black",
  }
});