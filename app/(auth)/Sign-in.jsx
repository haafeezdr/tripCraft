import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
 
import { icons } from '@/constants'
import FormField from '../components/FormField'
import CustomButton from '../components/CustomButton'
import AuthHeader from '../components/AuthHeader'
import AuthSocials from '../components/AuthSocials'
import {  getCurrentUser, signIn } from '../../lib/appwrite'
// import { useGlobalContext } from "../../context/GlobalProvider";

const SignIn = () => {
  // const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

const submit = async () => {
  if(form.email === "" || form.password === "") 
  {
    Alert.alert("Error","Please fill in all the fields")
  }
    setSubmitting(true);

    try {
      await signIn(form.email, form.password);

      // const result = await getCurrentUser();
      // setUser(result);
      // setIsLogged(true);

      Alert.alert("Success", "User signed in successfully");
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message)
    } finally {
      setSubmitting(false);
    }
 
}

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <Link href="/Sign-up" className='ml-4 mt-4'>
          <Image source={icons.arrow} className="w-12 h-12 " resizeMode='contain'/>
        </Link>
        <View className="min-h-[84vh] w-full px-4 my-6 justify-center items-center">
          <AuthHeader
            title="Sign in to TripCraft"
            description="Please sign in to continue "
          />
            <FormField 
              title="Email"
              placeholder={"Enter your email"}
              value={form.email}
              handleChangeText={(e) => setForm({...form, email: e})}
              otherStyles="mt-7"
              keyboardType="email-address"
            />
            <FormField 
              title="Password"
              placeholder={"********"}
              value={form.password}
              handleChangeText={(e) => setForm({...form, password: e})}
              otherStyles="mt-7"
            />
            <View className="flex-row justify-end w-full mt-3">
              <Link href="/Forgot-password"  className="text-[#F50000] text-lg font-semibold ">Forget Password</Link>
            </View>
            <CustomButton
              title="Sign In"
              handlePress={submit}
              containerStyles=" mt-7 w-full"
              isLoading={isSubmitting} />

              <View className="flex-row flex justify-center pt-5 gap-2">
                <Text className="text-gray-100 text-lg font-pregular">Don't have an account?
                </Text>
                <Link href="/Sign-up"
                 className="text-[#00174B] text-lg font-psemibold">
                  Sign Up
                </Link>
              </View>
              <Text className="text-gray-100 text-lg font-pregular mt-7">-Or sign up with-
              </Text>
              <AuthSocials/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn