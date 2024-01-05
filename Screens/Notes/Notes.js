import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';
export default function Messages({navigation}) {
   
    
  return (
    
    <View style={styles.page}>
      <ScrollView style={{marginTop:19}}>
       
    <TouchableOpacity style={styles.button}  onPress={()=>{navigation.navigate('Section')}} >
     
    <Text style={{fontWeight:'bold',fontSize:17,color:"black"}}>Computer Science</Text>
    <Icon name= "desktop-outline"   size={30} color="#000"  />
</TouchableOpacity>
<TouchableOpacity style={styles.button2} onPress={()=>{navigation.navigate('Section')}} >
     
     <Text style={{fontWeight:'bold',fontSize:17,color:"black"}}>Information Technology</Text>
     <Icon name= "code-working-outline"   size={30} color="#000" />
 </TouchableOpacity>
 

    <TouchableOpacity style={styles.button4} onPress={()=>{navigation.navigate('Section')}} >
     
    <Text style={{fontWeight:'bold',fontSize:17,color:"black"}}>Artificial Intelligence & data science</Text>
    <Icon name="ios-analytics-outline" size={30} color="#000" />
</TouchableOpacity>
    <TouchableOpacity style={styles.button3} onPress={()=>{navigation.navigate('Section')}} >
     
     <Text style={{fontWeight:'bold',fontSize:17,color:"black"}}>Electronics</Text>
     <Icon name="ios-radio-outline" size={30} color="#000" />
 </TouchableOpacity>


    <TouchableOpacity style={styles.button4} onPress={()=>{navigation.navigate('Section')}} >
     
    <Text style={{fontWeight:'bold',fontSize:17,color:"black"}}>Mechanics</Text>
    <Icon name="cog-outline" size={30} color="#000" />
</TouchableOpacity>
<TouchableOpacity style={styles.button3} onPress={()=>{navigation.navigate('Section')}} >
     
    <Text style={{fontWeight:'bold',fontSize:17,color:"black"}}>Artificial Intelligence & Machine Learning</Text>
    <Icon name="rocket-outline" size={30} color="#000" />
</TouchableOpacity>
<TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Section')}} >
     
     <Text style={{fontWeight:'bold',fontSize:17,color:"black"}}>MME</Text>
     <Icon name="key" size={30} color="#000" />
 </TouchableOpacity>
 
 
    <TouchableOpacity style={styles.button2}onPress={()=>{navigation.navigate('Section')}} >
     
    <Text style={{fontWeight:'bold',fontSize:17,color:"black"}}>Civil</Text>
       <Icon name="ios-home-outline" size={30} color="#000" />
</TouchableOpacity>
<TouchableOpacity style={styles.button1} onPress={()=>{navigation.navigate('Section')}} >
     
     <Text style={{fontWeight:'bold',fontSize:17,color:"black"}}>CSE</Text>
     <Icon name="ios-laptop-outline" size={30} color="#000" />
 </TouchableOpacity>

</ScrollView>
</View>
  )
} 
const styles = StyleSheet.create({
  page:{
      flex:1,
      backgroundColor:'#fff',
      
  },
  text:{
      fontSize:40,
      fontWeight:'bold',
      color:'#20315f',
      marginTop:30
  },
  al:{
      flexDirection:'row',
      justifyContent:'space-evenly',
      marginBottom:30,
      marginTop:21
      
  },
  tex:{
      fontSize:19,
      fontWeight:'bold'
  },
  button:{
      backgroundColor:'lightblue',
      padding:20,
      width:'100%',
      height:70,
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:20, marginLeft:1,
      borderRightWidth:4,
      borderWidth:2
  },
  button1:{
    
      backgroundColor:'lightpink',
      padding:20,
      marginTop:20,
      flexDirection:'row',
      justifyContent:'space-between',
      width:'100%',
      height:70, marginLeft:1,
      borderWidth:2
  
  },
  button4:{
    
      backgroundColor:'gold',
      padding:20,
      marginTop:20,
      flexDirection:'row',
      justifyContent:'space-between',
      width:'100%',
      height:70, marginLeft:1,
      borderWidth:2
  
  },
  button3:{
    
      backgroundColor:'lightpink',
      padding:20,
      marginTop:20,
      flexDirection:'row',
      justifyContent:'space-between',
      width:'100%',
      height:80,
      borderWidth:2,
      marginLeft:1,
  },
  button2:{
    marginTop:20,
    backgroundColor:'lightgreen',
    padding:20,
    borderWidth:2,
    
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    height:70,
   
    marginLeft:1
}
})