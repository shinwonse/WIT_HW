import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import TabNavigation from './Tab';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="SignUp">
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen name="Login" component={Login}/>      
            <Stack.Screen name="Tab" component={TabNavigation}/>       
        </Stack.Navigator>
    );
};

export default StackNavigation;