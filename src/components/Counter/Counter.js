import React from "react";
import { Button, Text, View } from "react-native";

const Counter = ({ counter, setCount, removeCounter }) => (
  <View>
    <View style={{ flexDirection: "row" }}>
      <Button onPress={() => setCount(counter - 1)} title="-" />
      <Button onPress={() => setCount(counter + 1)} title="+" />
      <Button onPress={() => setCount(0)} title="reset" />
      <Button onPress={removeCounter} title="remove" />
    </View>
    <Text>{counter}</Text>
  </View>
);
export default Counter;
