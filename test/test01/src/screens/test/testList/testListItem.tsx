import CharacterCard from 'components/card/character';
import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, ViewToken} from 'react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

type ListItemProps = {
  data: any;
  viewableItems: Animated.SharedValue<ViewToken[]>;
};

const testListItem: React.FC<ListItemProps> = ({data, viewableItems}) => {
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter(item => item.isViewable)
        .find(item => item.item.id === data.id),
    );

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.6),
        },
      ],
    };
  }, []);

  return (
    <Animated.View style={[rStyle]}>
      <CharacterCard data={data} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({});

export default testListItem;
