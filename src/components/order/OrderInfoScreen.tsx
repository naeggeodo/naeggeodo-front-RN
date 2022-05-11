import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import palette from '../../styles/palette';
import {useAppDispatch} from '../../store';
import orderSlice, {
  maxCountSelector,
  storeLinkSelector,
  storeNameSelector,
  tagsSelector,
} from '../../slices/order';
import {useSelector} from 'react-redux';
import TagClose from '../../assets/icons/tagclose.svg';

const OrderInfoScreen = ({navigation}: {navigation: any}) => {
  const [tagText, setTagText] = useState('');
  const dispatch = useAppDispatch();
  const storeLink = useSelector(storeLinkSelector);
  const storeName = useSelector(storeNameSelector);
  const maxCount = useSelector(maxCountSelector);
  const tags = useSelector(tagsSelector);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.titleContainer}>
          <View
            style={{
              borderBottomColor: `${palette.mainOrange}`,
              borderBottomWidth: 3,
              paddingBottom: 14,
            }}>
            <Text style={styles.orangeTitle}>새로입력</Text>
          </View>
          <Pressable
            onPress={() => {
              navigation.navigate('Naeggeotalk');
            }}>
            <Text style={styles.grayTitle}>주문목록</Text>
          </Pressable>
        </View>
        <View style={styles.storeNameContainer}>
          <View style={styles.essentialText}>
            <Text style={styles.subTitle}>가게명</Text>
            <Text
              style={{
                color: `${palette.mainOrange}`,
                marginLeft: 4,
              }}>
              *
            </Text>
          </View>
          <TextInput
            onChange={e =>
              dispatch(orderSlice.actions.typeStoreName(e.nativeEvent.text))
            }
            style={styles.storeNameTextInput}
            placeholder="가게이름을 입력해주세요."></TextInput>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: `${palette.LineGray}`,
            marginTop: 20,
          }}
        />
        <View style={styles.storeNameContainer}>
          <Text style={styles.subTitle}>가게 링크</Text>
          <TextInput
            value={storeLink}
            style={styles.storeNameTextInput}
            autoCapitalize="none"
            onChange={e =>
              dispatch(orderSlice.actions.typeStoreLink(e.nativeEvent.text))
            }
          />
        </View>
        <View style={styles.storeNameContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.subTitle}>태그</Text>
            <Text style={{fontSize: 12, fontWeight: '500', marginLeft: 10}}>
              ex. 음식명, 카테고리명
            </Text>
          </View>

          <TextInput
            style={styles.storeNameTextInput}
            placeholder="태그를 입력해주세요."
            value={tagText}
            onChange={e => setTagText(e.nativeEvent.text)}
            onKeyPress={e => {
              if (
                e.nativeEvent.key === ' ' &&
                tags.length < 5 &&
                tagText !== ''
              ) {
                dispatch(orderSlice.actions.addTag(tagText));
              } else return;
            }}
          />

          <View style={styles.tagContainer}>
            {tags.map((tag, index) => (
              <Pressable
                key={index}
                style={styles.tagButton}
                onPress={() => dispatch(orderSlice.actions.removeTag(index))}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '500',
                    color: `${palette.black}`,
                    marginRight: 4,
                  }}>
                  {tag}
                </Text>
                <TagClose />
              </Pressable>
            ))}
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: `${palette.LineGray}`,
            marginTop: 20,
          }}
        />
        <View style={styles.counterContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.subTitle}>채팅방 입장 인원</Text>
            <Text style={styles.maxCounter}>(최대5명)</Text>
          </View>

          <Pressable style={styles.counter}>
            <Pressable
              onPress={() => dispatch(orderSlice.actions.minusMaxCount())}
              style={styles.plusMinusButton}>
              <Text
                style={[
                  styles.plusMinusText,
                  maxCount > 1 ? styles.buttonBlackText : styles.buttonGrayText,
                ]}>
                -
              </Text>
            </Pressable>
            <View>
              <Text style={[styles.plusMinusText, {marginHorizontal: 20}]}>
                {maxCount}
              </Text>
            </View>
            <Pressable
              onPress={() => dispatch(orderSlice.actions.plusMaxCount())}
              style={styles.plusMinusButton}>
              <Text
                style={[
                  styles.plusMinusText,
                  maxCount < 5 ? styles.buttonBlackText : styles.buttonGrayText,
                ]}>
                +
              </Text>
            </Pressable>
          </Pressable>
        </View>
      </View>

      <View style={{paddingHorizontal: 24}}>
        <Pressable
          style={[
            styles.createButton,
            storeName.length > 2
              ? {backgroundColor: `${palette.black}`}
              : {backgroundColor: `${palette.textGray}`},
          ]}>
          <Text style={{fontWeight: '500', color: '#ffffff', fontSize: 17}}>
            내꺼톡 생성하기
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 18,
    color: `${palette.textGray}`,
  },
  storeNameContainer: {
    paddingTop: 39.5,
    paddingHorizontal: 24,
  },
  essentialText: {
    flexDirection: 'row',
  },
  storeNameTextInput: {
    marginTop: 20,
    color: `${palette.DarkGray}`,
    fontWeight: '500',
    fontSize: 15,
  },
  subTitle: {
    fontWeight: '700',
    fontSize: 15,
    color: `${palette.black}`,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 20,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tagButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${palette.LightGray2}`,
    borderRadius: 5,
    marginRight: 8,
    marginTop: 13,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  maxCounter: {
    fontWeight: '500',
    fontSize: 15,
    color: `${palette.DarkGray}`,
    marginLeft: 4,
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  plusMinusButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${palette.LightGray2}`,
    borderRadius: 5,
    width: 36,
    height: 36,
  },
  plusMinusText: {
    fontWeight: '500',
    fontSize: 20,
  },
  buttonGrayText: {
    color: `${palette.textGray}`,
  },
  buttonBlackText: {
    color: `${palette.black}`,
  },
  createButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 85,
    paddingVertical: 14,
    borderRadius: 10,
    borderRightColor: 'red',
  },
});

export default OrderInfoScreen;
