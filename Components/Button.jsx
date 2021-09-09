import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { actuatedNormalize } from "../Global_Constants/Functions";
import {
  useFonts,
  Signika_300Light,
  Signika_700Bold,
} from '@expo-google-fonts/signika';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from "react-native-responsive-screen";


const Button = ({ btnText, color = 'white', src = null, btnBackgroundcolor = 'black',onClick, imgColor='white'}) => {
  let [fontsLoaded] = useFonts({
    Signika_300Light,
    Signika_700Bold,
  });
  return (
    <>
      {fontsLoaded ? <View style={[styles.container, { backgroundColor: btnBackgroundcolor }]}>
        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={onClick}>
          {src != null ? <Image
            source={src}
            resizeMode="contain"
            style={[styles.Image, { tintColor: imgColor }]}
          /> : null}
          <Text allowFontScaling={false} style={[styles.Text, { color: color }]}>{btnText}</Text>
        </TouchableOpacity>
      </View>
        : null}
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: 'auto',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    padding: wp(3),
    paddingRight: wp(5),
    paddingLeft: wp(5)
  },
  Text: {
    fontFamily: 'Signika_700Bold',
    fontSize: actuatedNormalize(16),
  },
  Image: {
    width: 23,
    height: 23, marginRight: wp(2)
  }
});

export default Button;