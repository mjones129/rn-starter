import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return <View>
    <Text style={styles.text}>Why... hello there.</Text>
    <Button
      title="Go To Components Demo"
      onPress={() => props.navigation.navigate('Components')}
    />
    <TouchableOpacity onPress={() => console.log('List Pressed')}>
      <Text>Go To List Demo</Text>
    </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;


