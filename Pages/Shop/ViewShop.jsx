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
import ProductCard from "../../Components/ProductCard";

const ViewShop = () => {
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
						<ProductCard src={PorductImage} txtShopName='Grocery Shop'  txtShopOwner='Hassan' txtShopAdd ='Berlin , Germany'/>
						<ProductCard src={PorductImage} txtShopName='Hassan Shop'  txtShopOwner='Hassan' txtShopAdd ='ST-18 Hertforshire, England'/>
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


export default ViewShop