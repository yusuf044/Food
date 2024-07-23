import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Alert,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import {ArrowUpCircle} from 'react-native-feather';
import * as Icon from 'react-native-feather';
import Heading from '../../components/FeatureRow/FeatureRow';
import Categories from '../../components/Categories/Categories';
import FeatureRow from '../../components/FeatureRow/FeatureRow';
import {featured, FeaturedData} from '../../components/constant/categoriesData';
const HomeScene = () => {
  const fakeFoodData = [
    {
      id: 1,
      image: require('../../assets/image/pizzaFull.jpg'),
      name: 'Burger',
    },
    {
      id: 2,
      image: require('../../assets/image/pizzaFull.jpg'),
      name: 'Pizza',
    },
    {
      id: 3,
      image: require('../../assets/image/pizzaFull.jpg'),
      name: 'Hot Dog',
    },
    {
      id: 4,
      image: require('../../assets/image/pizzaFull.jpg'),
      name: 'French Fries',
    },
    {
      id: 5,
      image: require('../../assets/image/pizzaFull.jpg'),
      name: 'Cupcake',
    },
  ];
  const cardData = [
    {
      id: 1,
      image: require('../../assets/image/bugerBanner.jpg'),
      name: 'Burger',
    },
    {
      id: 2,
      image: require('../../assets/image/bugerBanner.jpg'),
      name: 'Pizza',
    },
    {
      id: 3,
      image: require('../../assets/image/bugerBanner.jpg'),
      name: 'Hot Dog',
    },
    {
      id: 4,
      image: require('../../assets/image/bugerBanner.jpg'),
      name: 'French Fries',
    },
    {
      id: 5,
      image: require('../../assets/image/bugerBanner.jpg'),
      name: 'Cupcake',
    },
  ];

  const renderItem = ({item}) => (
    <>
      {console.log('item========', JSON.stringify(item))}
      <View style={styles.item}>
        <View
          style={{
            backgroundColor: 'lightgray',
            padding: 8,
            borderRadius: 33,
          }}>
          <Image
            source={require('../../assets/image/pizzaFull.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <Text numberOfLines={1} style={styles.name}>
          {item.name}
        </Text>
      </View>
    </>
  );
  const cardList = ({item}) => (
    <>
      <View style={styles.cardContiouner}>
        <View>
          <Image
            source={require('../../assets/image/bugerBanner.jpg')}
            style={styles.cardImage}
            resizeMode="cover"
          />
        </View>
        <Text numberOfLines={1} style={styles.cardName}>
          {item.name}
        </Text>
      </View>
    </>
  );
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#FFF', paddingHorizontal: 10}}>
      <StatusBar barStyle={'dark-content'} />

      <View style={[styles.row, styles.between, {marginTop: 10}]}>
        <View
          style={{
            backgroundColor: '#FFF',
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderWidth: 0.3,
            borderRadius: 30,
            alignItems: 'center',
            elevation: 4,
            width: '85%',
          }}>
          <View style={[styles.row, {width: '45%'}]}>
            <Icon.Search height={25} width={25} stroke={'gray'} />
            <TextInput placeholder="Restorants" />
          </View>

          <View
            style={{
              flexDirection: 'row',
              borderLeftWidth: 1,
              justifyContent: 'space-around',
              paddingHorizontal: 4,
            }}>
            <Icon.MapPin height={20} width={20} stroke={'gray'} />
            <Text style={{marginLeft: 5}}>New York,NYC</Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: 'orange',
            padding: 13,
            width: '12%',
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 4,
            borderWidth: 0.3,
          }}>
          <Icon.Sliders
            height="20"
            width={'20'}
            strokeWidth={2.5}
            stroke={'white'}
          />
        </View>
      </View>

      {/* main */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}>
        {/* Categories */}
        <Categories />

        {/* featureed */}
        <View>
          {[featured, featured, featured].map((item, index) => {
            return (
              <FeatureRow
                key={index}
                restaurants={item.restaurants}
                description={item.description}
                title={item.title}
              />
            );
          })}
        </View>
      </ScrollView>

      {/* <View>
          <Heading
            onPress={() => Alert.alert('List')}
            headingStyle={{fontWeight: '800', fontSize: 18}}
            subHeadingStyle={{color: 'lightgray'}}
            seeAllStyle={{color: 'orange', fontWeight: '800', fontSize: 16}}
            heading="Hot and Spicy"
            subHeading="soft and tender fried chicken"
            seeAll="See All"
          />
        </View>
        <View style={styles.flatListContainer}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={cardData}
            renderItem={cardList}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={<View style={{marginLeft: 10}}></View>}
          />
        </View>
        <View>
          <Heading
            onPress={() => Alert.alert('List')}
            headingStyle={{fontWeight: '800', fontSize: 18}}
            subHeadingStyle={{color: 'lightgray'}}
            seeAllStyle={{color: 'orange', fontWeight: '800', fontSize: 16}}
            heading="Hot and Spicy"
            subHeading="soft and tender fried chicken"
            seeAll="See All"
          />
        </View>
        <View style={styles.flatListContainer}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={cardData}
            renderItem={cardList}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={<View style={{marginLeft: 10}}></View>}
          />
        </View>
        <View>
          <Heading
            onPress={() => Alert.alert('List')}
            headingStyle={{fontWeight: '800', fontSize: 18}}
            subHeadingStyle={{color: 'lightgray'}}
            seeAllStyle={{color: 'orange', fontWeight: '800', fontSize: 16}}
            heading="Hot and Spicy"
            subHeading="soft and tender fried chicken"
            seeAll="See All"
          />
        </View>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={cardData}
            renderItem={cardList}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={<View style={{marginLeft: 10}}></View>}
          />
        </View> */}

      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
};

export default HomeScene;
const styles = StyleSheet.create({
  scerchBar: {},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  between: {
    justifyContent: 'space-between',
  },
  flatListContainer: {
    paddingVertical: 10,
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
