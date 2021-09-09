import React from "react";
import {
        View,
        StyleSheet,
        Keyboard,
        TouchableWithoutFeedback,
        Image,
        TouchableOpacity,
} from "react-native";
import { Input, Text, } from "react-native-elements";
import {
        useFonts,
        Signika_300Light,
        Signika_400Regular,
        Signika_500Medium,
        Signika_600SemiBold,
        Signika_700Bold,
} from '@expo-google-fonts/signika';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from "react-native-responsive-screen";
const SearchIcon = require('../assets/SearchIcon.png')


const SearchTop = () => {
        let [fontsLoaded] = useFonts({
                Signika_300Light,
        });
        return (
                <>
                        {fontsLoaded ?
                                <View style={styles.container}>
                                        <TouchableOpacity>
                                                <Image
                                                        source={SearchIcon}
                                                        style={{marginLeft: wp(3),width: wp(7),marginTop:hp(0.2) , height: hp(7),resizeMode:'contain',tintColor:'#F30B0B'}}
                                                />      
                                        </TouchableOpacity>
                                        <Input 
                                                placeholder=" Search for anything on Zvonr"
                                                placeholderTextColor= 'white'
                                                allowFontScaling={false}
                                                style={[
                                                        styles.TextFieldBorder,
                                                        { height: hp(8), marginBottom: hp(-1) ,fontSize:15,color:'white',fontFamily: 'Signika_300Light' },
                                                ]}
                                                inputContainerStyle={{ borderBottomWidth: 0 }}
                                        // multiline={true}
                                        // numberOfLines={5}
                                        // value={job_description}
                                        // onChangeText={(text) => {
                                        //         setJob_description(text);
                                        // }} 
                                        />
                                        
                                </View>
                        : null}

                </>
        )
}

const styles = StyleSheet.create({
        container: {
                width: wp(100),
                backgroundColor: 'black',
                height: hp(7),
                marginTop: hp(6),
                flexDirection: "row"
        },
});

export default SearchTop