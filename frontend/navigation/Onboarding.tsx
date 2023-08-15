import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnboardingOneScreen } from "../pages/OnboardingOneScreen";
import { OnboardingTwoScreen } from "../pages/OnboardingTwoScreen";
import Login from "../pages/LoginScreen";

const Stack = createNativeStackNavigator();

const OnboardingNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnboardingOne"
        component={OnboardingOneScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default OnboardingNav;
