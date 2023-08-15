import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Color } from "../../utils/Color";

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
          borderColor: Color.black,
          borderRadius: 20,
          backgroundColor: isActive ? Color.black : Color.white,
          padding: 8,
          width: "auto",
        }}
      >
        <Text
          style={{
            color: isActive ? Color.white : Color.black,
            fontWeight: "bold",
          }}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
