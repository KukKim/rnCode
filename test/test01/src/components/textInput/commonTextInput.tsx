import {View, TextInput, TextInputProps, StyleSheet} from 'react-native';

const CommonTextInput = ({children, ...props}: TextInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={props.placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
    height: 30,
    borderWidth: 1,
  },
});

export default CommonTextInput;
