import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text, TextInput, FlatList } from "react-native";
import Addbook from "./Addbook";


export default function Booklist({ route, navigation }) {
  const { bookData } = route.params || { bookData: [] };

  return (
    <View style={styles.container}>
      <FlatList
        data={bookData}
        renderItem={({ item }) => (
          <Text>{item.title} - {item.writer} ({item.year})</Text>
        )}
      />
      <Button style={styles.button} title="Tästä uuden kirjan lisäykseen" size="s" backgroundColor="#faf0e6"
      onPress={() => navigation.navigate('Uuden kirjan lisäys')}
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
