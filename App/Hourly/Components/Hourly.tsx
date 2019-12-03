import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Props, State } from "./Hourly.interface";

export default class Hourly extends React.Component<Props, State> {
  public render() {
    return (
      <View style={styles.container}>
        <Text>Hourly</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue"
  }
});
