import React from "react";
import { Pressable, View, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const Filter = () => {
  return (
    <Pressable>
      <View
        style={{
          backgroundColor: "black",
          padding: 8,
          borderRadius: 50,
        }}
      >
        <MaterialCommunityIcons name="filter-variant" size={22} color="white" />
      </View>
    </Pressable>
  );
};
