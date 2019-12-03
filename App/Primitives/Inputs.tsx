import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon, Input, InputProps } from "react-native-elements";
import { Colors } from "../Styles";

export class SearchInput extends React.Component<
  InputProps,
  { location: string }
> {
  public state: { location: "Budapest" };
  private _input = React.createRef<Input>();

  public render() {
    return (
      <Input
        ref={this._input}
        inputContainerStyle={{
          backgroundColor: Colors.greyPrimary,
          borderBottomWidth: 0,
          borderRadius: 8,
          padding: 10,
          shadowColor: Colors.shadowDark,
          shadowOffset: { height: 1, widht: 1 },
          shadowOpacity: 0.5,
          width: 250
        }}
        inputStyle={{
          color: Colors.yellowLight
        }}
        placeholderTextColor={Colors.yellowLight}
        rightIcon={
          <TouchableOpacity>
            <Icon
              name="search"
              type="font-awesome"
              color={Colors.yellowLight}
              onPress={() => this._forecastSearchWithString()}
            />
          </TouchableOpacity>
        }
        onChangeText={location => this.setState({ location })}
        {...this.props}
      />
    );
  }

  private _forecastSearchWithString() {
    // tslint:disable-next-line: no-console
    console.log("Search ikon megnyomasa location: " + this.state.location);
  }
}
