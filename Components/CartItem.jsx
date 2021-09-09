import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { actuatedNormalize } from "../Global_Constants/Functions";
import {
  useFonts,
  Signika_300Light,
  Signika_700Bold,
} from '@expo-google-fonts/signika';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from "react-native-responsive-screen";
import { Card } from 'react-native-shadow-cards';
const RightArrowIcon = require('../assets/RightArrow.png')
import InputSpinner from "react-native-input-spinner";

const CartItem = ({ btnText, color = 'white', src = null, txtShopName = '', txtShopOwner = '', txtShopAdd = '' }) => {
  let [fontsLoaded] = useFonts({
    Signika_300Light,
    Signika_700Bold,
  });
  return (
    <>
      {fontsLoaded ?
        <TouchableOpacity>
          <Card style={styles.card} >
            <View style={styles.cardInsideContainer}>

              <View>
                <Image
                  source={src}
                  style={[styles.Image]}
                />
              </View>

              <View style={{ marginLeft: wp(1) }}>
                <Text style={styles.TextProductName}>Hp laptop</Text>
                <Text style={styles.TextPrice}>$42</Text>
                <Text style={styles.TextDiscount}>Discount=$2</Text>
              </View>

              <View style={{justifyContent:'center'}}>
                <InputSpinner
                  max={10}
                  min={2}
                  step={2}
                  style={{backgroundColor:'white',width:wp(30)}}
                  onChange={(num) => {
                    console.log(num);
                  }}
                  buttonFontSize={20}
                  skin='clean'
                  height={hp(5)}
                />
              </View>

              {/* <View style={{padding:5,marginTop:hp(0.5)}}>
                <Text style={styles.TextHeading}>{txtShopName}</Text>
                <Text style={styles.TextBody}>Owner: {txtShopOwner}</Text>
                <Text style={styles.TextBody}>{txtShopAdd}</Text>
              </View>

              <View style={styles.IconContainer}>
                <Image
                  source={RightArrowIcon}
                  resizeMode="contain"
                  style={{width: wp(10), height:hp(10),tintColor:'white'}}
                />
              </View> */}

            </View>
          </Card>
        </TouchableOpacity>

        : null}
    </>
  )
};

const styles = StyleSheet.create({
  card: {
    marginTop: hp(2),
    width: wp(92),
    marginLeft: wp(2),
    height: 'auto',
    borderRadius: 15,
    backgroundColor: '#232323',
    padding: 11
  },
  cardInsideContainer: {
    flexDirection: 'row',
  },
  TextProductName: {
    fontFamily: 'Signika_300Light',
    fontSize: actuatedNormalize(13),
    height: 'auto',
    width: wp(30),
    color: 'white',
    marginBottom: hp(0.3)
  },
  TextPrice: {
    fontFamily: 'Signika_300Light',
    fontSize: actuatedNormalize(13),
    height: 'auto',
    width: wp(30),
    color: 'white',
    marginBottom: hp(0.3)
  },
  TextDiscount: {
    fontFamily: 'Signika_300Light',
    fontSize: actuatedNormalize(13),
    height: 'auto',
    width: wp(30),
    color: '#F30B0B',

  },
  Image: {
    width: wp(22),
    height: hp(8), marginRight: wp(2), borderRadius: 10,
  },
});

export default CartItem;