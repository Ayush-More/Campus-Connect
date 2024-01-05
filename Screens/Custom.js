import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useContext } from 'react'
import { Context } from '../Auth'
import React from 'react'
import ionicons from 'react-native-vector-icons/Ionicons'
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'

const Custom = (props,{navigation}) => {
  const {signOut}=useContext(Context)
  return (
    
    <>
    <View style={{flex:1}}>
    <DrawerContentScrollView {...props} contentContainerStyle={{flex:1}}>
      
        <View >
        <DrawerItemList {...props}/>
    
        </View>
      
    </DrawerContentScrollView>
    <View>
   
            <TouchableOpacity onPress={()=>(console.log('Hi'))}>
            
            <Text style={{marginLeft:10,marginBottom:20}}>Help And support </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>{signOut()}}
            >
            <Text style={{marginLeft:10,marginBottom:20 }}>SignOut</Text>
            </TouchableOpacity>
        
           
    
    </View>
    </View>
    </>
  )
}

export default Custom