import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

const CommonButton = ({children, ...props}: TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      style={{
        margin: 5,
        padding: 5,
        borderWidth: 1,
        borderRadius: 3,
      }}
      {...props}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;
