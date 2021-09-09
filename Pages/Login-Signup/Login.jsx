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

import SearchTop from "../../Components/SearchTop";
const Background = require('../../assets/BackgroudMain.jpg')
import Loader from "../../Components/Loader";
import Button from "../../Components/Button";

import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from "react-native-responsive-screen";
import {
  useFonts,
  Signika_300Light,
  Signika_400Regular,
  Signika_500Medium,
  Signika_600SemiBold,
  Signika_700Bold,
} from '@expo-google-fonts/signika';
import { actuatedNormalize } from "../../Global_Constants/Functions";


const Login = ({navigation}) => {
  let [fontsLoaded] = useFonts({
    Signika_300Light,
    Signika_700Bold,
  });

  const onSignUpClick=() =>{
    navigation.navigate('SignUp')
  }

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
              <View style={styles.HeadingContainer}>
                <Text allowFontScaling={false} style={styles.HeadingOuterText}>Welcome to <Text style={styles.HeadingInnerText}>Zvonr</Text></Text>
              </View>

              <View style={styles.InputContainer}>
                <Input inputContainerStyle={{ borderBottomWidth: 0 }} placeholder='Username' placeholderTextColor='black' style={styles.InputInner} />
              </View>

              <View style={styles.InputContainer}>
                <Input inputContainerStyle={{ borderBottomWidth: 0 }} placeholder='Password' placeholderTextColor='black' style={styles.InputInner} />
              </View>

              <View style={styles.btnContainer}>
                <Button btnText='Login' />
              </View>

              <View style={styles.forgotContainer}>
                <TouchableOpacity>
                  <Text allowFontScaling={false} style={styles.TextInner}>Forgot your Password?</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.forgotContainer}>
                <TouchableOpacity>
                  <Text allowFontScaling={false} style={[styles.TextInner, { fontSize: actuatedNormalize(20) }]}>Don't you have account?</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.btnContainer}>
                <Button btnText='Sign up' onClick={onSignUpClick}/>
              </View>



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
  HeadingOuterText: {
    fontSize: actuatedNormalize(24),
    color: "black",
    fontFamily: 'Signika_300Light'

  },
  HeadingInnerText: {
    fontSize: actuatedNormalize(24),
    color: "#F30B0B",
    fontFamily: 'Signika_700Bold'
  },
  HeadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(8),
    marginBottom: hp(5)
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
    fontSize: 18,
    color: 'black',
    paddingBottom: hp(6)
  },
  btnContainer: {
    marginTop: hp(4),
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center'
  },
  forgotContainer: {
    marginTop: hp(3),
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextInner: {
    fontFamily: 'Signika_300Light',
    fontSize: actuatedNormalize(15),
    color: 'black',
    paddingBottom: hp(1)
  },

});




export default Login