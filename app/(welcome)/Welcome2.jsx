import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'
import WelcomePage from '../components/WelcomePage'
import { images } from '@/constants'
import { Redirect, router } from 'expo-router'

const Welcome2 = () => {
  return (
    <View className=" h-[90%]">
        <WelcomePage 
            picture={images.train}
            title='Browse train tickets and plan your journey!'
            discription='For the best adventure, simply choose your destination and go. Were here and ready for you!'
        />
    </View>
  )
}

export default Welcome2