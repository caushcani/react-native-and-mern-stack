import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  FlatList,
  StyleSheet,
  Dimensions,
  Text,
} from "react-native";
import { Product } from "../components/Product";
import { Color } from "../utils/Color";

export const Products = () => {
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    try {
      const res = await axios.post("products/get-all");
      if (res) {
        setProducts(res.data.products);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginVertical: 8,
          marginLeft: 6,
        }}
      >
        Clothes
      </Text>
      {products && (
        <FlatList
          contentContainerStyle={{ paddingBottom: 100 }}
          numColumns={2}
          data={products}
          renderItem={({ item }) => {
            return (
              <View style={styles.listItem}>
                <Product
                  key={item.name}
                  subtitle={item.subtitle}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  desc={item.desc}
                  onClick={() => {}}
                />
              </View>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: Color.black,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "rgba(0, 0, 0, .08)",
  },
  listEmpty: {
    height: Dimensions.get("window").height,
    alignItems: "center",
    justifyContent: "center",
  },
  listItem: {
    height: 220,
    width: Dimensions.get("window").width / 2 - 16,
    backgroundColor: Color.white,
    margin: 8,
    borderRadius: 10,
  },
  image: {
    height: 150,
    margin: 5,
    borderRadius: 10,
    backgroundColor: Color.green,
  },
  detailsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
