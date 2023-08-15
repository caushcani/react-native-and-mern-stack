import React from "react";
import { Pressable, View, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Color } from "../../utils/Color";

export const Filter = () => {
  return (
    <Pressable>
      <View
        style={{
          backgroundColor: Color.black,
          padding: 8,
          borderRadius: 50,
        }}
      >
        <MaterialCommunityIcons
          name="filter-variant"
          size={22}
          color={Color.white}
        />
      </View>
    </Pressable>
  );
};
