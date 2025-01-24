import {ScrollView, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CommonHeader from 'components/header/commonHeader';
import CommonContainer from 'components/container/commonContainer';

const TestSampleScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <CommonContainer>
      <CommonHeader />
      <ScrollView style={{}}>
        <Text>Sample Test Page</Text>
      </ScrollView>
    </CommonContainer>
  );
};

const styles = StyleSheet.create({});

export default TestSampleScreen;
