import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

interface IProductProp {
  id: string;
  name: string;
  image: string;
  price: number;
  desc: string;
  subtitle?: string;
  onClick: any;
}

export const Product = (props: IProductProp) => {
  const { name, image, price, desc, onClick, subtitle, id } = props;
  const nav = useNavigation<any>();

  return (
    <Pressable
      onPress={() =>
        nav.navigate("ProductDetail", {
          name,
          image,
          price,
          desc,
          subtitle,
          id,
        })
      }
    >
      <View>
        <View
          style={{
            marginTop: 10,
            alignSelf: "center",
          }}
        >
          <Image source={{ uri: image }} width={120} height={120} />
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
            padding: 10,
          }}
        >
          <View>
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              {name}
            </Text>
          </View>

          <View
            style={{
              justifyContent: "flex-end",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                alignSelf: "flex-end",
              }}
            >
              €{price}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
