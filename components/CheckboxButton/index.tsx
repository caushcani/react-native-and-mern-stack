import { View, Pressable, Text, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
interface ICheckboxButtonProp {
  onPress: any;
  title: string;
  isActive: boolean;
}

export const CheckboxButtoon = (props: ICheckboxButtonProp) => {
  const { onPress, title, isActive } = props;

  const activeStyle = {
    backgroundColor: isActive ? "black" : "white",
  };

  return (
    <Pressable
      style={[
        styles.button,
        activeStyle,
        { borderWidth: 1, borderBlockColor: isActive ? "black" : "gray" },
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
        {isActive ? (
          <AntDesign
            name={"checkcircleo"}
            color={isActive ? "white" : "gray"}
            size={24}
          />
        ) : (
          <Entypo
            name={"circle"}
            color={isActive ? "white" : "gray"}
            size={24}
          />
        )}
        <Text
          style={{
            color: isActive ? "white" : "gray",
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
    width: "44%",
    // paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "black",
  },
});
