import {View, TextInput} from 'react-native';

const CommonTextInput = props => {
  return (
    <View
      style={{
        margin: 5,
        padding: 5,
        borderBottomWidth: 1,
      }}>
      <TextInput placeholder={props.placeholder} />
    </View>
  );
};

export default CommonTextInput;
