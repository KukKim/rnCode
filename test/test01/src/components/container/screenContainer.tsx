import {View, SafeAreaView, ViewProps, StyleSheet} from 'react-native';

const ScreenContainer = ({children, ...props}: ViewProps) => {
  return (
    <SafeAreaView style={styles.container} {...props}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 5,
    // padding: 5,
    borderWidth: 1,
    borderRadius: 3,
  },
});

export default ScreenContainer;
