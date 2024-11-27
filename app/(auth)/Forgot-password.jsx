import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
 
import { icons } from '@/constants'
import FormField from '../components/FormField'
import CustomButton from '../components/CustomButton'
import AuthHeader from '../components/AuthHeader'
import AuthSocials from '../components/AuthSocials'
// import {  getCurrentUser, signIn } from '../../lib/appwrite'
// import { useGlobalContext } from "../../context/GlobalProvider";

const ForgotPassword = () => {
  // const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
  });

// const submit = async () => {
//   if(form.email === "") 
//   {
//     Alert.alert("Error","Please fill in all the fields")
//   }
//     setSubmitting(true);

//     try {
//      
//       // const result = await createUser(form.email, form.password, form.username);
//       // setUser(result);
//       // setIsLogged(true);

//       Alert.alert("Success", "User signed up successfully");
//       router.replace("/home");
//     } catch (error) {
//       Alert.alert("Error", error.message)
//     } finally {
//       setSubmitting(false);
//     }
 
// }

  return (
    <SafeAreaView className="bg-white h-full">
        <Link href="/Sign-in" className='ml-4 mt-8'>
          <Image source={icons.arrow} className="w-12 h-12 " resizeMode='contain'/>
        </Link>
        <View className=" w-full px-4 my-10 justify-center items-center">
          <AuthHeader
            title="Forgot Password"
            description="Enter the email associated with your  account to reset  your password"
          />
            <FormField 
              title="Email"
              placeholder={"Enter your email"}
              value={form.email}
              handleChangeText={(e) => setForm({...form, email: e})}
              otherStyles="mt-7"
              keyboardType="email-address"
            />

            <Link href="/Check-mail"
                 className="bg-primary rounded-xl min-h-[62px] justify-center items-center  w-full mt-7">
              <Text className={'text-[#FFFFFF] mt-2 font-psemibold text-lg text-center justify-center '}>Continue</Text>
            </Link>

              
        </View>
    </SafeAreaView>
  )
}

export default ForgotPassword