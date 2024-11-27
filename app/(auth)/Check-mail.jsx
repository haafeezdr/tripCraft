import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
 
import { icons } from '@/constants'
import CustomButton from '../components/CustomButton'
import AuthHeader from '../components/AuthHeader'

import { openInbox } from "react-native-email-link";
import * as IntentLauncher from 'expo-intent-launcher';

const Checkmail = () => {

    const openMail = async () => {
        if (Platform.OS === "ios") {
          try {
            await openInbox({ title: "Open mail app" });
          } catch (error) {
            console.error(`OpenEmailbox > iOS Error > ${error}`);
          }
        }
      
        if (Platform.OS === "android") {
          const activityAction = "android.intent.action.MAIN";
          const intentParams = {
            category: "android.intent.category.APP_EMAIL",
          };
          IntentLauncher.startActivityAsync(activityAction, intentParams);
        }
      }


  return (
    <SafeAreaView className="bg-white h-full">
        <Link href="/Sign-in" className='ml-4 mt-8'>
          <Image source={icons.arrow} className="w-12 h-12 " resizeMode='contain'/>
        </Link>
        <View className="flex flex-col gap-10 w-full px-4 my-10 justify-center items-center">
            <Image source={icons.bigmail} className="w-28 h-28 " resizeMode='contain'/>
            <AuthHeader
                title="Check Your Mail"
                description="We have sent a password recovery instructions to your email"
            />
            <CustomButton title="Open email app"
                containerStyles=" mt-7 w-[80%]"
                handlePress={openMail}
                /> 
            <Link href='' className="text-gray-100 text-lg font-pregular mt-4">Skip, i'll confirm later</Link> 
        </View>
        <View className="flex justify-center items-center text-center pt-5 gap-2">
            <Text className="text-gray-100 text-lg font-pregular">Didnt receive the email? Check Your spam filter or try</Text>
            <Link href="/Forgot-password"
                 className="text-[#00174B] text-lg font-bold">
                  another email
            </Link>
        </View>
    </SafeAreaView>
  )
}

export default Checkmail