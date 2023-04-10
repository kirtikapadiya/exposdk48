import React, { useRef} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "react-navigation-hooks";

const Page5Screen = () => {
  const navigation = useNavigation();
  return(
    <View style={styles.container}>
        <View style={styles.container}>
      <Button title="Go to Signature" onPress={() => navigation.goBack()} />
    </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sketch: {
    flex: 1,
  },
  sketchContainer: {
    height: '100%',
  },
  image: {
    flex: 1,
  },
  label: {
    width: '100%',
    padding: 5,
    alignItems: 'center',
  },
  button: {
    zIndex: 1,
    padding: 12,
    minWidth: 56,
    minHeight: 48,
  },
});



export default SignatureScreen;