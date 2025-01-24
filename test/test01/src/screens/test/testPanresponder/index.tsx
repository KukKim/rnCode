import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CommonHeader from 'components/header/commonHeader';
import CommonContainer from 'components/container/commonContainer';
import TestPanItem from './testPanItem';

const TestPanresponderScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <CommonContainer>
      <CommonHeader />
      <View style={styles.scrollContainer}>
        <Text>Panresponder Test Page</Text>
        <TestPanItem />
      </View>
    </CommonContainer>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
});

export default TestPanresponderScreen;
