import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Category } from "../Category";

const categories = [
  {
    name: "Dresses",
    isActive: true,
  },
  {
    name: "Jackets",
    isActive: false,
  },
  {
    name: "Jeans",
    isActive: false,
  },
  {
    name: "Shoese",
    isActive: false,
  },
];

interface ICategoriesProp {
  onPress: (val: string) => void;
}
export const Categories = (props: ICategoriesProp) => {
  const { onPress } = props;
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
  useEffect(() => {
    if (onPress) {
      onPress(selectedCategory);
    }
  }, [selectedCategory]);

  return (
    <View
      style={{
        flexDirection: "row",
        gap: 5,
      }}
    >
      {categories.map((el) => {
        return (
          <Category
            name={el.name}
            isActive={el.name === selectedCategory}
            onPress={(el) => setSelectedCategory(el)}
          />
        );
      })}
    </View>
  );
};