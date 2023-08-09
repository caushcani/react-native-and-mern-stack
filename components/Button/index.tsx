import { Text, StyleSheet, Pressable } from "react-native";

interface IButtonProps {
  title: string;
  onPress: () => void;
  style?: any;
  textStyle: any;
}
export const Button = (props: IButtonProps) => {
  const { title, onPress, style, textStyle } = props;
  return (
    <Pressable style={style ? style : styles.button} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
});
