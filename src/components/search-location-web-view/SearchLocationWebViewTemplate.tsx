import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Postcode from '@actbase/react-daum-postcode';

const SearchLocationWebViewTemplate = () => {
  return (
    <>
      <View style={styles.backgroundBlack}></View>
      <View style={styles.webviewContainer}>
        <Postcode
          onError={() => {}}
          style={{width: 350, height: 500, flex: 1}}
          jsOptions={{animation: true}}
          onSelected={data => Alert.alert(JSON.stringify(data))}
        />
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
});
