import React, {useRef} from 'react';
import {View, StyleSheet} from 'react-native';

type TabComponent3Props = {};

const TabComponent3: React.FC<TabComponent3Props> = ({}) => {
  return <View style={styles.mainContainer}></View>;
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'green',
  },
});

export default TabComponent3;
