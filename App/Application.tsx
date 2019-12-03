import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text } from "react-native";
import Current from "./Current/Components/Current";
import Daily from "./Daily/Components/Daily";
import Hourly from "./Hourly/Components/Hourly";
import { Colors } from "./Styles";

export default class Application extends React.Component {
  public render() {
    return (
      <LinearGradient
        colors={[Colors.yellowLight, Colors.yellowDark]}
        style={styles.container}
      >
        <Current />
        <Daily />
        <Hourly />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },
});
