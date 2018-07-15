/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  Modal,
  Dimensions,
} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import ParallaxScrollView from 'react-native-parallax-scroll-view';


var {width, height} = Dimensions.get('window');

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 56;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class AnimatedHeader extends Component {
render() {
    return (
      <ParallaxScrollView
      backgroundColor="blue"
      contentBackgroundColor="pink"
      parallaxHeaderHeight={300}
      renderForeground={() => (
       <View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Hello World!</Text>
        </View>
      )}>
      <View style={{ height: 500 }}>
        <Text>Scroll me</Text>
      </View>
    </ParallaxScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  fill: {
    flex: 1,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden',
    },
bar: {
    //marginTop: 28,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    },
title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18,
    },
scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT,
},
backgroundImage: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  width: null,
  height: HEADER_MAX_HEIGHT,
  resizeMode: 'cover',
},
});

AppRegistry.registerComponent('AnimatedHeader', () => AnimatedHeader);
