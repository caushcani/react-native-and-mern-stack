import { View, Text, Pressable } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function GoBack() {
  const navigate = useNavigation();
  return (
    <Pressable
      onPress={() => {
        if (navigate.canGoBack()) {
          navigate.goBack();
        }
      }}
    >
      <View>
        <Ionicons name="caret-back-circle-sharp" size={40} />
      </View>
    </Pressable>
  );
}
