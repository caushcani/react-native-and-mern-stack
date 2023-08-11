import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, Pressable } from "react-native";

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
        <Image source={{ uri: BATMAN }} height={40} width={40} />
      </View>
    </Pressable>
  );
};
