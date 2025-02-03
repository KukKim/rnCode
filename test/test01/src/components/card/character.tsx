import CommonButton from 'components/button/commonButton';
import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';

type CharacterCardProps = {
  data: any;
};

const CharacterCard: React.FC<CharacterCardProps> = props => {
  const [open, setOpen] = useState(0);
  const data = props.data;

  const renderRightActions = () => (
    <TouchableOpacity style={styles.swipedItem} onPress={() => {}}>
      <Text>Do Somtething</Text>
    </TouchableOpacity>
  );

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity
        style={styles.container}
        // activeOpacity={0.5}
        onPress={() => setOpen(!open)}>
        <View style={styles.flexDirectionRow}>
          <Image
            style={styles.characterImage}
            source={{
              uri: data?.profileImg,
            }}
          />
          <View>
            <Text>{data?.name}</Text>
          </View>
        </View>
        {open ? (
          <View>
            <Text>Character Content</Text>
            <CommonButton>
              <Text>Command List</Text>
            </CommonButton>
            <Text>Top Player</Text>
            <ScrollView></ScrollView>
          </View>
        ) : null}
      </TouchableOpacity>
    </Swipeable>
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
  flexDirectionRow: {
    flexDirection: 'row',
    gap: 6,
  },
  characterImage: {
    width: 50,
    height: 50,
  },
  swipedItem: {
    justifyContent: 'center',
    padding: 5,
  },
});

export default CharacterCard;
