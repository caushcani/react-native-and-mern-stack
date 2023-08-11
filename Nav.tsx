import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
import { Products } from "./pages/ProductsScreen";
import { UserProfile } from "./pages/UserProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CartScreen } from "./pages/CartScreen";
import { Avatar } from "./components/Avatar";
import GoBack from "./components/GoBack";
import StackNav from "./StackNav";

const Tab = createBottomTabNavigator();

const Nav = () => {
  const isLoggedIn = true;
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerRight: () => {
                return <Avatar />;
              },
              headerLeft: () => {
                return <GoBack />;
              },
              headerLeftContainerStyle: {
                margin: 0,
                alignSelf: "center",
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
              tabBarActiveTintColor: "black", //#58ceb2
              tabBarInactiveTintColor: "gray",
              //Tab bar styles can be added here
              tabBarStyle: {
                paddingVertical: 5,
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                backgroundColor: "white",
                position: "absolute",
                height: 50,
                shadowColor: "black",
                shadowOffset: 6,
                shadowOpacity: 2,
                shadowRadius: 2,
              },
              tabBarLabelStyle: { paddingBottom: 3 },
            })}
          >
            <Tab.Screen
              name="Home"
              component={StackNav}
              // options={{
              //   headerShown: false,
              // }}
            />
            <Tab.Screen name="Products" component={Products} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Profile" component={UserProfile} />
          </Tab.Navigator>
        </>
      ) : null}
    </NavigationContainer>
  );
};

export default Nav;

const styles = StyleSheet.create({});
