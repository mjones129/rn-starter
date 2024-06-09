import React, {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return <View>
    <Button
      title="Increase"
      onPress={() => {
        // don't modifiy state variables directly like this 
        // count++;
        setCount(count + 1);
      }}
    />
    <Button
      title="Decrease"
      onPress={() => {
        setCount(count - 1);
      }}
    />
    <Text>Current Count: {count}</Text>
  </View>
}

const styles = StyleSheet.create({})

export default CounterScreen;
