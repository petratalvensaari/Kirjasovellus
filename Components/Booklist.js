import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text, TextInput, } from "react-native";

// function Booklist({ navigation }) { //

const Booklist = ({ navigation }) => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [display, setDisplay] = useState(false);

  const resetForm =()=>{
    setDisplay(false);
    setName("");
    setAuthor("");
    setYear("")
  }


return (
  
  <View style={styles.container}>
    
    <TextInput
    style={styles.textInput}
    placeholder="Enter book name"
    onChangeText={(text)=>{setName(text)}}
    value={name}
    />
    <TextInput
    style={styles.textInput}
    placeholder="Enter author"
    onChangeText={(text)=>{setAuthor(text)}}
    value={author}
    />
    <TextInput
    style={styles.textInput}
    placeholder="Enter year"
    onChangeText={(text)=>{setYear(text)}}
    value={year}
    />


    <Button title="Lisää uusi kirja" size="s" backgroundColor="#ffb6c1"
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