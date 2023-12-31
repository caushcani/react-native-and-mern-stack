import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Color } from "../../utils/Color";

interface IProductSize {
  title: string;
  isActive: boolean;
  onPress: (val: any) => void;
}

export const ProductSize = (props: IProductSize) => {
  const { onPress, title, isActive } = props;

  const activeStyle = {
    backgroundColor: isActive ? Color.black : Color.white,
  };

  return (
    <Pressable
      style={[
        styles.button,
        activeStyle,
        {
          borderWidth: 1,
          borderBlockColor: isActive ? Color.black : Color.gray,
        },
      ]}
      onPress={onPress}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 5,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: isActive ? Color.white : Color.gray,
          }}
        >
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    width: 50,
    height: 50,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: Color.black,
  },
});
