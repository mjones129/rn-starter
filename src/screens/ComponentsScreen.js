import React from "react";
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
  const greeting = 'Hi there!';
  return <View>
    <Text style={styles.textStyle}>This is the components screen.</Text>
    <Text>This is a second, separate text element. {greeting}</Text>
  </View>
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default ComponentsScreen;
