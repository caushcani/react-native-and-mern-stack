import { Text, StyleSheet, Pressable, View } from "react-native";
import { Color } from "../../utils/Color";

interface IButtonProps {
  title: string;
  onPress: () => void;
  style?: any;
  textStyle: any;
  icon?: any;
}
export const Button = (props: IButtonProps) => {
  const { title, onPress, style, textStyle, icon } = props;
  return (
    <Pressable style={style ? style : styles.button} onPress={onPress}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        {icon}
        <Text style={textStyle}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    width: "80%",
    backgroundColor: Color.black,
  },
});
