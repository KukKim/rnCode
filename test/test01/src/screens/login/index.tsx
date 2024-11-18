import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CommonContainer from 'components/container/commonContainer';
import CommonTextInput from 'components/textInput/commonTextInput';
import CommonButton from 'components/button/commonButton';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <CommonContainer>
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
    </CommonContainer>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 1,
  },
});

export default LoginScreen;
