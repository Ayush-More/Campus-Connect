
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Main from './Screens/Authentication/Main';
import Password from './Screens/Authentication/Password'
import Forgot from './Screens/Authentication/Forgot'
import Register from './Screens/Authentication/Register'
import Loginscreen from './Screens/Authentication/Loginscreen';

const Drawer= createDrawerNavigator();
const Stack = createStackNavigator();
import Notes from './Screens/Notes/Notes';
import Custom from './Screens/Custom';
import Home from './Screens/Home/Home';
const Autstack =()=>(
  <Stack.Navigator>
    <Stack.Screen name='Main' component={Main} options={{headerShown:false}}/>
    <Stack.Screen name='Login' component={Loginscreen} options={{headerShown:false}}/>
    <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
    <Stack.Screen name='Forgot' component={Forgot} options={{headerShown:false}}/>
    <Stack.Screen name='Register' component={Register} options={{headerShown:false}}/>
    <Stack.Screen name='Custom' component={Custom} options={{headerShown:false}}/>
    <Stack.Screen name='Notes' component={Notes} options={{headerShown:false}}/>

    

    </Stack.Navigator>
)


export default Autstack