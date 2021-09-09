import React from "react";
import {
        View,
        Text
    } from "react-native";

import SearchTop from "../../Components/SearchTop";

const Profile = () => {
        return (
                <>
                        <SearchTop />
                        <View style={{flex:1 , justifyContent:'center', alignItems:'center'}}>
                                <Text>Hello i am at  Profile.jsx</Text>
                        </View> 
                </>
        )
}

export default Profile