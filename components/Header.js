import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}> {props.title} </Text>{" "}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: "#ff7f00",
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    fontSize: 18
  }
});
