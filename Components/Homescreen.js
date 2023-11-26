import React from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';

function Homescreen() {
  return (
    <View style={styles.container}>
      <Text>Tervetuloa kirjasovellukseeni!</Text>
      <Image style={{width:400, height: 250}}
      source={{uri: 'https://www.bookea.fi/wp/wp-content/uploads/sites/5560/2022/03/books.jpeg'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf0e6',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    color: "black",
  }
});

export default Homescreen;