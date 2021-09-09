import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity
} from "react-native";
import { Input } from "react-native-elements"
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'

import SearchTop from "../../Components/SearchTop";
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


const SignUp = () => {
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
            <ImageBackground source={Background} resizeMode="cover" style={styles.ImageBackground} imageStyle={{ opacity: 0.3 }}>

            <KeyboardAwareScrollView>
              <View style={styles.HeadingContainer}>
                <Text allowFontScaling={false} style={styles.HeadingText}>CREATE AN ACCOUNT</Text>
              </View>

              <View style={styles.InputContainer}>
                <Input inputContainerStyle={{ borderBottomWidth: 0 }} placeholder='First Name' placeholderTextColor='black' style={styles.InputInner} />
              </View>

              <View style={styles.InputContainer}>
                <Input inputContainerStyle={{ borderBottomWidth: 0 }} placeholder='Last Name' placeholderTextColor='black' style={styles.InputInner} />
              </View>

              <View style={styles.InputContainer}>
                <Input inputContainerStyle={{ borderBottomWidth: 0 }} placeholder='Email Address' placeholderTextColor='black' style={styles.InputInner} />
              </View>
              <View style={styles.InputContainer}>
                <Input inputContainerStyle={{ borderBottomWidth: 0 }} placeholder='Password' placeholderTextColor='black' style={styles.InputInner} />
              </View>
              <View style={styles.InputContainer}>
                <Input inputContainerStyle={{ borderBottomWidth: 0 }} placeholder='Confirm Password' placeholderTextColor='black' style={styles.InputInner} />
              </View>

              <View style={[styles.MobileInputContainer]}>
                <View style={{width:wp(15),backgroundColor:'lightgray'}}>
                    <Input inputContainerStyle={{ borderBottomWidth: 0 }} editable={false} value={'+92'} style={styles.InputInner}/>
                </View>
                <View style={{width:wp(65),borderLeftWidth:1.5}}>
                <Input inputContainerStyle={{ borderBottomWidth: 0 }} placeholder='Mobile' placeholderTextColor='black' style={styles.InputInner}/>
                </View>
                
                
              </View>

              <View style={styles.btnContainer}>
                <Button btnText='Create Account' />
              </View>
              </KeyboardAwareScrollView>
            </ImageBackground>
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
  HeadingText: {
    fontSize: actuatedNormalize(24),
    color: "black",
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
  MobileInputContainer: {
    height: hp(4),
    borderWidth: 1.5,
    borderRadius: 2,
    flexDirection: 'row',
    width:wp(80),
    marginTop: hp(3),
    marginLeft: wp(10)
  },
  InputInner: {
    fontFamily: 'Signika_300Light',
    fontSize: 18,
    color: 'black',
    paddingBottom: hp(6)
  },
  btnContainer: {
    marginTop: hp(5),
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center'
  },

});




export default SignUp