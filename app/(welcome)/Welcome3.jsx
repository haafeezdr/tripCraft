import { View, Text, Button } from 'react-native'
import React from 'react'
import { Redirect, router, Link } from 'expo-router'
import WelcomePage from '../components/WelcomePage'
import { images } from '@/constants'

const Welcome3 = () => {
  return (
    <View className=" h-[90%]">
        <WelcomePage 
            picture={images.bus}
            title='Explore bus routes and book tickets now!'
            discription='Embark on your journey by choosing your dream destination. Were here to help you every step of the way!'
        />
    </View>
  )
}

export default Welcome3