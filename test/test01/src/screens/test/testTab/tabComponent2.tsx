import React, {useRef} from 'react';
import {View, StyleSheet} from 'react-native';

type TabComponent2Props = {};

const TabComponent2: React.FC<TabComponent2Props> = ({}) => {
  return <View style={styles.mainContainer}></View>;
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

export default TabComponent2;
