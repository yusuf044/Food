import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';
const RestaurantCard = ({item}) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.cardContiouner}>
        <View>
          <Image
            // source={require('../../assets/image/bugerBanner.jpg')}
            source={item.image}
            style={styles.cardImage}
            resizeMode="cover"
          />
        </View>
        <Text numberOfLines={1} style={styles.cardName}>
          {item.name}
        </Text>
        <View>
          <Icon.Star width={20} height={20} color={'yellow'} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantCard;
const styles = StyleSheet.create({
  cardImage: {
    width: 250,
    height: 150,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    // marginTop: 10,
  },
  cardContiouner: {
    backgroundColor: '#FFF',
    // padding: 4,
    borderRadius: 18,
    elevation: 1,
    marginTop: 10,
    paddingBottom: 4,
  },
  cardName: {fontWeight: '800', fontSize: 18, marginLeft: 20},
});
