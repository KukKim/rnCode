import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const SignupScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.background}>
      <Text>SignupScreen</Text>
      <View>
        <TextInput style={styles.textInput} placeholder="ID" />
        <TextInput style={styles.textInput} placeholder="Password" />
        <TextInput style={styles.textInput} placeholder="Re-Password" />
        <TouchableOpacity>
          <Text>Signup</Text>
        </TouchableOpacity>
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

export default SignupScreen;
