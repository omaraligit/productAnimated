import React, {Component} from 'react';
import {Text, View, StyleSheet, Animated} from 'react-native';
import Helpers from './helpers';

const INNER_CARD_WIDTH = Helpers.width * 0.6;
const PADDING_HELPER = 50;
export default class Card extends Component {
  render() {
    const inputRange = [
      (this.props.index - 1) * Helpers.width,
      this.props.index * Helpers.width,
      (this.props.index + 1) * Helpers.width,
    ];

    const scale = this.props.scrollX.interpolate({
      inputRange,
      outputRange: [0.5, 1, 0.5],
    });

    const translateXHeader = this.props.scrollX.interpolate({
      inputRange,
      outputRange: [Helpers.width * 0.4, 0, -Helpers.width * 0.4],
    });

    const translateXDesc = this.props.scrollX.interpolate({
      inputRange,
      outputRange: [Helpers.width * 0.6, 0, -Helpers.width * 0.6],
    });

    return (
      <View style={styles.card}>
        <Animated.View
          style={[
            styles.image,
            {
              backgroundColor: this.props.color,
              transform: [{scale}],
              opacity: scale,
            },
          ]}
        />
        <View style={styles.cardinfo}>
          <Animated.Text
            style={[
              styles.cardinfoTitle,
              {
                transform: [{translateX: translateXHeader}],
              },
            ]}>
            {this.props.title}
          </Animated.Text>
          <Animated.Text
            style={[
              styles.cardinfoDescription,
              {
                transform: [{translateX: translateXDesc}],
              },
            ]}>
            {this.props.description}
          </Animated.Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: INNER_CARD_WIDTH,
    height: INNER_CARD_WIDTH,
    borderRadius: 10,
  },
  card: {
    width: Helpers.width,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: PADDING_HELPER *2,
  },
  cardinfo: {
    paddingVertical: PADDING_HELPER,
    width: INNER_CARD_WIDTH,
    padding: 10,
  },
  cardinfoTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  cardinfoDescription: {
    color: '#2d3436',
  },
});
