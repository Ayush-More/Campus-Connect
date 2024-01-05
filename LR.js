
import React, { Component } from "react";
import Home from "./Screens/Home/Home";
import All from "./Screens/AllEvents";
import Notes from "./Screens/Notes/Notes";
import Section from './Screens/Notes/Section'
import Pdf from './Screens/Notes/Pdf'
import FullView from './Screens/Internship/Fullview';
import Display from "./Screens/Internship/Dataa";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "./Screens/Authentication/Main";
import Browse from "./Screens/Home/Browse";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export class LR extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          component={Home}
          name="Home"
          options={{ headerShown: false }}
        />
          <Stack.Screen
            name="Browse"
            component={Browse}
            options={{ headerShown: false }}
          />
        <Stack.Screen
          name="Notes"
          component={Notes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="All"
          component={All}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Display"
          component={Display}
          options={{ headerShown: false }}
        />
      
        <Stack.Screen
          name="Section"
          component={Section}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pdf"
          component={Pdf}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FullView"
          component={FullView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
}
const Scc = () => null; // Fix: Return null instead of void
const Tb = () => (
  <Tab.Navigator>
    <Tab.Screen name="Scc" component={Scc} options={{ headerShown: false }} />
    <Tab.Screen name="Main" component={Main} />
  </Tab.Navigator>
);
export default LR;
