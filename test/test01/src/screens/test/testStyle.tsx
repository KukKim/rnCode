import {ScrollView, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CommonHeader from 'components/header/commonHeader';
import CommonContainer from 'components/container/commonContainer';
import TestCard from 'components/card/testCard';

const TestStyleScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <CommonContainer>
      <CommonHeader />
      <ScrollView style={styles.scrollContainer}>
        <Text>Style Test Page</Text>
        <TestCard
          data={{
            profileImg:
              'https://i.namu.wiki/i/rlVjGzjT-hpX9PjKJ3TMOgwbQJuL8OmzkF9ycg2pDyCV3YOvhgaLV8WmpyZMg7Ks2tFM203nMUdpMDGwuf13BeVB_waZiXegGgU8-9grGBoCsm6p9QWP5yZsy9YUaaH71tOeSnSOLtVQjmp-MXuOmQ.webp',
          }}
        />
      </ScrollView>
    </CommonContainer>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
});

export default TestStyleScreen;
