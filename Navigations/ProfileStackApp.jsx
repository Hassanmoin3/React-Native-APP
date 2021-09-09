import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import { DrawerNavigator } from './DrawerNavigator';


const Stack = createStackNavigator();

export const ProfileStackApp = ({}) => {
        return (
            <Stack.Navigator>
                <Stack.Screen  name="Login" options={{headerShown: false}} component={DrawerNavigator}/>
            </Stack.Navigator>
        )
}