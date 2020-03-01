import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Header } from "./components/Header";
import { StartGameScreen } from "./screens/StartGameScreen";
import { GameScreen } from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGame = num => {
    setUserNumber(num)
  }

  let content = <StartGameScreen onStart={startGame} />;
  if (content) {
    if (userNumber) {
      content = <GameScreen userChoice={userNumber} />;
    }
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
