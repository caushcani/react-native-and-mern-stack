import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { Button } from "../components/Button";
import { CartProduct } from "../components/CartProduct";
import { Divider } from "../components/Divider";
import { RootState } from "../store/redux/rootState";
import { Color } from "../utils/Color";

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

export const CartScreen = () => {
  const [total, setTotal] = useState(0);
  const { products } = useSelector((store: RootState) => store.cart);
  console.log("CartStore", products);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Color.white,
      }}
    >
      <View
        style={{
          backgroundColor: Color.white,
          justifyContent: "space-between",
          flex: 1,
          marginBottom: 80,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 16,
          }}
        >
          My Cart
        </Text>
        <FlatList
          data={products}
          style={{}}
          renderItem={({ item }) => {
            console.log("ITEM", item);
            return (
              <CartProduct
                name={item.name}
                price={item.price}
                image={item.image}
                desc={item.desc}
                defaultQuantity={item.quantity}
                onQuantityChange={(val) => setTotal(val)}
              />
            );
          }}
          ListEmptyComponent={
            <View>
              <Text>No items in cart.</Text>
            </View>
          }
        />

        <View
          style={{
            marginHorizontal: 8,
            borderWidth: 1,
            borderColor: Color.gray,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              marginHorizontal: 8,
              paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              Subtotal:
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              $483
            </Text>
          </View>
          <Divider color={Color.gray} marginHorizontal={8} width={1} />
          <View
            style={{
              marginHorizontal: 8,
              paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              Shipping:
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              $17
            </Text>
          </View>

          <Divider color={Color.gray} marginHorizontal={8} width={1} />

          <View
            style={{
              marginHorizontal: 8,
              paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              Bag total:
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              $500
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <Button
            title="Proceed to Checkout"
            onPress={() => {}}
            style={styles.button}
            textStyle={{ color: Color.white }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    width: "95%",
    backgroundColor: Color.black,
  },
});
