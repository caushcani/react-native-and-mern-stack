import React from "react";
import {
  View,
  ScrollView,
  FlatList,
  StyleSheet,
  Dimensions,
  Text,
} from "react-native";
import { Product } from "../components/Product";
import products from "../utils/data.json";

export const Products = () => {
  return (
    <View>
      <ScrollView>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
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
    height: 200,
    width: Dimensions.get("window").width / 2 - 16,
    backgroundColor: "white",
    margin: 8,
    borderRadius: 10,
  },
  image: {
    height: 150,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "green",
  },
  detailsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
