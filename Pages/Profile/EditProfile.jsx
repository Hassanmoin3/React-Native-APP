import React from "react";
import {
  View,
  Text
} from "react-native";
import Button from "../../Components/Button";


import SearchTop from "../../Components/SearchTop";

const EditProfile = ({navigation}) => {
  return (
    <>
      <SearchTop />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello i am at  EditProfile.jsx</Text>
        <Button btnText='open' onClick={()=>{navigation.openDrawer()}} />
      </View>
    </>
  )
}

export default EditProfile