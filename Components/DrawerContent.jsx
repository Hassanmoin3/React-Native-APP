import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import {
  useFonts,
  Signika_300Light,
  Signika_700Bold,
} from '@expo-google-fonts/signika';
import {
  Avatar, Title, Caption, Drawer
} from 'react-native-paper'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from "react-native-responsive-screen";
import { actuatedNormalize } from "../Global_Constants/Functions";
import Icon from 'react-native-vector-icons/FontAwesome';
const defaultimg = require('../assets/defaultimg.png')
const defaultimg1 = require('../assets/defaultimg2.jpg')
const SignoutIcon = require('../assets/Signout.png')

import Button from './Button';

const ShopIcon = require('../assets/ShopIcon.png')

const DrawerContent = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.HeaderContainer}>
          <View style={{ height: hp(3) }}>
            <TouchableOpacity style={{ position: 'absolute', right: 0, paddingRight: 10 }} onPress={()=>{navigation.closeDrawer()}}>
              <Icon name="bars" size={20} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: wp(5), height: hp(12) }}>
            <View>
              <Avatar.Image source={defaultimg1} style={{borderWidth:1, borderColor:'black'}}/>
            </View>
            <View style={{ marginLeft: wp(4) }}>
              <Text style={styles.TextHeading}>Ali Ahmed</Text>
              <Text style={styles.TextInner}>xyz@gmail.com</Text>
              <Text style={styles.TextInner}>+923323832847</Text>
            </View>
          </View>

          <View>
            <View style={{ position: 'absolute', right: 0, flexDirection: 'row', paddingRight: 10 }}>
              <TouchableOpacity>
                <Text style={styles.TouchableText}>Edit Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.TouchableText}>
                  Change Password
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <DrawerContentScrollView style={styles.BodyContainer}>
          <View>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ marginLeft: wp(5) }}>
                <Icon name='caret-right' size={22} />
              </View>
              <View style={{ marginLeft: wp(2) }}>
                <Text style={styles.DrawerItemText}>Privacy & security</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: hp(2) }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ marginLeft: wp(5) }}>
                <Icon name='caret-right' size={22} />
              </View>
              <View style={{ marginLeft: wp(2) }}>
                <Text style={styles.DrawerItemText}>Address management</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: hp(2) }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ marginLeft: wp(5) }}>
                <Icon name='caret-right' size={22} />
              </View>
              <View style={{ marginLeft: wp(2) }}>
                <Text style={styles.DrawerItemText}>New Orders</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: hp(2) }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ marginLeft: wp(5) }}>
                <Icon name='caret-right' size={22} />
              </View>
              <View style={{ marginLeft: wp(2) }}>
                <Text style={styles.DrawerItemText}>In Process</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: hp(2) }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ marginLeft: wp(5) }}>
                <Icon name='caret-right' size={22} />
              </View>
              <View style={{ marginLeft: wp(2) }}>
                <Text style={styles.DrawerItemText}>Completed</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: hp(2) }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ marginLeft: wp(5) }}>
                <Icon name='caret-right' size={22} />
              </View>
              <View style={{ marginLeft: wp(2) }}>
                <Text style={styles.DrawerItemText}>Disputed</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: hp(2) }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ marginLeft: wp(5) }}>
                <Icon name='caret-right' size={22} />
              </View>
              <View style={{ marginLeft: wp(2) }}>
                <Text style={styles.DrawerItemText}>Chat</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: hp(2) }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ marginLeft: wp(5) }}>
                <Icon name='caret-right' size={22} />
              </View>
              <View style={{ marginLeft: wp(2) }}>
                <Text style={styles.DrawerItemText}>Notifications</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: hp(2) }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ marginLeft: wp(5) }}>
                <Icon name='caret-right' size={22} />
              </View>
              <View style={{ marginLeft: wp(2) }}>
                <Text style={styles.DrawerItemText}>Reviews</Text>
              </View>
            </TouchableOpacity>
          </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.FooterContainer}>
          <Button btnText='Manage your Shops' imgColor='#F30B0B' src={ShopIcon} />
          <Button btnText='Signout' imgColor='#F30B0B' src={SignoutIcon} />
        </Drawer.Section>
      </View>

    </>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d7d7d7'
  },
  HeaderContainer: {
    marginTop: hp(6),
    height: hp(20),
    width: wp(75),
    borderTopWidth: 0,
  },
  BodyContainer: {
    height: hp(60),
    width: wp(75)
  },
  FooterContainer: {
    height: hp(20),
    width: wp(75),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:hp(3)
  },
  TextHeading: {
    fontFamily: 'Signika_300Light',
    fontSize: actuatedNormalize(16),
    height: 'auto',

  },
  TextInner: {
    fontFamily: 'Signika_300Light',
    fontSize: actuatedNormalize(14),
    height: 'auto',
  },
  DrawerItemText: {
    fontFamily: 'Signika_300Light',
    fontSize: actuatedNormalize(16),
  },
  TouchableText: {
    textDecorationLine: 'underline',
    fontFamily: 'Signika_300Light',
    fontSize: actuatedNormalize(14),
    marginLeft: wp(2)
  },
  Image: {
    width: 23,
    height: 23, marginRight: wp(2)
  }
});

export { DrawerContent };