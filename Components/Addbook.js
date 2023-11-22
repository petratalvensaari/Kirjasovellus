import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

function Addbook({ route }) {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const addToList = () => {
		saveBook();
    setData([...data, { key: text }]);
    setText('');
  }

  const clearList = () => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe4e1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Addbook;