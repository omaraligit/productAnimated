import React, {Component} from 'react';
import {Text, View, StyleSheet, Animated} from 'react-native';
import data from '../data/data';
import Helpers from './helpers';

const TEXT_SIZE = 25;

export default class Ticker extends Component {
  render() {
    const inputRange = [-Helpers.width, 0, Helpers.width];

    const translateY = this.props.scrollX.interpolate({
      inputRange,
      outputRange: [TEXT_SIZE, 0, -TEXT_SIZE],
    });

    return (
      <View style={styles.tickerHolder}>
        {data.map((item, index) => {
          return (
            <Animated.Text
              style={[
                styles.tickerText,
                {
                  transform: [{translateY}],
                },
              ]}>
              {item.title}
            </Animated.Text>
          );
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tickerHolder: {
    position: 'absolute',
    top: 10,
    left: 10,
    height: TEXT_SIZE,
    overflow: 'hidden',
  },
  tickerText: {
    fontSize: TEXT_SIZE,
    fontWeight: 'bold',
    lineHeight: TEXT_SIZE, // the 3 is just a pffset depends on the font used
  },
});
