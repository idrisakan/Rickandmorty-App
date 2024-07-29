import {StyleSheet} from 'react-native';
import Colors from '../theme/colors';

export const characterDetailStyle = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 200,
    borderWidth: 3,
  },
  statusAliveContainer: {
    borderColor: Colors.GREEN,
  },
  statusDeadContainer: {
    borderColor: Colors.RED,
  },
  aliveStatusContainer: {
    backgroundColor: Colors.GREEN,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: -10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  deadStatusContainer: {
    backgroundColor: Colors.RED,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: -10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  status: {
    color: Colors.WHİTE,
    fontSize: 16,
    fontWeight: '500',
    margin: 5,
  },
  nameContainer: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  name: {
    fontSize: 20,
    marginVertical:15,
    fontWeight:'bold',
    color:Colors.BLACK
  },
  sectionContainer:{
    margin:5,
   
  },
  sectionTitle:{
    textAlign:'center',
    marginVertical:5,
    color:Colors.BROWN
  },
  rowContainer:{
    flexDirection:'row',
    justifyContent:'center',
    marginVertical:5
  },
  infoContainer:{
    flex:1,
    backgroundColor:'#e5ded1',
    padding:10
  },
  infoBox:{
    flex:2,
     backgroundColor:'#e5ded1',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:5,
    padding:10
  },
});
