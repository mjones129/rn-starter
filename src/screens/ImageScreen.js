import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail.js';

const ImageScreen = () => {
  return <View>
    <Text style={styles.textSize}>Hello World From Image Screen</Text>
    <ImageDetail title="Forest" image={require('../../assets/forest.jpg')} score={7}/>
    <ImageDetail title="Beach" image={require('../../assets/beach.jpg')} score={8}/>
    <ImageDetail title="Mountain" image={require('../../assets/mountain.jpg')} score={9}/>
  </View>
}

const styles = StyleSheet.create({
  textSize: 30
})

export default ImageScreen;
