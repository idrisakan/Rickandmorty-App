import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {ArrowRight2} from 'iconsax-react-native';
import Colors from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {CHARACTERDETAIL} from '../../utils/routes';

const SearchItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(CHARACTERDETAIL, {characterID: item.id})
      }
      style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <ArrowRight2 size="25" color={Colors.BLACK} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: '1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: Colors.BROWN,
    padding: 10,
  },
  name: {
    fontSize: 18,
  },
});
export default SearchItem;
