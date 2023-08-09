import { View, Text, ScrollView, FlatList } from "react-native";
import { Product } from "../components/Product";
import { Slider } from "../components/Slider";

export const Products = () => {
  const products = [
    {
      name: "Product1",
      price: 10,
      desc: "AHHAHA",
      image: "https://picsum.photos/id/237/536/354",
    },
    {
      name: "Product2",
      price: 44,
      desc: "AHHAHA",
      image: "https://picsum.photos/id/237/536/354",
    },
    {
      name: "Product3",
      price: 44,
      desc: "AHHAHA",
      image: "https://picsum.photos/id/237/536/354",
    },
    {
      name: "Product4",
      price: 44,
      desc: "AHHAHA",
      image: "https://picsum.photos/id/237/536/354",
    },
    {
      name: "Product5",
      price: 231,
      desc: "AHHAHA",
      image: "https://picsum.photos/id/237/536/354",
    },
  ];
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        padding: 10,
        gap: 40,
      }}
    >
      <ScrollView>
        <View>
          <Slider
            data={products}
            itemWidth={200}
            renderItem={Product}
            sliderWidth={400}
          />
        </View>
        {products && (
          <FlatList
            numColumns={2}
            data={products}
            renderItem={({ item }) => {
              console.log("product", item);
              return (
                <Product
                  key={item.name}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  desc={item.desc}
                  onClick={() => {}}
                />
                // <View>
                //   <Text>{JSON.stringify(product)}</Text>
                // </View>
              );
            }}
            keyExtractor={(item) => item.name}
          />
        )}
      </ScrollView>
    </View>
  );
};
