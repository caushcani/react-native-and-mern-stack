import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";

const BATMAN = "https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png";
export const Avatar = () => {
  const navigate = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigate.navigate("Profile");
      }}
    >
      <View>
        <Image source={{ uri: BATMAN }} style={{ height: 36, width: 36 }} />
      </View>
    </Pressable>
  );
};
