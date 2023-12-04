import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text, TextInput, FlatList } from "react-native";
import Addbook from "./Addbook";


export default function Booklist({ route, navigation }) {
  const { bookData } = route.params || { bookData: [] };

  return (
    <View>
      <FlatList
        data={bookData}
        renderItem={({ item }) => (
          <Text>{item.title} - {item.writer} ({item.year})</Text>
        )}
    
      />
<Button title="Tästä uuden kirjan lisäykseen" size="s" backgroundColor="#faf0e6"
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
});
