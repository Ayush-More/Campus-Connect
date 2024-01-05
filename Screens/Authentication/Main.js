import { StyleSheet,View,SafeAreaView,Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LottieView from 'lottie-react-native';
const Stack = createStackNavigator();
export default function Main({navigation}) {
  return (<>
    <SafeAreaView style={styles.page}>
          
    <View>
      <Text style={styles.text}>LearnLinkup
      </Text>
      <Text style={styles.tex}>Hello Future Engineer !!</Text>
    </View>
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <LottieView   
    source={require('./Animation - 1699781894817.json')}  
    style={{height:341,width:251,marginRight:16}}
     autoPlay loop={true} speed={0.5}/>

    </View>
    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Login')}>
     
        <Text style={{fontWeight:'bold',fontSize:20,color:"white"}}>Let's Go</Text>
        <MaterialIcons name="arrow-forward-ios"size={22} color="#fff"/>
    </TouchableOpacity>
    </SafeAreaView>
   
    </>
  )
}

  
  const styles = StyleSheet.create({
    page:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
    },
    text:{
        fontSize:40,
        fontWeight:'bold',
        color:'#20315f',
        marginTop:30
    },
    tex:{
        fontSize:19,
        fontWeight:'bold'
    },
    button:{
        backgroundColor:'lightblue',
        padding:20,
        width:"90%",
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:12,
        marginBottom:30
    }
  })