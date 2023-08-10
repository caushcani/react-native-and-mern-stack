import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { PlusMinusButton } from "../PlusMinusButton";

interface ICartProduct {
  name: string;
  price: number;
  image: string;
  desc: string;
}
export const CartProduct = (props: ICartProduct) => {
  const { image, name, price, desc } = props;
  return (
    <View
      style={[
        styles.card_template,
        {
          flexDirection: "row",
          justifyContent: "space-between",
        },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Image source={{ uri: image }} width={100} height={100} />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={styles.text}>{name}</Text>
            <Text
              style={{
                fontSize: 16,
              }}
            >
              {desc}
            </Text>
          </View>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            ${price}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "column-reverse",
        }}
      >
        <PlusMinusButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  card_template: {
    // height: 90,
    paddingVertical: 15,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "#e0e0e0",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: "row",
    // paddingLeft: 16,
    // paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    // marginLeft: 16,
    // marginRight: 16,
  },
});
