import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface ICategoryProp {
  name: string;
  isActive: boolean;
  onPress: (val: string) => void;
}
export const Category = (props: ICategoryProp) => {
  const { name, isActive, onPress } = props;
  return (
    <TouchableOpacity onPress={() => onPress(name)}>
      <View
        style={{
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 20,
          backgroundColor: isActive ? "black" : "white",
          padding: 15,
          width: "auto",
        }}
      >
        <Text
          style={{
            color: isActive ? "white" : "black",
            fontWeight: "bold",
          }}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
