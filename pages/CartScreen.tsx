import React from "react";
import { View, Text, FlatList } from "react-native";
import { CartProduct } from "../components/CartProduct";

export const CartScreen = () => {
  const productsInCart = [
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
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        My Cart
      </Text>
      <FlatList
        data={productsInCart}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <CartProduct
              name={item.name}
              price={item.price}
              image={item.image}
              desc={item.desc}
            />
          );
        }}
      />
    </View>
  );
};
