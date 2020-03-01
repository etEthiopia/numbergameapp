import React from 'react';
import { View, StyleSheet, Text } from "react-native";

export const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Game Over !</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
      }
});