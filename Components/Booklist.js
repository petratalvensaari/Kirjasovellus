import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

function Booklist({ navigation }) {

  return (
    <View style={styles.container}>
      <Text>Lista lukemista kirjoistani</Text>

      <Button title="Lisää uusi kirja" size="s" backgroundColor="#ffb6c1"
        onPress={() => navigation.navigate('Uuden kirjan lisäys')}
      />

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

export default Booklist;