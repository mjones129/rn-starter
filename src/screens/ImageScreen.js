import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail.js';

const ImageScreen = () => {
  return <View>
    <Text style={styles.textSize}>Hello World From Image Screen</Text>
    <ImageDetail title="Forest"/>
    <ImageDetail title="Beach"/>
    <ImageDetail title="Mountain"/>
  </View>
}

const styles = StyleSheet.create({
  textSize: 30
})

export default ImageScreen;
