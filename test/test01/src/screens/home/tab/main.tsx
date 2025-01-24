import {Text} from 'react-native';
import CommonContainer from 'components/container/commonContainer';
import CommonButton from 'components/button/commonButton';
import {useNavigation} from '@react-navigation/native';

const MainTab: React.FC = () => {
  const navigation = useNavigation();
  return (
    <CommonContainer>
      <CommonButton onPress={() => navigation.navigate('TestStyle')}>
        <Text>Style Test Page</Text>
      </CommonButton>
      <CommonButton onPress={() => navigation.navigate('TestList')}>
        <Text>Style List Page</Text>
      </CommonButton>
      <CommonButton onPress={() => navigation.navigate('TestPanresponder')}>
        <Text>Panresponder Page</Text>
      </CommonButton>
      <CommonButton onPress={() => navigation.navigate('TestTab')}>
        <Text>Tab Page</Text>
      </CommonButton>
    </CommonContainer>
  );
};

export default MainTab;
