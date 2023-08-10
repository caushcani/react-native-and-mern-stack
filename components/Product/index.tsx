import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "../Button";

interface IProductProp {
  name: string;
  image: string;
  price: number;
  desc: string;
  onClick: any;
}
export const Product = (props: IProductProp) => {
  const { name, image, price, desc, onClick } = props;

  return (
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
        <Text>{desc}</Text>
        <Text
          style={{
            fontWeight: "bold",
          }}
        >
          €{price}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // card: {
  //   backgroundColor: "white",
  //   height: 250,
  //   shadowColor: "black",
  //   shadowOffset: { width: 0, height: 0 },
  //   shadowOpacity: 1,
  //   shadowRadius: 2,
  //   paddingLeft: 16,
  //   paddingRight: 14,
  //   // marginTop: 6,
  //   // marginBottom: 6,
  //   // marginLeft: 16,
  //   // marginRight: 16,
  // },
  text: {
    color: "white",
  },
});
