import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  StyleSheet,
  Platform
} from "react-native";
const Background = require('../../assets/BackgroudMain.jpg')
import Loader from "../../Components/Loader";
import Button from "../../Components/Button";
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from "react-native-responsive-screen";
import {
  useFonts,
  Signika_300Light,
  Signika_700Bold,
} from '@expo-google-fonts/signika';
import { actuatedNormalize } from "../../Global_Constants/Functions";
import SearchTop from "../../Components/SearchTop";
import DropDownPicker from 'react-native-dropdown-picker';
const ShopIcon = require('../../assets/ShopIcon.png')
const PorductImage = require('../../assets/ProductDefault.jpg')
import CartItem from "../../Components/CartItem";

const Cart = () => {
  let [fontsLoaded] = useFonts({
    Signika_300Light,
    Signika_700Bold,
  });

  if (!fontsLoaded) {
    return <Loader />
  }
  else {
    return (
      <>
        <SearchTop />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

          <View style={styles.container}>
            <View style={styles.HeadingContainer}>
              <Text allowFontScaling={false} style={styles.HeadingOuterText}>Your Cart</Text>
              <CartItem src={PorductImage} />
              <CartItem src={PorductImage} />
            </View>


            <View style={styles.BottomContainer}>
              <View>
                <Text style={styles.TextDiscount}>Discount:      $2.00</Text>
                <Text style={styles.TextPrice}>Cart Total:     $42.00</Text>
                <Text style={[styles.TextPrice, { marginBottom: hp(2) }]}>Tax:                 $6.00</Text>
                <Text style={styles.TextPrice}>Total:              $50.00</Text>
              </View>

              <View style={styles.btnContainer}>
                <Button btnText='Make orders' btnBackgroundcolor='#F30B0B' />
              </View>
            </View>


          </View>
        </TouchableWithoutFeedback>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ImageBackground: {
    flex: 1,
  },
  DropDownContainer: {
    width: wp(70),
    marginLeft: wp(15),
    marginTop: hp(3),

  },
  HeadingOuterText: {
    fontSize: actuatedNormalize(28),
    color: "black",
    fontFamily: 'Signika_700Bold'

  },
  HeadingInnerText: {
    fontSize: actuatedNormalize(24),
    color: "#F30B0B",
    fontFamily: 'Signika_700Bold'
  },
  HeadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(2),
    marginBottom: hp(2)
  },
  InputContainer: {
    borderWidth: 1.5,
    borderRadius: 2,
    width: wp(80),
    height: hp(4),
    marginTop: hp(3),
    marginLeft: wp(10)
  },
  InputInner: {
    fontFamily: 'Signika_300Light',
    fontSize: 20,
    color: 'black',
    paddingBottom: hp(6)
  },
  btnContainer: {
    marginTop: hp(4),
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInner: {
    fontFamily: 'Signika_300Light',
    fontSize: actuatedNormalize(15),
    color: 'black',
    paddingBottom: hp(1)
  },
  BottomContainer: {
    width: wp(100),
    height: hp(15),
    backgroundColor: '#232323',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row'
  },
  TextPrice: {
    fontFamily: 'Signika_300Light',
    fontSize: actuatedNormalize(13),
    height: 'auto',
    width: wp(40),
    color: 'white',
    marginBottom: hp(0.5),
    marginLeft: wp(5)
  },
  TextDiscount: {
    fontFamily: 'Signika_300Light',
    fontSize: actuatedNormalize(13),
    height: 'auto',
    width: wp(40),
    color: '#F30B0B',
    marginLeft: wp(5),
    marginBottom: hp(0.5),
    marginTop: hp(1)

  },
  btnContainer: {
    marginTop: hp(4),
    width: wp(50),
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    right: 0
  }

});


export default Cart