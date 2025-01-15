import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ViewToken} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import CharacterCard from 'components/card/character';

type ListItemProps = {
  data: any;
  viewableItems: Animated.SharedValue<ViewToken[]>;
};

const testListItem: React.FC<ListItemProps> = props => {
  const data = props.data.item;
  const rStyle = useAnimatedStyle(() => {
    const isVisible = props.viewableItems.value.map;
    return {
      opacity: 1,
    };
  }, []);

  return (
    <Animated.View>
      <CharacterCard data={data} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({});

export default testListItem;
