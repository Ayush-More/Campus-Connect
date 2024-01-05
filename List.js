import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import ListPage from "./ListPage";
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
function HomeScreen({ navigation }) {
  const [products, setProducts] = useState(24);
  return (
    <>
      <ScrollView style={{backgroundColor:'white'}}>
        <View style={{ padding: 10, backgroundColor: "white" }}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{ height: 25, width: 32, marginTop: 30, marginRight: 14 }}
            >
              <Image source={require("./three.jpg")} />
            </TouchableOpacity>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#E9E9E9",
                borderRadius: 5,
                padding: 5,
                width: 261,
                height: 41,
                marginTop: 25,
              }}
            >
              <Ionicons name="md-search" size={20} color="black" />
              <TextInput
                style={{ marginLeft: 10 }}
                placeholder="Search product"
              />
              <TouchableOpacity>
                <Image
                  source={require("./assets/hehe.jpg")}
                  style={styles.hello}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                marginTop: 10,
                fontWeight: 800,
                marginTop: 14,
                fontSize: 17,
              }}
            >
              What you would like to sell?
            </Text>
            <TouchableOpacity style={{ marginLeft: 100, marginTop: 19 }}>
              <Image
                source={require("./Arrows.png")}
                style={{ height: 32, width: 15 }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 10, marginTop: 19 }}>
              <Image
                source={require("./Filter.jpg")}
                style={{ height: 30, width: 30 }}
              />
            </TouchableOpacity>
          </View>

          <Text style={{ marginTop: 4, fontSize: 15,marginLeft:20 }}>
            {products} products found
          </Text>
        </View>
      <ListPage/>
      </ScrollView>
    </>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Home") {
            return <Ionicons name="md-home" size={27} color={'white'} 
            style={{backgroundColor:'lightgreen',borderRadius:50,width:48,height:47,paddingTop:8,paddingLeft:12,top:6,left:4,borderColor:'black',borderStyle:'solid'}}/>;
          }
        },
        tabBarStyle:{
          height:51,
          width:343,
          marginLeft:20,
          top:2.4,
          borderRadius:40,
          elevation:5
        },
        tabBarLabel:''
      })}
      tabBarOptions={{
        activeTintColor: "green",
        inactiveTintColor: "gray",
        
        
      }}
      
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
        
        
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  hello: {
    height: 45,
    width: 45,
    borderRadius: 100,
    backgroundColor: "white",
    alignItems: "flex-end",
    marginLeft: 150,
  },
  linearGradient: {
    borderRadius: 15.1,
    height: 194,
    width: 158,
  },
});
