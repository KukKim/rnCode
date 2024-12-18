import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CommonTextInput from 'components/textInput/commonTextInput';
import CommonButton from 'components/button/commonButton';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.background}>
      <Text>LoginScreen</Text>
      <View>
        <CommonTextInput style={styles.textInput} placeholder="ID" />
        <CommonTextInput style={styles.textInput} placeholder="Password" />
        <View
          style={{
            flexDirection: 'row',
          }}>
          <CommonButton>
            <Text>Login</Text>
          </CommonButton>
          <CommonButton onPress={() => navigation.navigate('Signup')}>
            <Text>Signup</Text>
          </CommonButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  textInput: {
    borderBottomWidth: 1,
  },
});

export default LoginScreen;
