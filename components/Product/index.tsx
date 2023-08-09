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
    <View style={styles.card}>
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
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>{name}</Text>
        <Text>€{price}</Text>
      </View>
      <View>
        <Text>{desc}</Text>
      </View>
      <Button title="Details" textStyle={styles.text} onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    height: 250,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 2,
    paddingLeft: 16,
    paddingRight: 14,
    // marginTop: 6,
    // marginBottom: 6,
    // marginLeft: 16,
    // marginRight: 16,
  },
  text: {
    color: "white",
  },
});
