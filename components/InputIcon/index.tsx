import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

export const InputIcon = () => {
  return (
    <View style={styles.inputContainer}>
      <AntDesign name="search1" style={styles.icon} size={20} />
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
    padding: 10,
    paddingStart: 30,
    // borderWidth: 1,
    borderRadius: 15,
    borderColor: "black",
    width: "100%",
    fontSize: 22,
    backgroundColor: "white",
    // textAlign: "center",
  },
  icon: {
    position: "absolute",
    color: "black",
    paddingHorizontal: 5,
  },
});
