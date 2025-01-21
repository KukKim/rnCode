import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CommonButton from 'components/button/commonButton';
import SkeletonCover from 'components/common/skeletonCover';

type TestCardProps = {
  data: any;
};

const TestCard: React.FC<TestCardProps> = props => {
  // const [open, setOpen] = useState(0);
  const [loading, setLoading] = useState(true);
  const data = props.data;

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [loading]);

  return (
    <TouchableOpacity
      style={styles.container}
      // activeOpacity={0.5}
      // onPress={() => setOpen(!open)}
    >
      <View style={styles.titleContainer}>
        {loading ? (
          <SkeletonCover width={250} />
        ) : (
          <Text>{'This is Test title'}</Text>
        )}
      </View>
      <View style={styles.flexDirectionRow}>
        <View style={styles.imageCotainer}>
          {loading ? (
            <SkeletonCover style={styles.imageCotainer} />
          ) : (
            <Image
              style={styles.imageCotainer}
              source={{
                uri: data?.profileImg,
              }}
            />
          )}
        </View>
        <View style={styles.contentContainer}>
          {loading ? (
            <View style={{flex: 1, gap: 6}}>
              <SkeletonCover width={100} height={30} />
              <SkeletonCover width={200} height={25} />
              <SkeletonCover width={200} height={25} />
            </View>
          ) : (
            <Text>{'This is Test body'}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6495ED',
    margin: 5,
    padding: 12,
    borderRadius: 6,
    shadowOffset: {
      width: 5,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    gap: 6,
  },
  titleContainer: {
    minWidth: 50,
    minHeight: 30,
  },
  contentContainer: {
    minWidth: 50,
    minHeight: 30,
  },
  flexDirectionRow: {
    flexDirection: 'row',
    gap: 6,
  },
  imageCotainer: {
    overflow: 'hidden',
    borderRadius: 8,
    width: 100,
    height: 100,
  },
});

export default TestCard;
