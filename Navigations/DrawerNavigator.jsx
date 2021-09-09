
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import EditProfile from '../Pages/Profile/EditProfile';
import { DrawerContent } from '../Components/DrawerContent';


const Drawer = createDrawerNavigator();
export function DrawerNavigator() {
        return (
            <Drawer.Navigator drawerContent={DrawerContent}>
                <Drawer.Screen  options={{headerShown: false}}  name="EditProfile"  component={EditProfile}/>
            </Drawer.Navigator>
        )
}