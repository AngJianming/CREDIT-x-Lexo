import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link, Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter(); // Use the hook
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full  justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.appLogo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cybershield}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />
          <View className="relative mt-1">
            <Text className="text-3xl text-white font-bold text-center">
            Safeguard Your World from{"\n"}
            Threats with{" "}
              <Text className="text-secondary-200">SecureLah</Text>
            </Text>
          </View>
          {" "}
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
          Protect yourself from vishing and other cyber threats. {"\n"}
          Take control of your security journey with SecureLah.
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress = {()=>{router.push("/sign-in")}}
            containerStyles="w-full mt-5"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
