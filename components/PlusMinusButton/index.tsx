import { View, Pressable, Text } from "react-native";
import { useState } from "react";

export const PlusMinusButton = () => {
  const [count, setCount] = useState(1);
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
          <Pressable onPress={() => setCount(count - 1)}>
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
