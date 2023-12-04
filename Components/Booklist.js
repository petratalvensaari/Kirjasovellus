import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text, TextInput, } from "react-native";
import Addbook from "./Addbook";


const Booklist = ({ navigation }) => {
 
return (
  
  <View style={styles.container}>
    <Text>Tässä pitäisi näkyä lisätyt kirjat</Text>
    <Button title="Tästä uuden kirjan lisäykseen" size="s" backgroundColor="#ffb6c1"
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

export default Booklist;