import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

interface IProductProp {
  name: string;
  image: string;
  price: number;
  desc: string;
  subtitle: string;
  onClick: any;
}

export const Product = (props: IProductProp) => {
  const { name, image, price, desc, onClick, subtitle } = props;
  const nav = useNavigation();

  return (
    <Pressable
      onPress={() =>
        nav.navigate("ProductDetail", { name, image, price, desc, subtitle })
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
            flexDirection: "column",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            {name}
          </Text>
          <Text>{subtitle}</Text>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            €{price}
          </Text>
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
