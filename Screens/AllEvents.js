import React from 'react'
import { View,Image, ScrollView } from 'react-native'
export default function All() {
  return (
    <ScrollView>
    <View style={{flex:1,flexDirection:'column',borderStyle:'solid',shadowColor:'red',elevation:5}}>
    <Image source={require('../assets/1313892.png') }
    style={{height:350,width:300,borderRadius:20,margin:50,borderWidth:2,borderColor:'black'}}/>
     <Image source={require('../assets/1323165.png') }
    style={{height:350,width:300,borderRadius:20,margin:50,borderColor:'black',borderWidth:2}}/>
     <Image source={require('../assets/uwp3836211.png') }
    style={{height:350,width:300,borderRadius:20,margin:50,borderColor:'black',borderWidth:2}}/>
     <Image source={require('../assets/uwp3814594.jpeg') }
    style={{height:350,width:300,borderRadius:20,margin:50,borderColor:'black',borderWidth:2}}/>
     <Image source={require('../assets/8262271.jpg') }
    style={{height:350,width:300,borderRadius:20,margin:50,borderColor:'black',borderWidth:2}}/>
    <Image source={require('../assets/hehe.jpg') }
    style={{height:350,width:300,borderRadius:20,margin:50,borderColor:'black',borderWidth:2}}/>
       <Image source={require('../assets/hello.jpg') }
    style={{height:350,width:300,borderRadius:20,margin:50,borderColor:'black',borderWidth:2}}/>
      <Image source={require('../assets/he.jpg') }
    style={{height:350,width:300,borderRadius:20,margin:50,borderColor:'black',borderWidth:2}}/>


    </View>
    </ScrollView>
  )
}
