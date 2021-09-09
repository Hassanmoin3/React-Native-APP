import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Image} from "react-native";
import {isIphoneX} from 'react-native-iphone-x-helper'
import Cart from "../Pages/Cart/Cart";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import ViewShop from "../Pages/Shop/ViewShop";
import Language from "../Pages/Language/Language";
import Login from "../Pages/Login-Signup/Login";
import { ProfileStackAuth } from "./ProfileStackAuth";
import { ProfileStackApp } from "./ProfileStackApp";
import { heightPercentageToDP } from "react-native-responsive-screen";
const Tab = createBottomTabNavigator();
const HomeIcon = require('../assets/HomeIcon.png')
const LanguageIcon = require('../assets/LanguageIcon.png')
const ShopIcon = require('../assets/ShopIcon.png')
const ProfileIcon = require('../assets/YouIcon.png')
const CartIcon = require('../assets/CartIcon.png')





const imageStyle = focused => {
    return {
        width: 30,
        height: 30,
        tintColor: focused ? "#F30B0B" : "white",
    }
}

export default function BottomTab({}) {

    let topBarOptions={}
    if (isIphoneX()) {
        topBarOptions =  {paddingBottom: 25}
    } else {
        topBarOptions = { paddingBottom: 1 }
    }
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#F30B0B',
            tabBarInactiveTintColor : '#ffff',
            tabBarActiveBackgroundColor: "#232323",
            tabBarInactiveBackgroundColor:"#232323",
            tabBarStyle:{paddingBottom:0},
            tabBarItemStyle: topBarOptions,
            tabBarHideOnKeyboard: true
            
          }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={HomeIcon}
                            resizeMode="contain"
                            style={imageStyle(focused)}
                        />
                    ),
                    
                    
                }}
                
            />
            <Tab.Screen name="Language" component={Language} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <Image
                        source={LanguageIcon}
                        resizeMode="contain"
                        style={imageStyle(focused)}
                    />
                ),
            }}/>
            <Tab.Screen name="Shops" component={ViewShop} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <Image
                        source={ShopIcon}
                        resizeMode="contain"
                        style={imageStyle(focused)}
                    />
                ),
            }}/>
            <Tab.Screen name="Profile" component={ProfileStackApp} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <Image
                        source={ProfileIcon}
                        resizeMode="contain"
                        style={imageStyle(focused)}
                    />
                ),
            }}/>
            <Tab.Screen name="Cart" component={Cart} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <Image
                        source={CartIcon}
                        resizeMode="contain"
                        style={imageStyle(focused)}
                    />
                ),
            }}/>
        </Tab.Navigator>
    );
}
