import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text> Game Over! </Text>
      <Button title="NEW GAME" onPress={() => props.back()} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  }
});
