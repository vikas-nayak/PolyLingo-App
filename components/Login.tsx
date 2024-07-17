import React from "react";
import { Image, Text, View } from "react-native";

export default function Login() {
  return (
    <View className="flex-1 justify-center ">
      <View className=" ">
        <Image
          source={require("./../assets/login.png")}
          className="w-[300px] h-[300px] mx-auto"
        ></Image>
        <View className=" mx-auto  ">
          <Text className="text-gray-900 font-bold text-[28px] text-center">PolyLingo Chating App</Text>
        <View className=" bg-orange-500 rounded-md px-5 py-4 mt-8">
            <Text className="text-white text-center">Sign in with Google</Text>
        </View>
        </View>
      </View>
    </View>
  );
}
