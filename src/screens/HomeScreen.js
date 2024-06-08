import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = () => {
  return <View>
    <Text style={styles.text}>Why... hello there.</Text>
    <Button
      title="Go To Components Demo"
      onPress={() => console.log('Button Pressed')}
    />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;


