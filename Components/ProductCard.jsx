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


const ProductCard = ({ btnText, color = 'white', src = null, txtShopName = '', txtShopOwner = '', txtShopAdd = '' }) => {
  let [fontsLoaded] = useFonts({
    Signika_300Light,
    Signika_700Bold,
  });
  return (
    <>
      {fontsLoaded ?
        <TouchableOpacity>
          <Card style={styles.card}>
            <View style={styles.cardInsideContainer}>
              
              <View style={{padding:9}}>
                <Image
                  source={src}
                  style={[styles.Image]}
                />
              </View>

              <View style={{padding:5,marginTop:hp(0.5)}}>
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
              </View>

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
    width: wp(94),
    marginLeft: wp(3),
    height: 'auto',
    borderRadius: 20,
  },
  cardInsideContainer: {
    flexDirection: 'row',
  },
  TextHeading: {
    fontFamily: 'Signika_300Light',
    fontSize: actuatedNormalize(20),
    height: 'auto',
    width: wp(45)
  },
  TextBody: {
    fontFamily: 'Signika_300Light',
    fontSize: actuatedNormalize(12),
    height: 'auto',
    width: wp(45),
    marginTop: hp(0.5)
  },
  Image: {
    width: wp(30),
    height: hp(12), marginRight: wp(2), borderRadius: 20,
  },
  IconContainer: {
    width: wp(9.5),
    height: 'auto',
    backgroundColor: '#F30B0B',
    borderTopRightRadius: 17,
    borderBottomRightRadius: 17,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default ProductCard;