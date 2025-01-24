import React, {useRef} from 'react';
import {View, StyleSheet} from 'react-native';

type TabComponent1Props = {};

const TabComponent1: React.FC<TabComponent1Props> = ({}) => {
  return <View style={styles.mainContainer}></View>;
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default TabComponent1;
