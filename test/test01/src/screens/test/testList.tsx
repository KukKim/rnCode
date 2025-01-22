import React, {useEffect, useState} from 'react';
import {FlatList, Text, ViewToken, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSharedValue} from 'react-native-reanimated';
import {fetchCharacters} from 'reducers/character';
import CommonHeader from 'components/header/commonHeader';
import CommonContainer from 'components/container/commonContainer';
import TestListItem from './testListItem';
import {useDispatch, useSelector} from 'react-redux';

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
