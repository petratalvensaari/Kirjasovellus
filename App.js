import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, FlatList, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (

     <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Koti" component={stacks} />
        <Stack.Screen name="Uuden kirjan lisäys" component={Addbook} />
      </Stack.Navigator>
     </NavigationContainer>
   
  
  );
}

function stacks() {
  return (
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
     component={Booklist}
    />
        </Tab.Navigator>

   
   );
 }


function Homescreen() {
  return (
    <View style={styles.container}>
    <Text>Tervetuloa kirjasovellukseeni!</Text>
  </View>
  );
}

function Addbook() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const addToList = () => {
    setData([...data, { key: text }]);
    setText('');
  }

  const clearList= () => {
    setData([]);
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={text => setText(text)} value={text} />
      <View style={styles.napit}>
        <Button onPress={addToList} title="+Lisää kirja" />
        <Button onPress={clearList} title="Kumoa" />
      </View>
      <FlatList style={styles.list}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item.key}</Text>
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}



function Booklist({navigation}) {
  return (
    <View style={styles.container}>
       <Text>Lista lukemista kirjoistani</Text>
       
       <Button title="Lisää uusi kirja" size="s" backgroundColor="#ffb6c1" 
    onPress={() => navigation.navigate('Uuden kirjan lisäys')}
    />

  </View>
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
    flexDirection:'row', 
    margin: 10,
    width: 150,
    justifyContent:'space-between',
  },
  text:{
    marginTop: 30,
    color: "black",
  }
});