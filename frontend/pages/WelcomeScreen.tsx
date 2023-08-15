import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Categories } from "../components/Categories";
import { Filter } from "../components/FilterIcon";
import { InputIcon } from "../components/InputIcon";
import { ProductPreview } from "../components/ProductPreview";
import { Products } from "../components/Products";
import { SafeAreaView } from "react-native-safe-area-context";

export const WelcomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView style={{ flexGrow: 1 }}>
        <View style={{ padding: 16 }}>
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
              fontWeight: "bold",
              marginVertical: 16,
            }}
          >
            Categories
          </Text>
          <Categories onPress={(val) => setSelectedCategory(val)} />

          {/*TOP PRODUCTS */}
          <View
            style={{
              marginVertical: 16,
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

          <Products horizontalList={true} />
        </View>
      </ScrollView>
    </SafeAreaView>
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
