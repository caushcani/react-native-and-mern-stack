import React from "react";
import { Pressable, View, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const Filter = () => {
  return (
    <Pressable>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          backgroundColor: "black",
          padding: 20,
          borderRadius: "50%",
        }}
      >
        <MaterialCommunityIcons name="filter-variant" size={30} color="white" />
      </View>
    </Pressable>
  );
};
