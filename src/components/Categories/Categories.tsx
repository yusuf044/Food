import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {categoriesData} from '../constant/categoriesData';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View style={styles.continuer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {categoriesData.map((category, index) => {
          let isActive = category.id == activeCategory;
          return (
            <View key={index}>
              <TouchableOpacity
                onPress={() => {
                  setActiveCategory(category?.id);
                }}
                key={index}
                style={styles.item}>
                <View
                  style={{
                    backgroundColor: isActive ? 'grey' : 'lightgray',
                    padding: 8,
                    borderRadius: 33,
                  }}>
                  <Image
                    source={require('../../assets/image/pizzaFull.jpg')}
                    style={styles.image}
                    resizeMode="cover"
                  />
                </View>
                <Text
                  numberOfLines={1}
                  style={[
                    styles.name,
                    {
                      fontWeight: isActive ? '800' : '400',
                      color: isActive ? 'black' : null,
                    },
                  ]}>
                  {category.name}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  continuer: {
    marginTop: 4,
  },
  item: {
    alignItems: 'center',
    // backgroundColor: '#f9c2ff',
    // marginVertical: 8,
    padding: 10,
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  image: {
    width: 45,
    height: 45,

    borderRadius: 30,
  },
  name: {
    fontSize: 12,

    fontWeight: '400',
    width: '85%',
    // backgroundColor: 'red',
    textAlign: 'center',
  },
});
