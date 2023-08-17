import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Divider } from "../Divider";
import { PlusMinusButton } from "../PlusMinusButton";

interface ICartProduct {
  name: string;
  price: number;
  image: string;
  desc: string;
  defaultQuantity: number;
  onQuantityChange: (val: number) => void;
}
export const CartProduct = (props: ICartProduct) => {
  const { image, name, price, desc, onQuantityChange, defaultQuantity } = props;
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
          flex: 1,
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
            <View style={{ flex: 1 }}>
              <Text style={styles.text}>{name}</Text>
            </View>
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

      {defaultQuantity && (
        <View
          style={{
            flexDirection: "column-reverse",
          }}
        >
          <PlusMinusButton
            value={defaultQuantity}
            onPress={(val) => {
              if (onQuantityChange) {
                onQuantityChange(val);
              }
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  card_template: {
    paddingVertical: 8,
    backgroundColor: "white",
    // borderRadius: 15,
    // shadowCsolor: "#e0e0e0",
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 1,
    // shadowRadius: 8,
    elevation: 8,
    flexDirection: "row",
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginHorizontal: 8,
  },
});
