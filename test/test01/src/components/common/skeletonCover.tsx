import React, {useEffect, useRef} from 'react';
import {Animated, View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type SkeletonCoverProps = {
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
  style?: StyleProp<ViewStyle>;
};

const SkeletonCover = ({
  children,
  width,
  height,
  style,
  ...props
}: SkeletonCoverProps) => {
  // 조건에 따라 스타일 생성
  const containerStyle = style ?? {
    width: width || 30,
    height: height || 30,
  };

  const animValue = useRef(new Animated.Value(0)).current;

  // 애니메이션 시작
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animValue, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(animValue, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [animValue]);

  // x축 이동 계산
  const shimmerTranslate = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 100],
  });

  return (
    <View style={[styles.skeletonContainer, containerStyle]}>
      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          {transform: [{translateX: shimmerTranslate}]},
        ]}>
        <LinearGradient
          colors={['#e0e0e0', '#f5f5f5', '#e0e0e0']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={StyleSheet.absoluteFill}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  skeletonContainer: {
    // flex: 1,
    borderRadius: 4,
    backgroundColor: '#e0e0e0', // 기본 배경색
    overflow: 'hidden',
    opacity: 0.4,
  },
});

export default SkeletonCover;

// import React, {useRef, useEffect} from 'react';
// import {View, Animated, StyleSheet} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// type SkeletonCoverProps = {
//   children: React.ReactNode;
// };

// const AnimatedLinearGradientCover =
//   Animated.createAnimatedComponent(LinearGradient);

// const SkeletonCover = ({children, ...props}: SkeletonCoverProps) => {
//   // const animatedValue = new Animated.Value(0);

//   const animatedValue = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     // Animated.loop(
//     //   Animated.timing(animatedValue, {
//     //     toValue: 1,
//     //     duration: 5000, // 5초 동안 색상 변화
//     //     useNativeDriver: false,
//     //   }),
//     // ).start();
//   }, [animatedValue]);

//   const startColor = animatedValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['#000000', '#FFFFFF'],
//   });

//   const endColor = animatedValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['#FFFFFF', '#000000'],
//   });

//   const startX = animatedValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: [0, 1],
//   });

//   const endX = animatedValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: [1, 0],
//   });

//   return (
//     <AnimatedLinearGradientCover
//       style={styles.container}
//       // colors={['#000000', '#FFFFFF']}
//       colors={[startColor, endColor]}
//       start={{x: startX, y: 0}}
//       end={{x: endX, y: 0}}></AnimatedLinearGradientCover>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     opacity: 1,
//   },
// });

// export default SkeletonCover;
