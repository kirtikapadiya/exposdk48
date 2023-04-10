import React from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button title="Go to Signature" onPress={() => navigation.navigate('Page5Screen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;