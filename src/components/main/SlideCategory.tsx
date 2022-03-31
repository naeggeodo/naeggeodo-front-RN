import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {categoryMockData} from '../../data/mainMockDatas';
import palette from '../../styles/palette';
import fonts from '../../styles/fonts';

const SlideCategory = () => {
  const [category, setCategory] = useState('전체');
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id + ''}
        horizontal
        contentContainerStyle={styles.track}
        data={categoryMockData}
        snapToAlignment="center"
        decelerationRate={0}
        renderItem={({item}) => (
          <Pressable
            style={styles.categoryItemButton}
            onPress={() => setCategory(item.name)}>
            <Text
              style={
                category === item.name
                  ? styles.categoryPoint
                  : styles.categoryItem
              }>
              {item.name}
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
