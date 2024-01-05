import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';
export default function Messages({navigation}) {
   
    
  return (
    
    <View style={styles.page}>
    <ScrollView style={{ marginTop: 19 }}>
      <TouchableOpacity style={styles.button}>
        <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>1.Mathematics</Text>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>2. Information </Text>
      
      </TouchableOpacity>
      <TouchableOpacity style={styles.button4}>
        <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>3. Data Science</Text>
      
      </TouchableOpacity>
      <TouchableOpacity style={styles.button3}>
        <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>4. DBMS</Text>
    
      </TouchableOpacity>
      <TouchableOpacity style={styles.button4}>
        <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>5. PS-1</Text>
      
      </TouchableOpacity>
      <TouchableOpacity style={styles.button3}>
        <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>6. Machine Learning</Text>
      
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>7.DCD</Text>
        
      </TouchableOpacity>
    </ScrollView>
  </View>
);
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
    
      backgroundColor:'lightblue',
      padding:20,
      marginTop:20,
      flexDirection:'row',
      justifyContent:'space-between',
      width:'100%',
      height:70, marginLeft:1,
      borderWidth:2
  
  },
  button4:{
    
      backgroundColor:'lightblue',
      padding:20,
      marginTop:20,
      flexDirection:'row',
      justifyContent:'space-between',
      width:'100%',
      height:70, marginLeft:1,
      borderWidth:2
  
  },
  button3:{
    
      backgroundColor:'lightblue',
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
    backgroundColor:'lightblue',
    padding:20,
    borderWidth:2,
    
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    height:70,
   
    marginLeft:1
}
})