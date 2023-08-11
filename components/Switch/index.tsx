import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const HEIGHT = 24;
const WIDTH = HEIGHT * 2;

export const Switch = () => {
  const [active, setActive] = useState(false);

  const translateX = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  const handleAnimate = (val: number) => {
    translateX.value = withTiming(val, {}, (finished) => {
      if (finished) {
        runOnJS(setActive)(val !== 0);
      }
    });
  };
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        justifyContent: "center",
        height: HEIGHT,
        width: WIDTH,
      }}
      onPress={() => {
        handleAnimate(active ? 0 : 24);
      }}
    >
      <View style={styles.track} />

      <Animated.View
        style={[
          {
            height: HEIGHT,
            width: HEIGHT,
            backgroundColor: "blue",
            borderRadius: HEIGHT / 2,
            position: "absolute",
          },
          rStyle,
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  track: {
    height: HEIGHT / 2,
    width: WIDTH,
    backgroundColor: "red",
    borderRadius: 50,
  },
});
