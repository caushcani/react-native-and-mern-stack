import { View } from "react-native";

interface IDividerProp {
  color: string;
  width: number;
  marginHorizontal: number;
}

export const Divider = (props: IDividerProp) => {
  const { color, width, marginHorizontal } = props;
  return (
    <View
      style={{
        borderBottomColor: color,
        borderBottomWidth: width,
        marginHorizontal: marginHorizontal,
      }}
    />
  );
};
