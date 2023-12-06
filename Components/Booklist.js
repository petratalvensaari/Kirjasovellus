import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text, TextInput, FlatList } from "react-native";


export default function Booklist({ navigation }) {

  const [data, setData] = useState([]);
  const [key, setKey] = useState(0);

  const buttonAdd = (bookName, writer, year) => {
    const newBook = { id: key, title: bookName, writer: writer, year: year };
    setData(prevData => [...prevData, newBook]);
    setKey(prevKey => prevKey + 1);
  };


  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Text>{item.title} - {item.writer} ({item.year})</Text>
        )}
      />
      <Button style={styles.button} title="Tästä uuden kirjan lisäykseen" size="s" backgroundColor="#faf0e6"
      onPress={() => navigation.navigate('Uuden kirjan lisäys', {buttonAdd} )}
    />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf0e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
