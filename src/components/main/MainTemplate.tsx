import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Location from '../../assets/icons/location.svg';
import palette from '../../styles/palette';
import ArrowRight from '../../assets/icons/arrow_right.svg';
import SlideCategory from './SlideCategory';
import SearchLocationWebViewTemplate from '../search-location-web-view/SearchLocationWebViewTemplate';
import {useDispatchSearchLocation} from '../../hooks/useDispatchSeachLocation';

const MainTemplate = () => {
  const {webviewIsOpened, openWebview, handleLocation, closeWebview} =
    useDispatchSearchLocation();

  return (
    <View style={styles.container}>
      {webviewIsOpened && (
        <SearchLocationWebViewTemplate
          handleLocation={handleLocation}
          closeWebview={closeWebview}
        />
      )}
      <View style={styles.buttonContainer}>
        <Pressable style={styles.searchLocationButton} onPress={openWebview}>
          <View style={styles.labelContainer}>
            <Location />
            <Text style={{marginLeft: 6}}>주소를 입력해주세요.</Text>
          </View>
          <ArrowRight />
        </Pressable>
      </View>
      <SlideCategory />
    </View>
  );
};

export default MainTemplate;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#ffffff',
    height: '100%',
  },

  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  searchLocationButton: {
    width: 315,
    height: 36,
    backgroundColor: `${palette.bgGray}`,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 10,
    borderRadius: 5,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
