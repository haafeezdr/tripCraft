import { View, Text, Image } from 'react-native';

const WelcomePage = ({ picture, title, discription }) => {
  return (
    <View className= "h-[80%]">
        <Image 
            source={picture} 
            className="w-full h-[75%]"
            // resizeMode='cover'
              />     
        <View className="justify-center items-center p-4">
            <Text className="text-3xl text-primary text-center  font-bold">{title}</Text>
            <Text className="text-lg text-[#7D848D] text-center  font-psemibold mt-3">{discription}</Text>
        </View>
    </View>
  )
}

export default WelcomePage