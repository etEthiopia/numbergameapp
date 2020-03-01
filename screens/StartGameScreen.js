import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button, Alert } from "react-native";
import colors from "../constants/colors";
import { Input } from "../components/Input";

export const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = val => {
    setEnteredValue(val.replace(/[^0-9]/g, ""));
  };
  const resetBtnHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };
  const confirmBtnHandler = () => {
    const cn = parseInt(enteredValue);
    if (cn === NaN || cn <= 0 || cn > 99) {
      Alert.alert("Invalid Number!", "Value should be 1 and 90.", [
        { text: "Ok", style: "destructive", onPress: resetBtnHandler }
      ]);
    } else {
      setConfirmed(true);
      setSelectedNumber(cn);
      setEnteredValue("");
    }
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = <Button title="Start Game" onPress={()=> props.onStart(selectedNumber)} />;
  }

  return (
    <View style={styles.screen}>
      <Text style={{ marginBottom: 10, fontSize: 18 }}> Start a New Game!</Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input
          onChangeText={numberInputHandler}
          value={enteredValue}
          autoCorrect={false}
          keyboardType="numeric"
          maxLength={2}
          style={styles.input}
        />
        <View style={styles.rcbuttons}>
          <View style={styles.btnObj}>
            <Button
              onPress={() => resetBtnHandler()}
              color={colors.accent}
              title="Reset"
            />
          </View>
          <View style={styles.btnObj}>
            <Button
              onPress={() => confirmBtnHandler()}
              color={colors.primary}
              title="Confirm"
            />
          </View>
        </View>
      </View>
      {confirmedOutput}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  headerTitle: {
    fontSize: 18,
    color: "white"
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginBottom: 25
  },
  input: {
    width: 50,
    textAlign: "center"
  },

  rcbuttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15
  },
  btnObj: {
    width: 90
  }
});
