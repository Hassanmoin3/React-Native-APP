import React, { useState } from "react";
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import manifest from '../manifest.json'
import { AUTH_TOKEN, REFRESH_TOKEN } from './constant.jsx'


export const TokenHandler = async () => {
  let token = await getStorageItem(AUTH_TOKEN)
  await console.log('from storgar', token)
}


export const getToken = async () => {
  console.log('api', `${manifest.baseUrl_API}api/Account/GetAnonymousToken/`)
  headers = await {
    // 'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*"
  }
  await console.log('getting token')
  await axios.post('https://zvonr.co.uk:7073/api/Account/GetAnonymousToken/'
  )
    .then(async res => {
      console.log("----------------")
      await SecureStore.setItemAsync(AUTH_TOKEN, JSON.stringify(res.data.access_token))
      await SecureStore.setItemAsync(REFRESH_TOKEN, JSON.stringify(res.data.refresh_token))
    })
    .catch(error => {
      console.log(error)
    })
    await    console.log('here i am');
}


export const getStorageItem = async function  (Key) {
  await console.log(Key)
  let temp = await ""
  await SecureStore.getItemAsync(Key).
    then(async (string) => { 
      temp = await JSON.parse(string);
    }
    ).catch(error => {console.log(error)})
  return temp;
}



