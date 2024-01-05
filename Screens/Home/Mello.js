import { Text, View ,Image} from 'react-native'
import React, { Component } from 'react'

export default function Mello({data}) {
  return (
    <View>
    <Image 
    source={data.image}  
    style={{height:350,width:300,borderRadius:10}}/>
   </View>
  )
}
