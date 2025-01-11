import React, {useEffect, useState} from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {fetchCharacters} from 'reducers/character';
import CommonHeader from 'components/header/commonHeader';
import CommonContainer from 'components/container/commonContainer';
import CharacterCard from 'components/card/character';
import {useDispatch, useSelector} from 'react-redux';

const TestListScreen: React.FC = () => {
  const navigation = useNavigation();
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
        data={characterInfo}
        renderItem={item => <CharacterCard data={item} />}
      />
    </CommonContainer>
  );
};

const styles = StyleSheet.create({});

export default TestListScreen;
