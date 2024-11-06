import { View, Text, ScrollView, Image } from 'react-native'
import { StatusBar } from 'react-native'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from "react-native-safe-area-context";

import { icons } from '@/constants'

const Welcome = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
        <View className="min-h-[84vh] w-full items-center justify-center px-4"> 
            <Image 
              source={icons.logo} 
              className="w-[240px] h-[230px]"
              resizeMode='contain'
              />
              <Text className="text-3xl text-white font-psemibold">TripCraft</Text>
        </View>
    </SafeAreaView>
  )
}

export default Welcome