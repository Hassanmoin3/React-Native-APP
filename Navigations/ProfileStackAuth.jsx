import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Login from '../Pages/Login-Signup/Login';
import SignUp from '../Pages/Login-Signup/SignUp';

const Stack = createStackNavigator();

export const ProfileStackAuth = ({}) => {
        return (
            <Stack.Navigator>
                <Stack.Screen  name="Login" options={{headerShown: false}} component={Login}/>
                <Stack.Screen  name="SignUp" options={{headerShown: false}} component={SignUp}/>
            </Stack.Navigator>
        )
}