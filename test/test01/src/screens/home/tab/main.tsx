import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import CharacterCard from 'components/card/character';
import {useNavigation} from '@react-navigation/native';

const MainTab: React.FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <FlatList data={[1, 2, 3]} renderItem={({item}) => <CharacterCard />} />
    </SafeAreaView>
  );
};

export default MainTab;
