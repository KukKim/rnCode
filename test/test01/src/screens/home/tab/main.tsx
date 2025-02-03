import {useNavigation} from '@react-navigation/native';
import CommonButton from 'components/button/commonButton';
import CommonContainer from 'components/container/commonContainer';
import {Text} from 'react-native';

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
      <CommonButton onPress={() => navigation.navigate('TestNavigation')}>
        <Text>Navigation test Page</Text>
      </CommonButton>
    </CommonContainer>
  );
};

export default MainTab;
