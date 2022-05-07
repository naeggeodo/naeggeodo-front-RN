import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import palette from '../../styles/palette';
import fonts from '../../styles/fonts';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/reducer';
import {convertEngCategoryToKor, FoodCategory} from '../../slices/categories';

const SlideCategory = () => {
  const [category, setCategory] = useState<FoodCategory>('ALL');
  const foodCategories = useSelector(
    (state: RootState) => state.categories.foodCategories,
  );

  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.idx + ''}
        horizontal
        contentContainerStyle={styles.track}
        data={foodCategories}
        snapToAlignment="center"
        decelerationRate={0}
        renderItem={({item}) => (
          <Pressable
            style={styles.categoryItemButton}
            onPress={() => setCategory(item.category)}>
            <Text
              style={
                category === item.category
                  ? styles.categoryPoint
                  : styles.categoryItem
              }>
              {convertEngCategoryToKor(item.category)}
            </Text>
          </Pressable>
        )}></FlatList>
    </View>
  );
};

export default SlideCategory;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: `${palette.LineGray}`,
    borderBottomWidth: 1,
  },

  track: {
    flexDirection: 'row',
    paddingHorizontal: '5%',
    paddingTop: 30,
    paddingBottom: 10,
  },
  categoryItemButton: {
    paddingHorizontal: 10,
  },

  categoryItem: {
    color: `${palette.black}`,
    fontFamily: `${fonts.sqRegular}`,
    fontSize: 17,
  },
  categoryPoint: {
    color: `${palette.mainOrange}`,
    fontSize: 17,
    fontFamily: `${fonts.sqRegular}`,
  },
});
