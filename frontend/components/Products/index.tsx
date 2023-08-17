import React from "react";
import { View, FlatList, StyleSheet, Dimensions } from "react-native";
import { Product } from "../Product";
import { Color } from "../../utils/Color";
import { listenerCancelled } from "@reduxjs/toolkit/dist/listenerMiddleware/exceptions";

interface IData {
  _id: string;
  name: string;
  description: string;
  price: number;
  quanity: number;
  image: string;
  category: string;
  subtitle?: string;
}
interface IProducts {
  data: IData[];
  horizontalList: boolean;
}

export const Products = (props: IProducts) => {
  const { horizontalList = false, data } = props;
  if (horizontalList) {
    return (
      <View>
        {data && (
          <FlatList
            contentContainerStyle={{ paddingBottom: 100 }}
            horizontal={true}
            key={"unike"}
            data={data}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.listItem} key={index}>
                  <Product
                    id={item._id}
                    key={item.name}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    subtitle={item.subtitle}
                    desc={item.description}
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
  } else {
    return (
      <View>
        {data && (
          <FlatList
            contentContainerStyle={{ paddingBottom: 100 }}
            numColumns={2}
            key={"unike"}
            data={data}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.listItem} key={index + "AHAH"}>
                  <Product
                    key={item.name}
                    image={item.image}
                    name={item.name + "J"}
                    price={item.price}
                    subtitle={item.subtitle}
                    desc={item.description}
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
  }
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
    // height: 200,
    width: Dimensions.get("window").width / 2 - 16,
    backgroundColor: Color.white,
    margin: 3,
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
