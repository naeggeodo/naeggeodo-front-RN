import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import Postcode from '@actbase/react-daum-postcode';
import {useAppDispatch} from '../../store';
import locationSlice from '../../slices/location';
import {OnCompleteParams} from '@actbase/react-daum-postcode/lib/types';
import palette from '../../styles/palette';

const SearchLocationWebViewTemplate = ({closeWebView, webview}: any) => {
  const dispatch = useAppDispatch();
  const handleLocation = useCallback<(data: OnCompleteParams) => void>(data => {
    dispatch(
      locationSlice.actions.searchLocation({
        address: JSON.stringify(data.address),
      }),
    );
  }, []);

  return (
    <>
      <View style={styles.backgroundBlack}></View>
      <View style={styles.webviewContainer}>
        <Postcode
          onError={() => {}}
          style={styles.postcodeStyle}
          jsOptions={{animation: true}}
          onSelected={handleLocation}
        />
        <Pressable style={styles.closeButton} onPress={closeWebView}>
          <Text style={{color: 'white', fontSize: 16}}>닫기</Text>
        </Pressable>
      </View>
    </>
  );
};

export default SearchLocationWebViewTemplate;

const styles = StyleSheet.create({
  backgroundBlack: {
    position: 'absolute',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    backgroundColor: '#000000',
    opacity: 0.6,
  },

  webviewContainer: {
    position: 'absolute',
    zIndex: 11,
    top: '10%',
    left: 0,
    right: 0,
    bottom: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postcodeStyle: {
    position: 'relative',
    width: 350,
    height: 500,
    flex: 1,
  },

  closeButton: {
    position: 'absolute',
    right: '10%',
    bottom: '3%',
    backgroundColor: `${palette.mainOrange}`,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 10,
  },
});
