import Login from "@/components/Login";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1  ">
    <Login />
    </View>
  );
}
