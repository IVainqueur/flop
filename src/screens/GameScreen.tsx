import UnityView from '@azesmway/react-native-unity';
import React, {useEffect, useRef} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import ReAnimated from 'react-native-reanimated';

interface IMessage {
  gameObject: string;
  methodName: string;
  message: string;
}

const GameScreen = () => {
  const unityRef = useRef<UnityView>(null);

  useEffect(() => {
    if (unityRef?.current) {
      const message: IMessage = {
        gameObject: 'gameObject',
        methodName: 'methodName',
        message: 'message',
      };
      unityRef.current.postMessage(
        message.gameObject,
        message.methodName,
        message.message,
      );
    }
  }, []);

  return (
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'default'}
      />
      <View style={styles.container}>
        <ReAnimated.Text style={styles.title} sharedTransitionTag="appTitle">
          FLOP
        </ReAnimated.Text>
        <View style={styles.gameView}>
          <UnityView
            ref={unityRef}
            style={{flex: 1}}
            onUnityMessage={result => {
              console.log('onUnityMessage', result.nativeEvent.message);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#253D60',
    height: '100%',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  topContent: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'MouseMemoirs',
  },
  title: {
    fontSize: 50,
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
  gameView: {
    backgroundColor: '#1C2F4B',
    width: '98%',
    flexGrow: 1,
    borderRadius: 10,
    marginBottom: 10,
    // alignContent: 'center',
    // justifyContent: 'center',
  },
});
