import { View, Text } from 'react-native'
import React from 'react'

const AuthHeader = ({ description, title }) => {
  return (
    <View className="justify-center items-center">
      <Text className="text-3xl font-bold text-[#1B1E28]  text-semibold">
        {title}
      </Text>
      <Text className="text-lg font-psemibold text-[#7D848D] text-center mt-5">{description}</Text>
    </View>
  )
}

export default AuthHeader