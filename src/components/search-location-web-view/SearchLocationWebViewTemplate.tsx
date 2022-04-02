import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Postcode from '@actbase/react-daum-postcode';

const SearchLocationWebViewTemplate = () => {
  return (
    <View style={styles.webviewContainer}>
      <Postcode
        onError={() => {}}
        style={{width: 400, height: 320}}
        jsOptions={{animation: true}}
        onSelected={data => Alert.alert(JSON.stringify(data))}
      />
    </View>
  );
};

export default SearchLocationWebViewTemplate;

const styles = StyleSheet.create({
  webviewContainer: {
    zIndex: 2,
    top: 0,
    left: 0,
  },
});
