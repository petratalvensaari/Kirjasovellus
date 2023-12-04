import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import Booklist from "./Booklist";
import { StyleSheet, Text, View, Button, TextInput, FlatList, SafeAreaView } from 'react-native';

export default function Addbook() {
  const [book, setBook] = useState('');
  const [data, setData] = useState([]);
  const [key, setKey] = useState(0);

  const buttonAdd = ({ navigation }) => {
    setData([...data, { id: key, title: book, }]);
    setKey(key + 1);

    console.log(data);
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput
            style={styles.input}
            onChangeText={book => setBook(book)} value={book}
          />
        <View style={styles.buttons}>
        <Button title="Lisää uusi kirja" size="s" backgroundColor="#ffb6c1"
      onPress={() => navigation.navigate('Kirjalista')}
    />
          <StatusBar style="auto" />
        </View>
        <View style={styles.booklist}>
        <FlatList
          data={data}
          renderItem={({ item }) =>
            <Text>{item.title}</Text>
          }
        />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf0e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    width: 120,
  },
  centerResult: {
    alignItems: 'center',
  },
  input: {
    marginBottom: 20,
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  grocerylist: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
  },
});

