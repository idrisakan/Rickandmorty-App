import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../theme/colors'
import { FilterSearch, SearchNormal1 } from 'iconsax-react-native'
import { useNavigation } from '@react-navigation/native'
import { FILTERCHARACTERS, SEARCHCHARACTERS } from '../../utils/routes'

export default function HeaderRight() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <Pressable style={styles.button} onPress={() => navigation.navigate(SEARCHCHARACTERS)}>
        <SearchNormal1 size="27" color={Colors.BLACK}/>
        </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate(FILTERCHARACTERS)}>
      <FilterSearch size="27" color={Colors.BLACK}/>
      </Pressable>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        flex:1,
        alignItems:'center',
        marginHorizontal:5 
    },
    button:{
        marginHorizontal:5
    }
})