import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../theme/colors';
import screenStyle from '../../styles/screenStyle';
import {genders, status} from '../../utils/constans';
import {useDispatch, useSelector} from 'react-redux';
import {changeParams} from '../../store/actions/charactersActions';
import CustomButton from '../../components/ui/customButton';
import {useNavigation} from '@react-navigation/native';

export default function FilterCharacters() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {params} = useSelector(state => state.characters);

  const filterCharacters = () => {
    navigation.goBack();
  };

  const clearFilter = () => {
    dispatch(changeParams({gender: null, status: null}));
    navigation.goBack();
  };
  return (
    <View style={screenStyle.container}>
      <View style={{flex: 1}}>
        <ScrollView>
          <Text
            style={{
              fontSize: 18,
              marginVertical: 10,
              fontWeight: 'bold',
              color: Colors.BROWN,
            }}>
            Gender
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            {genders.map(item => (
              <TouchableOpacity
                onPress={() => dispatch(changeParams({gender: item.value}))}
                key={item.id}
                style={{
                  backgroundColor:
                    params.gender == item.value ? Colors.GREEN : Colors.BROWN,
                  padding: 10,
                  margin: 3,
                  borderRadius: 5,
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: Colors.WHİTE}}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text
            style={{
              fontSize: 18,
              marginVertical: 10,
              fontWeight: 'bold',
              color: Colors.BROWN,
            }}>
            Status
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            {status.map(item => (
              <TouchableOpacity
                onPress={() => dispatch(changeParams({status: item.value}))}
                key={item.id}
                style={{
                  backgroundColor:
                    params.status == item.value ? Colors.GREEN : Colors.BROWN,
                  padding: 10,
                  margin: 3,
                  borderRadius: 5,
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: Colors.WHİTE}}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={{flexDirection: 'row', paddingBottom: 20}}>
        <CustomButton
          onPress={filterCharacters}
          title="Filter"
          backColor={Colors.GREEN}
          titleColor={Colors.WHİTE}
        />
        <CustomButton
          onPress={clearFilter}
          title="Clear"
          backColor={Colors.BACKTITLECOLOR}
        />
      </View>
    </View>
  );
}
