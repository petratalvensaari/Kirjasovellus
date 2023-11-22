import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Homescreen() {
  return (
    <View style={styles.container}>
      <Text>Tervetuloa kirjasovellukseeni!</Text>
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

export default Homescreen;