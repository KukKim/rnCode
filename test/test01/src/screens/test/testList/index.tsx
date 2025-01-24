import {useNavigation} from '@react-navigation/native';
import CommonContainer from 'components/container/commonContainer';
import CommonHeader from 'components/header/commonHeader';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, ViewToken} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCharacters} from 'reducers/character';

import TestListItem from './testListItem';

const TestListScreen: React.FC = () => {
  const navigation = useNavigation();
  const viewableItems = useSharedValue<ViewToken[]>([]);
  // const [characterData, setCharacterData] = useState([]);
  const dispatch = useDispatch();
  const characterInfo = useSelector(state => state.character.characterInfo);

  useEffect(() => {
    const promise = dispatch(fetchCharacters());
    return () => {
      promise.abort();
    };
  }, []);

  return (
    <CommonContainer>
      <CommonHeader />
      <Text>Style List Page</Text>
      <FlatList
        onViewableItemsChanged={({viewableItems: vItems}) => {
          viewableItems.value = vItems;
        }}
        contentContainerStyle={{paddingTop: 40}}
        data={characterInfo.map((item, index) => ({
          ...item,
          id: index,
        }))}
        renderItem={({item, index}) => {
          return (
            <TestListItem
              data={{
                id: index,
                ...item,
              }}
              viewableItems={viewableItems}
            />
          );
        }}
      />
    </CommonContainer>
  );
};

const styles = StyleSheet.create({});

export default TestListScreen;
