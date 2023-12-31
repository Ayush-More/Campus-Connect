import React from 'react'
import { SafeAreaView,StyleSheet,StatusBar} from 'react-native'

export default function ({children,style}) {
  return (
    <SafeAreaView style={[styles.screen,style]}>
    {children}
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    screen:{
        paddingTop:Platform.OS==="android"?StatusBar.currentHeight:0,
        flex:1
    }
})