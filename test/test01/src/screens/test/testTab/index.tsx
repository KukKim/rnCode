import {useNavigation} from '@react-navigation/native';
import CommonContainer from 'components/container/commonContainer';
import CommonHeader from 'components/header/commonHeader';
import React, {useCallback, useState} from 'react';
import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';

import TabComponent1 from './tabComponent1';
import TabComponent2 from './tabComponent2';
import TabComponent3 from './tabComponent3';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const TestTabScreen: React.FC = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState(0);
  const tabContents = [
    {
      tabTitle: 'Tab1',
      tabComponent: <TabComponent1 />,
    },
    {
      tabTitle: 'Tab2',
      tabComponent: <TabComponent2 />,
    },
    {
      tabTitle: 'Tab3',
      tabComponent: <TabComponent3 />,
    },
  ];
  const TabComponent = useCallback(() => {
    return (
      <View style={styles.tabContainer}>
        {tabContents[selectedTab].tabComponent}
      </View>
    );
  }, [selectedTab]);

  return (
    <CommonContainer>
      <CommonHeader />
      <View style={styles.mainContainer}>
        <Text>Tab Test Page</Text>
        <View style={[styles.flexDirectionRow]}>
          {tabContents.map((item, index) => {
            const titleStyle =
              index == selectedTab
                ? styles.selectedTabTitle
                : styles.unSelectedTabTitle;
            return (
              <TouchableOpacity
                style={styles.tabBtn}
                onPress={() => {
                  LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
                  setSelectedTab(index);
                }}>
                <Text style={titleStyle}>{item.tabTitle}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <TabComponent />
      </View>
    </CommonContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  tabBtn: {
    padding: 5,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 8,
  },
  selectedTabTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
  },
  unSelectedTabTitle: {
    fontFamily: 'Roboto-Light',
    fontSize: 18,
  },
  tabContainer: {
    flex: 1,
  },
});

export default TestTabScreen;
