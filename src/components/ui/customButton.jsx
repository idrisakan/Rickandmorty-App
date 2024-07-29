import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../theme/colors';

const CustomButton = props => {
  const {title, titleColor=Colors.BLACK, backColor} = props;

  return (
    <TouchableOpacity {...props} style={[styles.container,{backgroundColor:backColor}]}>
      <Text style={[styles.title,{color:titleColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        margin:5,
        flex:1,
        backgroundColor:Colors.GREEN,
        padding:8,
        borderRadius:5
    
    },
    title:{
fontSize:18,
color:Colors.WHİTE
    }
})

export default CustomButton;
