import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          Alvin Mukiibi, Welcome to React Native Programming. Its gonna be one
          hell of a drive but we both know you will make it. Aya, Ebu Tuanze
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    fontFamily: "Roboto",
    textAlign: "center",
    fontSize: 16
  }
});

export default Home;
