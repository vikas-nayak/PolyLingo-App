import React from "react";
import { Button, Image, ImageBackground, Text, View } from "react-native";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

export default function Login() {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View className="flex-1 ">
      <ImageBackground
        source={require("./../assets/images/Splash.jpg")}
        resizeMode="cover"
        className="flex-1 justify-center"
      >
        <View className="px-8">
          <Text
            className=" text-[68px] tracking-tighter leading-[78px]  text-white"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            Connect friends easily & quickly
          </Text>
          <Text
            className="text-gray-300 text-[16px] my-5"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            Our chat app is the perfect way to stay connected with friends and
            family.
          </Text>
          <View className="bg-[#ffffff4f] rounded-3xl">
            <Text
              className=" text-white text-[16px] py-4 text-center shadow-sm"
              style={{ fontFamily: "Poppins_500Medium" }}
            >
              Sign up with email
            </Text>
          </View>
        </View>
        <View className="w-full absolute bottom-10">
          <Text
            className=" text-sm text-gray-200 my-5 text-center"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            Existing user?{" "}
            <Text style={{ fontFamily: "Poppins_500Medium" }}>Login</Text>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
