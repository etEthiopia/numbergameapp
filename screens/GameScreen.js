import React, { useState, useRef } from "react";
import { View, StyleSheet, Text, TextInput, Button, Alert } from "react-native";
import colors from "../constants/colors";

const generateNum = (min, max, exclude)=> {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rnd = Math.floor(Math.random() * (max-min) + min)
    if(rnd === exclude){
        return generateNum(min, max, exclude)
    }
    else{
        return rnd;
    }
}

export const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateNum(1, 100, props.userChoice));
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(()=>{
        if(currentGuess === props.userChoice){}
    })

    const nextGuessBtnsHandler = gg => {
        if((gg === -1 && currentGuess < props.userChoice) || (gg === 1 && currentGuess > props.userChoice)){
            Alert.alert('No Cheating', 'Where are your Morals', [{text: 'OK', style: 'cancel'}])
        }
        else{
            if(gg === -1){
                currentHigh.current = currentGuess
            }
            if(gg === 1){
                currentLow.current = currentGuess
            }
           const next =  generateNum(currentLow.current, currentHigh.current, currentGuess)
            setCurrentGuess(next);
            
        }
    }

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <View style={styles.numberContainer}>
    <Text style={styles.numberText}>{currentGuess}</Text>
            </View>
            <View style={styles.inputContainer}>
        
        <View style={styles.rcbuttons}>
          <View style={styles.btnObj}>
            <Button
              onPress= {() => {nextGuessBtnsHandler(-1)}}
              color={colors.accent}
              title="LOWER"
            />
          </View>
          <View style={styles.btnObj}>
            <Button
              onPress= {() => {nextGuessBtnsHandler(1)}}
              color={colors.primary}
              title="HIGHER"
            />
          </View>
        </View>
      </View>
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
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
    numberContainer: {
        borderWidth: 2,
        borderColor: colors.accent,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: colors.accent,
        fontSize: 32
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