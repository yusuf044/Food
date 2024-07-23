import {
  ScrollView,
  StyleSheet,
  Text,
  TextProps,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import React from 'react';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
type HeadingProps = {
  subHeading: string;
  heading: string;
  seeAll: string;
  style?: ViewProps['style'];
  continuerStyle?: ViewProps['style'];
  headingStyle?: TextProps['style'];
  subHeadingStyle?: TextProps['style'];
  seeAllStyle?: TextProps['style'];
  onPress?: () => void;
};
const FeatureRow = ({
  title,
  restaurants,
  description,
  headingStyle,
  subHeadingStyle,
  onPress,
  seeAllStyle,
  continuerStyle,
}: HeadingProps) => {
  return (
    <View>
      <View style={[styles.continuer, continuerStyle]}>
        <View>
          <Text style={styles.headingStyle}>{title}</Text>
          <Text style={styles.subHeadingStyle}>{description}</Text>
        </View>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.seeAllStyle}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {restaurants.map((restaurant, index) => {
          return <RestaurantCard item={restaurant} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

export default FeatureRow;

const styles = StyleSheet.create({
  continuer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headingStyle: {fontWeight: '800', fontSize: 18},
  subHeadingStyle: {color: 'lightgray'},
  seeAllStyle: {color: 'orange', fontWeight: '800', fontSize: 16},
});
