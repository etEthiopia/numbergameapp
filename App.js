import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Header } from "./components/Header";
import { StartGameScreen } from "./screens/StartGameScreen";
import { GameScreen } from "./screens/GameScreen";
import { GameOverScreen } from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [rounds, setRounds] = useState(0);

  const gameOverHandler = roundNums => {
      setRounds(roundNums)
      
  }
  const newGameHandler = () => {
    setRounds(0)
    setUserNumber(null);
}


  const startGame = num => {
    setUserNumber(num)
    // setRounds(0);
  }

  let content = <StartGameScreen onStart={startGame}  />;
  if (content) {
    if (userNumber && rounds ===0) {
      content = <GameScreen cancel={newGameHandler} userChoice={userNumber} onGameOver={gameOverHandler} />;
    }else if(rounds > 0){
        content= <GameOverScreen back={newGameHandler}/>
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
