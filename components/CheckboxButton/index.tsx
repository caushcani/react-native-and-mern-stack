import { View, Pressable, Text, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { Color } from "../../utils/Color";
interface ICheckboxButtonProp {
  onPress: any;
  title: string;
  isActive: boolean;
}

export const CheckboxButtoon = (props: ICheckboxButtonProp) => {
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
        {isActive ? (
          <AntDesign
            name={"checkcircleo"}
            color={isActive ? Color.white : Color.gray}
            size={24}
          />
        ) : (
          <Entypo
            name={"circle"}
            color={isActive ? Color.white : Color.gray}
            size={24}
          />
        )}
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
    paddingVertical: 6,
    width: "44%",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: Color.black,
  },
});
