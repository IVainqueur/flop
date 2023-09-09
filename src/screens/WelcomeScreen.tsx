import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button} from '@rneui/base';
import React, {useEffect, useRef} from 'react';
import {
  Animated,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RootStackParamList} from '../@types';

import ReAnimated from 'react-native-reanimated';

type Props = NativeStackScreenProps<RootStackParamList, 'WelcomeScreen'>;

const WelcomeScreen = ({navigation}: Props) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = () => {
      Animated.spring(animatedValue, {
        toValue: 1,
        friction: 1,
        tension: 50,
        useNativeDriver: true, // This is important for performance.
      }).start(() => {
        // You can add more logic here after the animation completes.
        // For example, reset the animation or trigger another animation.
        animatedValue.setValue(0);
        animate();
      });
    };

    animate();
  }, [animatedValue]);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -4], // Adjust this value to control the bounce height.
  });

  return (
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'default'}
      />
      <View style={styles.container}>
        <Text style={styles.topContent}>Welcome to</Text>
        <ReAnimated.Text style={styles.title} sharedTransitionTag="appTitle">
          FLOP
        </ReAnimated.Text>

        <Animated.View
          style={{
            // backgroundColor: 'blue',
            transform: [{translateY}],
          }}>
          <Button
            onPress={() => {
              navigation.push('Game');
            }}
            title={'Start'}
            size="md"
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
          />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#253D60',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  topContent: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'MouseMemoirs',
  },
  title: {
    fontSize: 190,
    fontWeight: '600',
    color: '#E12653',
    textAlign: 'center',
    fontFamily: 'MouseMemoirs',
  },
  button: {
    backgroundColor: '#0E001A',
    // borderRadius: 50,
    padding: 10,
    margin: 10,
    width: 200,
  },
  buttonContainer: {
    // borderRadius: 50,
    alignSelf: 'center',
    // backgroundColor: '#0E001A',
  },
});
