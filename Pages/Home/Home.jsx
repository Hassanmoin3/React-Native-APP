import React, { useState, useCallback, useEffect } from "react";
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
const ShopIcon = require('../../assets/ShopIcon.png');
import { getToken } from "../../utils/servicehelper";

const Home = () => {
  let [fontsLoaded] = useFonts({
    Signika_300Light,
    Signika_700Bold,
  });

  const [countryopen, setCountryopen] = useState(false);
  const [countryvalue, setCountryvalue] = useState(null);
  const [countryitems, setCountryItems] = useState([
    { label: 'Pakistan', value: 'pakistan' },
    { label: 'USA', value: 'usa' },
    { label: 'Canada', value: 'canada' },
    { label: 'Austria', value: 'australia' },
    { label: 'UK', value: 'uk' }
  ]);
  const [provinceopen, setProvinceopen] = useState(false);
  const [provincevalue, setProvincevalue] = useState(null);
  const [provinceitems, setProvinceItems] = useState([
    { label: 'Pakistan', value: 'pakistan' },
    { label: 'USA', value: 'usa' },
    { label: 'Canada', value: 'canada' },
    { label: 'Austria', value: 'australia' },
    { label: 'UK', value: 'uk' }
  ]);
  const [cityopen, setCityopen] = useState(false);
  const [cityvalue, setCityvalue] = useState(null);
  const [cityitems, setCityItems] = useState([
    { label: 'Pakistan', value: 'pakistan' },
    { label: 'USA', value: 'usa' },
    { label: 'Canada', value: 'canada' },
    { label: 'Austria', value: 'australia' },
    { label: 'UK', value: 'uk' }
  ]);

  const onCountryOpen = useCallback(() => {
    setCityopen(false);
    setProvinceopen(false);
  }, []);

  const onCityOpen = useCallback(() => {
    setCountryopen(false);
    setProvinceopen(false);
  }, []);

  const onProvinceOpen = useCallback(() => {
    setCountryopen(false);
    setCityopen(false);
  }, []);

  useEffect(()=>{
      console.log('i am in useEffect')
      getToken();
      
  })

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
              <View>
                <View style={[styles.DropDownContainer, Platform.OS != "android" && { zIndex: 10 }]}>
                  <DropDownPicker
                    placeholder="Country"
                    searchable={true}
                    style={{ backgroundColor: 'transparent', zIndex: 10 }}
                    open={countryopen}
                    onOpen={onCountryOpen}
                    value={countryvalue}
                    items={countryitems}
                    setOpen={setCountryopen}
                    setValue={setCountryvalue}
                    setItems={setCountryItems}
                  />
                </View>
                <View style={[styles.DropDownContainer, Platform.OS != "android" && { zIndex: 5 }]}>
                  <DropDownPicker
                    placeholder="Province"
                    style={{ backgroundColor: 'transparent', zIndex: 5 }}
                    open={provinceopen}
                    onOpen={onProvinceOpen}
                    value={provincevalue}
                    items={provinceitems}
                    setOpen={setProvinceopen}
                    setValue={setProvincevalue}
                    setItems={setProvinceItems}
                  />
                </View>
                <View style={[styles.DropDownContainer, Platform.OS != "android" && { zIndex: 1 }]}>
                  <DropDownPicker
                    placeholder="City"
                    style={{ backgroundColor: 'transparent', zIndex: 10 }}
                    dropDownContainerStyle={{ position: 'absolute' }}
                    open={cityopen}
                    onOpen={onCityOpen}
                    value={cityvalue}
                    items={cityitems}
                    setOpen={setCityopen}
                    setValue={setCityvalue}
                    setItems={setCityItems}
                  />
                </View>
              </View>

              <View style={styles.HeadingContainer}>
                <Text allowFontScaling={false} style={styles.HeadingOuterText}>Welcome to <Text style={styles.HeadingInnerText}>Zvonr</Text></Text>
              </View>

              <View style={styles.btnContainer}>
                <Button btnText='How it Works' />
              </View>

              <View style={styles.btnContainer}>
                <Button btnText='Manage your Shops' color='#F30B0B' imgColor='#F30B0B' src={ShopIcon} onClick={()=>{getToken()}} />
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
  DropDownContainer: {
    width: wp(70),
    marginLeft: wp(15),
    marginTop: hp(3),

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
    marginBottom: hp(3)
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
    alignItems: 'center'
  },
  TextInner: {
    fontFamily: 'Signika_300Light',
    fontSize: actuatedNormalize(15),
    color: 'black',
    paddingBottom: hp(1)
  },

});


export default Home