import { View } from "react-native";
import Carousel from "react-native-snap-carousel";

interface ISliderProp {
  data: any[];
  renderItem: any;
  sliderWidth: number;
  itemWidth: number;
}
export const Slider = (props: ISliderProp) => {
  const { data, renderItem, sliderWidth, itemWidth } = props;

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
    />
  );
};
