import { View, Text, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { PlusMinusButton } from "../PlusMinusButton";
import { ProductSize } from "../ProductSize";
import Entypo from "react-native-vector-icons/Entypo";
import { Button } from "../Button";
import { AirbnbRating } from "react-native-ratings";
import { useRoute } from "@react-navigation/native";

const sizes = [
  {
    title: "S",
  },
  {
    title: "M",
  },
  {
    title: "L",
  },
];

export default function ProductDetail({ navigation }: any) {
  const [selectedSize, setSelectedSize] = useState("S");
  const [like, setLike] = useState(false);
  const nav = useRoute<any>();

  const { desc, name, price, image } = nav.params;

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none",
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: undefined,
      });
  }, [navigation]);

  return (
    <View style={{ flex: 1 }} key={name + desc}>
      {/* IMAGE */}
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Image source={{ uri: image }} width={200} height={200} />
      </View>

      <View
        style={{
          backgroundColor: "white",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          padding: 18,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {name}
            </Text>
            <Text
              style={{
                fontSize: 16,
              }}
            >
              Clean 90 Triole Sneakers
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AirbnbRating
                count={3}
                reviews={["OK", "Good", "Wow"]}
                defaultRating={2}
                size={20}
                showRating={false}
                ratingContainerStyle={{
                  marginVertical: 8,
                }}
              />
              <Text>(270 Reviews)</Text>
            </View>
          </View>
          <PlusMinusButton onPress={(val) => {}} />
        </View>

        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Size
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              marginVertical: 8,
            }}
          >
            {sizes.map((el) => {
              return (
                <ProductSize
                  title={el.title}
                  isActive={el.title === selectedSize}
                  onPress={() => setSelectedSize(el.title)}
                />
              );
            })}
          </View>
        </View>

        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginVertical: 8,
            }}
          >
            Description
          </Text>
          <Text>{desc}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 20,
            paddingVertical: 18,
          }}
        >
          <Pressable onPress={() => setLike(!like)}>
            <View
              style={{
                backgroundColor: "gray",
                width: 50,
                display: "flex",
                justifyContent: "center",
                height: 50,
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Entypo
                name={like ? "heart" : "heart-outlined"}
                size={30}
                color={like ? "red" : "white"}
              />
            </View>
          </Pressable>
          <Button
            title="Add to cart"
            textStyle={{ color: "white" }}
            onPress={() => {}}
            icon={<Entypo name="shopping-bag" size={20} color="white" />}
          />
        </View>
      </View>
    </View>
  );
}
