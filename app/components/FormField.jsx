import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import { icons } from '@/constants'

const FormField = ({ title, handleChangeText, placeholder, value, otherStyles, ...props}) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <View className="w-full h-16 px-4 bg-[#F2F3F6] rounded-2xl items-center flex-row">
        <TextInput 
            className="flex-1 text-[#1B1E28] font-psemibold text-base" 
            placeholder={placeholder} 
            onChangeText={handleChangeText} 
            placeholderTextColor="#1B1E28"
            value={value} 
            secureTextEntry={title === 'Password' && !showPassword} {...props}/>
        
        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image source={!showPassword ? icons.eye : icons.eyeHide} className="w-6 h-6" resizeMode='contain'/>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField