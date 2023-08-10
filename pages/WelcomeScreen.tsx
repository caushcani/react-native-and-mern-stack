import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import { Categories } from "../components/Categories";
import { Filter } from "../components/FilterIcon";
import { InputIcon } from "../components/InputIcon";
import { ProductPreview } from "../components/ProductPreview";
import Test from "react-native-costoum-text-icon";
import { Products } from "../components/Products";

export const WelcomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ padding: 10 }}>
        {/* WELCOME TEXT */}
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 25,
            }}
          >
            Welcome
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: "gray",
            }}
          >
            Our Fashions App
          </Text>
        </View>

        {/* SEARCH */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <InputIcon />
          <Filter />
        </View>

        {/* PRODUCT PREVIEW */}
        <ProductPreview />

        {/* CATEGORIES */}
        <Text
          style={{
            fontSize: 20,
            marginBottom: 10,
            fontWeight: "bold",
          }}
        >
          Categories
        </Text>
        <Categories onPress={(val) => setSelectedCategory(val)} />

        {/*TOP PRODUCTS */}
        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Top {selectedCategory}
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "gray",
            }}
          >
            View All
          </Text>
        </View>

        <Products />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#f7f7f7",
    borderRadius: 20,
    color: "white",
    width: "80%",
  },
});
