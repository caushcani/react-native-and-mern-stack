import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Categories } from "../components/Categories";
import { Filter } from "../components/FilterIcon";
import { InputIcon } from "../components/InputIcon";
import { ProductPreview } from "../components/ProductPreview";
import { Products } from "../components/Products";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export const WelcomeScreen = () => {
  const [products, setProducts] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Dresses");
  const navigation = useNavigation();
  const topProducts = async (category: string) => {
    try {
      const res = await axios.post("products/get-all", {
        category: category.toLocaleLowerCase(),
      });
      if (res) {
        setProducts(res.data.products);
      }
    } catch (error) {}
  };

  useEffect(() => {
    topProducts(selectedCategory);
  }, [selectedCategory]);

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
            <Pressable onPress={() => navigation.navigate("Products")}>
              <Text
                style={{
                  fontSize: 16,
                  color: "gray",
                }}
              >
                View All
              </Text>
            </Pressable>
          </View>

          {products && <Products horizontalList={true} data={products} />}
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
