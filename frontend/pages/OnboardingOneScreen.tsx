import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Color } from "../utils/Color";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

export const OnboardingOneScreen = () => {
  const nav = useNavigation();
  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };

  const handleOnDone = () => {
    nav.navigate("Login");
  };

  return (
    // <SafeAreaView style={{ flex: 1, padding: 16, backgroundColor: "white" }}>
    <Onboarding
      onDone={handleOnDone}
      DoneButtonComponent={doneButton}
      pages={[
        {
          backgroundColor: "#a78bfa",
          image: (
            <View>
              <LottieView
                source={require("../assets/animations/animation_llb0ls4y.json")}
                autoPlay
                loop
                style={{
                  width: "100%",
                  aspectRatio: 1,
                }}
              />
            </View>
          ),
          title: "20% Discount",
          titleStyles: {
            color: "black",
            fontWeight: "bold",
          },
          subtitle: "New Arrival Product",
          subTitleStyles: {
            color: "black",
            fontWeight: "bold",
          },
        },
        {
          backgroundColor: "#a78bfa",
          image: (
            <View>
              <LottieView
                source={require("../assets/animations/animation_llb0qwy2.json")}
                autoPlay
                loop
                style={{
                  width: "100%",
                  aspectRatio: 1,
                }}
              />
            </View>
          ),
          title: "Take Adventage Of The Offer Shopping",
          subtitle: "Explore coolest clothes ever.",
        },
        {
          backgroundColor: "#a7f3d0",
          image: (
            <View>
              <LottieView
                source={require("../assets/animations/animation_llawch0n.json")}
                autoPlay
                loop
                style={{
                  width: "100%",
                  aspectRatio: 1,
                }}
              />
            </View>
          ),
          title: "All Types Offers Within Your Reach",
          subtitle: "hahaha",
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 26,
    paddingVertical: 2,
  },
  bottomContainer: {
    backgroundColor: Color.white,
  },
  description: {
    paddingVertical: 6,
    fontSize: 16,
  },
  doneButton: {
    padding: 16,
  },
});
