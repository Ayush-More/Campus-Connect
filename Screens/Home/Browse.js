import { View, Text,StyleSheet,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Notes from '../Notes/Notes'

const Browse = ({navigation}) => {
  return (
   
    <View>
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "black",
          paddingTop: 20,
          paddingBottom: 25,
          marginLeft:29
         
        }}
      >
        Browse All
      </Text>
    </View>
  <ScrollView>
     <View style={styles.br}>
 
              <TouchableOpacity  onPress={() =>{navigation.navigate('Notes')}} style={{  }}>
                <View
                  style={{
                    backgroundColor: "crimson",
                    height: 130,
                    width: 170,
                    justifyContent: "space-evenly",
                    borderRadius: 20,
                    marginLeft:25,borderWidth:1,borderColor:'black'
                  }}
                >
                  <Text
                    style={{
                      fontSize: 23,
                      fontWeight: "bold",
                      textAlign: "center",
                      paddingTop: 2,
                    }}
                  >
                    Notes
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() =>{navigation.navigate('All')}} style={{ paddingLeft: 10 }}>
                <View
                  style={{
                    backgroundColor: "#f5deb3",
                    height: 130,
                    width: 170,
                    justifyContent: "space-evenly",
                    borderRadius: 20,
                    borderWidth:1,borderColor:'black'
                    
                  }}
                >
                  <Text
                    style={{
                      fontSize: 23,
                      fontWeight: "bold",
                      textAlign: "center",
                      paddingTop: 2,
                    }}
                  >
                    Events
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.br1}>
              <TouchableOpacity onPress={() => {navigation.navigate('Display')}} style={{  }}>
                <View
                  style={{
                    backgroundColor: "orange",
                    height: 130,
                    width: 170,
                    justifyContent: "space-evenly",
                    borderRadius: 20,
                    marginLeft:25, borderWidth:1,borderColor:'black'
                  }}
                >
                  <Text
                    style={{
                      fontSize: 23,
                      fontWeight: "bold",
                      textAlign: "center",
                      paddingTop: 2,
                    }}
                  >
                    Internship
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={{ paddingLeft: 10 }}>
                <View
                  style={{
                    backgroundColor: "#98fb98",
                    height: 130,
                    width: 170,
                    justifyContent: "space-evenly",
                    borderRadius: 20,
                    borderWidth:1,borderColor:'black'
                    
                  }}
                >
                  <Text
                    style={{
                      fontSize: 23,
                      fontWeight: "bold",
                      textAlign: "center",
                      paddingTop: 2,
                    }}
                  >
                    {" "}
                    Academic calendar
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.br1}>
              <TouchableOpacity onPress={() => {}} style={{  }}>
                <View
                  style={{
                    backgroundColor: "purple",
                    height: 130,
                    width: 170,
                    justifyContent: "space-evenly",
                    borderRadius: 20,
                    marginBottom:30,
                    marginLeft:25, borderWidth:1,borderColor:'black'
                  }}
                >
                  <Text
                    style={{
                      fontSize: 23,
                      fontWeight: "bold",
                      textAlign: "center",
                      paddingTop: 2,
                    }}
                  >
                    Messages
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={{ paddingLeft: 10 }}>
                <View
                  style={{
                    backgroundColor: "#add8e6",
                    height: 130,
                    width: 170,
                    justifyContent: "space-evenly",
                    borderRadius: 20,
                    borderWidth:1,borderColor:'black'
                    
                  }}
                >
                  <Text
                    style={{
                      fontSize: 23,
                      fontWeight: "bold",
                      textAlign: "center",
                      paddingTop: 2,
                    }}
                  >
                    Mentor
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            </ScrollView>
            </View>
  )
}
const styles = StyleSheet.create({
    hello: {
      height: 45,
      width: 45,
      borderRadius: 100,
      backgroundColor: "white",
      alignItems: "flex-end",
      marginTop: 10,
    },
    txt: {
      marginLeft: 18,
      marginTop: 18,
      fontWeight: "bold",
      fontSize: 25,
      color: "black",
    },
    br: {
      flexDirection: "row",
    },
    br1: {
      marginTop: 20,
      flexDirection: "row",
    },
    Card: {
      backgroundColor: "red",
      height: 130,
      width: 170,
      justifyContent: "space-evenly",
      borderRadius: 20,
    },
  });
  

export default Browse