import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

//TODO:: add icon
export const InputIcon = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={(text: any) => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    padding: 8,
    borderRadius: 15,
    borderColor: "black",
    width: "100%",
    fontSize: 18,
    backgroundColor: "white",
  },
  icon: {
    position: "absolute",
    color: "black",
    paddingHorizontal: 5,
  },
});
