import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import palette from '../../styles/palette';

const naeggeotalkTemplate = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Pressable>
          <Text style={styles.grayTitle}>새로입력</Text>
        </Pressable>

        <View
          style={{
            borderBottomColor: `${palette.mainOrange}`,
            borderBottomWidth: 3,
            paddingBottom: 14,
          }}>
          <Text style={styles.orangeTitle}>주문목록</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'space-between',
    paddingTop: 46,
    backgroundColor: '#ffffff',
  },
  titleContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
  },
  orangeTitle: {
    fontWeight: '700',
    fontSize: 18,
    color: `${palette.mainOrange}`,
  },
  grayTitle: {
    fontWeight: '600',
    fontSize: 18,
    color: `${palette.textGray}`,
    marginRight: 20,
  },
});

export default naeggeotalkTemplate;
