import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import CommonContainer from 'components/container/commonContainer';
import CharacterCard from 'components/card/character';
import CommonButton from 'components/button/commonButton';
import {useNavigation} from '@react-navigation/native';

const MainTab: React.FC = () => {
  const navigation = useNavigation();
  return (
    <CommonContainer>
      <CommonButton onPress={() => navigation.navigate('TestStyle')}>
        <Text>Style Test Page</Text>
      </CommonButton>
      <FlatList data={[1, 2, 3]} renderItem={({item}) => <CharacterCard />} />
    </CommonContainer>
  );
};

export default MainTab;
