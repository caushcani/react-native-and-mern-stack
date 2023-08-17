import { View, Pressable, Text } from "react-native";
import { useState, useEffect } from "react";

interface IPlusMinusButton {
  value: number;
  onPress: (val: number) => void;
}
export const PlusMinusButton = (props: IPlusMinusButton) => {
  const { onPress, value } = props;
  console.log("value", value);

  const [count, setCount] = useState(value !== null ? value : 1);

  useEffect(() => {
    if (onPress) {
      onPress(count);
    }
  }, [count]);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "gray",
          padding: 10,
          gap: 10,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Pressable
            onPress={() => {
              if (count > 0) {
                setCount(count - 1);
              }
            }}
          >
            <Text style={{ color: "white" }}>-</Text>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Text style={{ color: "white" }}>{count}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Pressable onPress={() => setCount(count + 1)}>
            <Text style={{ color: "white" }}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
