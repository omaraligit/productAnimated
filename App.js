import React, {Component} from 'react';
import {Text, View, FlatList, Animated} from 'react-native';
import Card from './views/Card';
import Ticker from './views/Ticker';
import data from './data/data';

export default class App extends Component {
  state = {
    scrollX: new Animated.Value(0),
  };

  render() {
    return (
      <View>

        <Ticker scrollX={this.state.scrollX} />

        <Animated.FlatList
          data={data}
          bounces={false}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => String(item.key)}
          renderItem={({item, index}) => (
            <Card {...item} index={index} scrollX={this.state.scrollX} />
          )}
          pagingEnabled
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: this.state.scrollX}}}],
            {useNativeDriver: true},
          )}
          scrollEventThrottle={16}
        />
      </View>
    );
  }
}
