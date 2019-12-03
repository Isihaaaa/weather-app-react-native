import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Input } from "react-native-elements";
import { SearchInput } from "../../Primitives/Inputs";
import { Colors } from "../../Styles";
import { Props, State } from "./Current.interface";

export default class Current extends React.Component<Props, State> {
  public state: State = {
    location: ""
  };
  private readonly _searchInputRef = React.createRef<SearchInput>();

  public render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputWrapper}> 
          <SearchInput
            ref={this._searchInputRef}
            placeholder="Get your location"
            onChangeText={location => this.setState({ location })}
            onSubmitEditing={() => this._forecastSearchWithString()}
          />
          <Text>{this.state.location}</Text>
        </View>
      </View>
    );
  }

  private _forecastSearchWithString() {
    // tslint:disable-next-line: no-console
    console.log("Done gomb megnyomasa location: " + this.state.location);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    borderBottomColor: Colors.greyPrimary,
    borderBottomWidth: 4,
    width: "100%",
    backgroundColor: "red",
  },
  inputWrapper: {
    
  },
});
