import React from "react";
import { TouchableOpacity } from "react-native";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Product } from "../components/Product";
import { Slider } from "../components/Slider";

export const Products = () => {
  const products = [
    {
      name: "Product1",
      price: 10,
      desc: "AHHAHA",
      image:
        "https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=",
    },
    {
      name: "Product2",
      price: 44,
      desc: "AHHAHA",
      image: "https://thumbs.dreamstime.com/b/blue-shoes-29507491.jpg",
    },
    {
      name: "Product3",
      price: 44,
      desc: "AHHAHA",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXpFw_gLyuU9oWMKwtfe6wZNPebHCw2igrEN1-KWlLAq72revRb8BdXwHEHiEPjzL_Plo&usqp=CAU",
    },
    {
      name: "Product4",
      price: 44,
      desc: "AHHAHA",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiuC33L8jcExGdubb8uvN2CS_1Hwrm8cRAOvs1ZExJlLyR-qmhxmJ1qYQ-blpQDBxm3_0&usqp=CAU",
    },
    {
      name: "Product5",
      price: 231,
      desc: "AHHAHA",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvoCaue0gP0r76pUTGsSidtRS42U9085RZb7R-LzcEnSOXPI3sZ1z78RIdYs6ilLSoQXU&usqp=CAU",
    },
  ];
  return (
    <View>
      <ScrollView>
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
