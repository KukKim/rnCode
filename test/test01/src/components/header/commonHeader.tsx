import {
  View,
  ViewProps,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {ArrowLeft} from 'assets/svg';
import {useNavigation} from '@react-navigation/native';

const CommonHeader = (props: ViewProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <ArrowLeft width={20} height={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
});

export default CommonHeader;
