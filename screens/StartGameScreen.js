import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

export const StartGameScreen = props => {
    return (
      <View style={styles.screen}>
        <Text style={{marginBottom: 10, fontSize :18}}> Start a New Game!</Text>
        <View style={styles.inputContainer}>
            <Text>Select a Number</Text>
            <TextInput />
            <View style={styles.rcbuttons}>
                <Button title='Reset'/>
                <Button title='Confirm'/>
            </View>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    screen: {
     flex: 1,
     padding: 10,
     alignItems: 'center'
    },
    headerTitle: {
      fontSize: 18,
      color:'white'
    },
    inputContainer: {
        width:300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
        },
    rcbuttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 15
    }
  });