import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Login from '../Pages/Login-Signup/Login';
import SignUp from '../Pages/Login-Signup/SignUp';

const Stack = createStackNavigator();

export const HomeStack = ({}) => {
        return (
            <Stack.Navigator>
                <Stack.Screen  name="SignUp" component={SignUp}/>
                <Stack.Screen  name="Login" component={Login}/>
            </Stack.Navigator>
        )
}