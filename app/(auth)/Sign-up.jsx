import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
 
import { icons } from '@/constants'
import FormField from '../components/FormField'
import CustomButton from '../components/CustomButton'
import AuthHeader from '../components/AuthHeader'
import AuthSocials from '../components/AuthSocials'
import {  createUser } from '../../lib/appwrite'
// import { useGlobalContext } from "../../context/GlobalProvider";

const SignUp = () => {
  // const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });


const submit = async () => {
  if(form.name === "" || form.email === "" || form.password === "") 
  {
    Alert.alert("Error","Please fill in all the fields")
  }
    setSubmitting(true);

    try {
     
      const result = await createUser(form.email, form.password, form.name);
      setUser(result);
      setIsLogged(true);


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
        <Link href="/" className='ml-4 mt-4'>
          <Image source={icons.arrow} className="w-12 h-12 " resizeMode='contain'/>
        </Link>
        <View className="min-h-[84vh] w-full px-4 my-6 justify-center items-center">
          <AuthHeader
            title="Sign up to TripCraft"
            description="Please fill the details to create account"
          />
            <FormField 
              title="Name"
              placeholder={"Enter your full Name"}
              value={form.name}
              handleChangeText={(e) => setForm({...form, name: e})}
              otherStyles="mt-7"
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
            <Text className="text-[#7D848D] text-sm font-pregular mt-2">Password must be 8 characters or more!</Text>
            <CustomButton
              title="Sign Up"
              handlePress={submit}
              containerStyles=" mt-7 w-full"
              isLoading={isSubmitting} />

              <View className="flex-row flex justify-center pt-5 gap-2">
                <Text className="text-gray-100 text-lg font-pregular">Already have an account?
                </Text>
                <Link href="/Sign-in"
                 className="text-[#00174B] text-lg font-psemibold">
                  Sign In
                </Link>
              </View>
              <Text className="text-gray-100 text-lg font-pregular mt-7"> Or connect with
              </Text>
              <AuthSocials/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp