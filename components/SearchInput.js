import React from "react";
import { Stylesheet, TextInput, View } from "react-native";

export default class SearchInput extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          placeholder="Search any city"
          placeholderTextColor="white"
          style={styles.textInput}
          clearButtonMode="always"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 20,
    backgroundColor: '#666',
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInput: {
    backgroundColor: "#666",
    color: "white",
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: "center"
  }
});
