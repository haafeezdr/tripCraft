import { View, Text, Image } from 'react-native'
import React from 'react'

import { icons } from '@/constants'

const AuthSocials = () => {
  return (
    <View className="flex-row flex justify-center pt-10 gap-10">
      <Image source={icons.google} className="w-16 h-16" resizeMode='contain'/>
      <Image source={icons.facebook} className="w-16 h-16" resizeMode='contain'/>
      <Image source={icons.x} className="w-16 h-16" resizeMode='contain'/>
    </View>
  )
}

export default AuthSocials