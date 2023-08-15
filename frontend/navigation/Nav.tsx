import { StyleSheet, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
import { Products } from "../pages/ProductsScreen";
import { UserProfile } from "../pages/UserProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CartScreen } from "../pages/CartScreen";
import { Avatar } from "../components/Avatar";
import GoBack from "../components/GoBack";
import StackNav from "./StackNav";
import { Color } from "../utils/Color";
import OnboardingNav from "./Onboarding";

const Tab = createBottomTabNavigator();

const Nav = () => {
  const isLoggedIn = false;
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerRight: () => {
                return (
                  <View style={{ marginRight: 8 }}>
                    <Avatar />
                  </View>
                );
              },
              headerLeft: () => {
                return (
                  <View style={{ marginLeft: 8 }}>
                    <GoBack />
                  </View>
                );
              },
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                switch (route.name) {
                  case "Login":
                    iconName = "home";
                    break;
                  case "Profile":
                    iconName = "user";
                    break;
                  case "Products":
                    iconName = "shopping-bag";
                    break;
                  case "Home":
                    iconName = "home";
                    break;
                  case "Cart":
                    iconName = "shopping-cart";
                    break;
                }

                // You can return any component that you like here!
                return (
                  <Entypo name={iconName as any} size={size} color={color} />
                );
              },
              tabBarActiveTintColor: Color.black, //#58ceb2
              tabBarInactiveTintColor: Color.gray,
              //Tab bar styles can be added here
              tabBarStyle: {
                paddingVertical: 5,
                backgroundColor: Color.white,
                position: "absolute",
                shadowColor: Color.black,
              },
              tabBarLabelStyle: { paddingBottom: 3 },
            })}
          >
            <Tab.Screen name="Home" component={StackNav} />
            <Tab.Screen name="Products" component={Products} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Profile" component={UserProfile} />
          </Tab.Navigator>
        </>
      ) : (
        <OnboardingNav />
      )}
    </NavigationContainer>
  );
};

export default Nav;

const styles = StyleSheet.create({});
