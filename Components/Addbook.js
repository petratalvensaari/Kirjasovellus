import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import Booklist from "./Booklist";
import { StyleSheet, Text, View, Button, TextInput,  SafeAreaView } from 'react-native';

export default function Addbook({navigation}) {
  const [bookName, setBookName] = useState('');
  const [writer, setWriter] = useState('');
  const [year, setYear] = useState('');
  const [data, setData] = useState([]);
  const [key, setKey] = useState(0);

  const buttonAdd = () => {
    const newBook = { id: key, title: bookName, writer: writer, year: year };
    const updatedData = [...data, newBook];
    
    setData(updatedData);
    setKey(key + 1);
    setBookName('');
    setWriter('');
    setYear('');
  
    navigation.navigate('Kirjalista', { bookData: updatedData });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
      <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={text => setBookName(text)}
          value={bookName}
        />
      <TextInput
          style={styles.input}
          placeholder="Writer"
          onChangeText={text => setWriter(text)}
          value={writer}
        />
        <TextInput
          style={styles.input}
          placeholder="Year"
          onChangeText={text => setYear(text)}
          value={year}
          keyboardType="numeric" 
        />
        <View style={styles.buttons}>
        <Button
            title="Lisää kirja"
            onPress={buttonAdd}
          />
          <StatusBar style="auto" />
        </View>
        <View style={styles.booklist}>
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
  booklist: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
  },
});

