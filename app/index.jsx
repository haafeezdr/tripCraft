
import React, { useRef } from 'react'
import { View } from 'react-native';
import Swiper from 'react-native-swiper';

import { router } from 'expo-router'

import Welcome from './(welcome)/Welcome';
import Welcome1 from './(welcome)/Welcome1';
import Welcome2 from './(welcome)/Welcome2';
import Welcome3 from './(welcome)/Welcome3';
import CustomButton from './components/CustomButton';

export default function WelcomeSwiper() {
  const swiperRef = useRef(null);
  const goToNextSlide = (index) => {
    swiperRef.current?.scrollBy(index);
  };

  return (
    <Swiper
      ref={swiperRef}
      loop={false}
      showsPagination={true}
  >
    <View >
      <Welcome />
    </View>

    <View >
      <Welcome1 />
      <View className="justify-center items-center"> 
        <CustomButton title="Next" 
          handlePress={() => goToNextSlide(1)}
          containerStyles=" w-[90%]"
          textStyles="text-[#fff]"/>
      </View>
    </View>

    <View >
      <Welcome2 />
      <View className="justify-center items-center"> 
        <CustomButton title="Next" 
          handlePress={() => goToNextSlide(1)}
          containerStyles=" w-[90%]"
          textStyles="text-[#fff]"/>
      </View>
    </View>

    <View className=" ">
      <Welcome3 />
      <View className="justify-center items-center"> 
        <CustomButton title="Get Started" 
          handlePress={() => router.push('/Sign-in')}
          containerStyles=" w-[90%]"
          textStyles="text-[#fff]"/>
      </View>
        
    </View>
  </Swiper>
  )
}