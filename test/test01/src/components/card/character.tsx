import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CommonButton from 'components/button/commonButton';

type CharacterCardProps = {
  data: any;
};

const CharacterCard: React.FC<CharacterCardProps> = props => {
  const [open, setOpen] = useState(0);
  const data = props.data;

  return (
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
});

export default CharacterCard;
