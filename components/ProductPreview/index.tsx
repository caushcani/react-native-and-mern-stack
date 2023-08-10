import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const IMAGE =
  "https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=";
export const ProductPreview = () => {
  return (
    <View
      style={[
        styles.card_template,
        {
          flexDirection: "row",
          gap: 10,
        },
      ]}
    >
      <View>
        <Image
          source={{ uri: IMAGE }}
          height={80}
          width={80}
          style={{
            borderRadius: 15,
          }}
        />
      </View>
      <View
        style={{
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Axel Arigato
        </Text>
        <Text
          style={{
            fontSize: 16,
          }}
        >
          Clean 90 Triple Sneakers
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          $24.00
        </Text>
      </View>
      <View
        style={{
          alignSelf: "center",
        }}
      >
        <AntDesign name="rightsquare" size={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card_template: {
    // height: 90,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
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
