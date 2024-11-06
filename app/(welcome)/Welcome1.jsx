import { View, Text } from 'react-native'
import React from 'react'
import WelcomePage from '../components/WelcomePage'
import { Redirect, router } from 'expo-router'

import { images } from '@/constants'
import CustomButton from '../components/CustomButton'

const Welcome1 = () => {
  return (
    <View className="h-[90%] ">
        <WelcomePage 
            picture={images.plain}
            title='Discover flights and book your trip!'
            discription='At Friends Tours and Travel, we create tailored educational trips you can trust, to destinations worldwide.'
        />
    </View>
  )
}

export default Welcome1