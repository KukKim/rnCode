import React, {useEffect, useState} from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CommonContainer from 'components/container/commonContainer';
import CharacterCard from 'components/card/character';
import firestore from '@react-native-firebase/firestore';

const TestListScreen: React.FC = () => {
  const navigation = useNavigation();
  const [characterData, setCharacterData] = useState([]);
  const userDocument = firestore().collection('character');

  const _callApi = async () => {
    try {
      const data = (await userDocument.get()).docs.map(a => a.data());
      setCharacterData(data);
    } catch (error) {
      console.log('err - ');
      console.log(error);
    }
  };

  useEffect(() => {
    _callApi();
  }, []);

  return (
    <CommonContainer>
      <Text>Style List Page</Text>
      <FlatList
        data={characterData}
        renderItem={item => <CharacterCard data={item} />}
      />
    </CommonContainer>
  );
};

const styles = StyleSheet.create({});

export default TestListScreen;
