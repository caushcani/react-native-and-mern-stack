import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Categories } from "../components/Categories";
import { Filter } from "../components/FilterIcon";
import { InputIcon } from "../components/InputIcon";
import { ProductPreview } from "../components/ProductPreview";
import { Products } from "../components/Products";

export const WelcomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ padding: 10 }}>
        {/* WELCOME TEXT */}
        <View
          style={{
            marginVertical: 4,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 25,
            }}
          >
            Welcome Legend,
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "gray",
            }}
          >
            Our Fashions App
          </Text>
        </View>

        {/* SEARCH */}
        <View
          style={{
            marginVertical: 4,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 8,
          }}
        >
          <InputIcon />
          <Filter />
        </View>

        {/* PRODUCT PREVIEW */}
        <ProductPreview />

        <Text
          style={{
            fontSize: 20,
            marginBottom: 10,
            fontWeight: "bold",
            marginVertical: 4,
          }}
        >
          Categories
        </Text>
        <Categories onPress={(val) => setSelectedCategory(val)} />

        {/*TOP PRODUCTS */}
        <View
          style={{
            marginVertical: 8,
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
