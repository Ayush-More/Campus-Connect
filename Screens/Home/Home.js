import React, { useState } from "react";
import { Text, ScrollView, Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Carousel from "react-native-snap-carousel";
import { sliderData } from "../../data";
import { windowWidth } from "../Dimensions";
import Mello from "./Mello";
import Trending from "./Trending";
import Browse from "./Browse";
import ProfileScreen from '../Editing'
import SettingsPage from '../Settings'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
import { createStackNavigator } from "@react-navigation/stack";
const image = ({ item, index }) => {
  return <Mello data={item} />;
};

function HomeScreen({ navigation }) {
  const[name,SetName]=useState('Sudhir')
  return (
   
      
      <ScrollView style={{marginTop:14}} >
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Text style={styles.txt}>Hello {name}</Text>
            <TouchableOpacity>
              <Image
                source={require("../../assets/hehe.jpg")}
                style={styles.hello}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{ height: 3, width: "100%", backgroundColor: "red" }}
          ></View>
        </View>
        <View
          style={{
            marginVertical: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "black",
              fontSize: 20,
             marginLeft:22
            }}
          >
            Upcoming Events
          </Text>
        </View>

        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={image}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
        />

        <Trending />
        <Browse navigation={navigation} />
      </ScrollView>
   
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator 
  
    
      screenOptions={{
        activeTintColor: "red",
        inactiveTintColor: "gray",
        labelStyle: { fontSize: 12 },
        headerTitleAlign:'center',
        headerTintColor:'black',
        
       
        
      }}
    >
      <Tab.Screen
        name="Ho"
        component={HomeScreen}
        
        options={{
          headerShown:false,
          
          tabBarLabel: "Home",
         tabBarInactiveTintColor:'black',
          tabBarActiveTintColor: 'red',
          
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
          
        }}
      />
      <Tab.Screen
        name="Set"
        component={StackNavigator}
        
        options={{
          headerShown:true,
          headerStatusBarHeight:19,
          tabBarInactiveTintColor:'black',
          tabBarActiveTintColor: 'red',
          headerStyle: {
            backgroundColor: 'lightblue',
            
            
          },
          headerTitleStyle:{
            fontSize:25,
          },
          
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" color={color} size={size} />
          ),
          
        }}
      />
    </Tab.Navigator>
  );
}
function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsPage} options={{ headerShown: false }} />
      <Stack.Screen name="Edit" component={ProfileScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function Home() {
  return <TabNavigator />;
}

const styles = StyleSheet.create({
  hello: {
    height: 45,
    width: 45,
    borderRadius: 100,
    backgroundColor: "white",
    alignItems: "flex-end",
    marginTop:7
  },
  txt: {
    fontWeight: "bold",
    fontSize: 25,
    color: "black",
    marginLeft:25,
    marginTop:10
  },
});
