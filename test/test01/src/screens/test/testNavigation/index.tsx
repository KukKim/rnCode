import {useNavigation} from '@react-navigation/native';
import CommonContainer from 'components/container/commonContainer';
import CommonHeader from 'components/header/commonHeader';
import {ScrollView, StyleSheet, Text} from 'react-native';

const TestNavigationScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <CommonContainer>
      <CommonHeader />
      <ScrollView style={{}}>
        <Text>Sample Navigation Page</Text>
      </ScrollView>
    </CommonContainer>
  );
};

const styles = StyleSheet.create({});

export default TestNavigationScreen;
