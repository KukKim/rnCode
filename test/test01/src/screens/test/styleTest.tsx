import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CommonContainer from 'components/container/commonContainer';

const StyleTestScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <CommonContainer>
      <Text>Style Test Page</Text>
    </CommonContainer>
  );
};

const styles = StyleSheet.create({});

export default StyleTestScreen;
