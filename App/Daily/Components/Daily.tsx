import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../Styles";
import { Props, State } from "./Daily.interface";

export default class Daily extends React.Component<Props, State> {
  public render() {
    return (
      <View style={styles.container}>
        <Text>Daily</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green"
  },
});
