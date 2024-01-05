import { Text, View } from 'react-native'
import React, { Component, useEffect } from 'react'
import { ClerkProvider,useAuth } from '@clerk/clerk-expo'
import * as SecureStore from 'expo-secure-store'
import { useRouter, useSegments } from 'expo-router'
const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY 
 const tokenCache = {
    async getToken(key: string) {
        try {
            return SecureStore.getItemAsync(key);
        } catch (error) {
            return null;
        }
      },
      async saveToken(key: string, value: string) {
        try {
         return SecureStore.setItemAsync(key, value);
        } catch (error) {
          return ;
        }
        
       }
    }

    const InitialScreen = () => {
      const {isSignedIn,isLoaded} = useAuth()
      const segments =useSegments();
      const router = useRouter()
      useEffect(() => {
        if(!isLoaded) return ;
        const inTabsGroup =segments[0] === '{auth}';
        console.log(isSignedIn)

      }, [isSignedIn])
     
      return <slot/>

    }
export default class Layout extends Component {
  render() {
    return (
      <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY} tokenCache={tokenCache} >
        <InitialScreen />
        </ClerkProvider>

    )
  }
}