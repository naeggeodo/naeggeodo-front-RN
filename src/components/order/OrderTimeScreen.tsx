import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import palette from '../../styles/palette';

type OrderTime =
  | '1시간 이내'
  | '최대한 빨리'
  | '상관없음(인원이 모집되는대로)'
  | '선택하지 않음'
  | '';

const OrderTemplate = ({navigation}: {navigation: any}) => {
  const [orderTime, setOrderTime] = useState<OrderTime>('');

  return (
    <View style={styles.container}>
      <View style={styles.halfTop}>
        <View>
          <Text style={styles.title}>언제 음식을</Text>
          <Text style={styles.title}>주문하실건가요?</Text>
        </View>
        <Pressable style={styles.typeDirectButton}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '400',
              color: `${palette.DarkGray}`,
            }}>
            직접입력
          </Text>
        </Pressable>
      </View>

      <View style={styles.halfBottom}>
        <Pressable
          style={[
            {...styles.buttonStyle},
            orderTime === '1시간 이내' ? styles.selected : styles.unselected,
          ]}
          onPress={() => {
            setOrderTime('1시간 이내');
            navigation.navigate('orderInfo');
          }}>
          <Text
            style={[
              {...styles.buttonText},
              orderTime === '1시간 이내'
                ? styles.selectedText
                : styles.unselectedText,
            ]}>
            1시간 이내
          </Text>
        </Pressable>

        <Pressable
          style={[
            {...styles.buttonStyle},
            {marginTop: 10},
            orderTime === '최대한 빨리' ? styles.selected : styles.unselected,
          ]}
          onPress={() => {
            setOrderTime('최대한 빨리');
            navigation.navigate('orderInfo');
          }}>
          <Text
            style={[
              {...styles.buttonText},
              orderTime === '최대한 빨리'
                ? styles.selectedText
                : styles.unselectedText,
            ]}>
            최대한 빨리
          </Text>
        </Pressable>

        <Pressable
          style={[
            {...styles.buttonStyle},
            {marginTop: 10},
            orderTime === '상관없음(인원이 모집되는대로)'
              ? styles.selected
              : styles.unselected,
          ]}
          onPress={() => {
            setOrderTime('상관없음(인원이 모집되는대로)');
            navigation.navigate('orderInfo');
          }}>
          <Text
            style={[
              {...styles.buttonText},
              orderTime === '상관없음(인원이 모집되는대로)'
                ? styles.selectedText
                : styles.unselectedText,
            ]}>
            상관없음(인원이 모집되는대로)
          </Text>
        </Pressable>

        <Pressable
          style={[
            {...styles.buttonStyle},
            {marginTop: 10},
            orderTime === '선택하지 않음' ? styles.selected : styles.unselected,
          ]}
          onPress={() => {
            setOrderTime('선택하지 않음');
            navigation.navigate('orderInfo');
          }}>
          <Text
            style={[
              {...styles.buttonText},
              orderTime === '선택하지 않음'
                ? styles.selectedText
                : styles.unselectedText,
            ]}>
            선택하지 않음
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OrderTemplate;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },
  halfTop: {
    height: '60%',
    justifyContent: 'space-between',
    paddingTop: 46,
    paddingBottom: 20,
    paddingHorizontal: 30,
  },
  typeDirectButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: `${palette.black}`,
  },
  halfBottom: {
    paddingHorizontal: 30,
    marginBottom: 85,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  unselected: {backgroundColor: `${palette.LightGray2}`},
  selected: {
    backgroundColor: `${palette.lightOrange}`,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 15,
  },
  selectedText: {
    color: `${palette.mainOrange}`,
  },
  unselectedText: {
    color: `${palette.black}`,
  },
});
