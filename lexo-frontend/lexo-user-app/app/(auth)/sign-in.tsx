import React from "react";
import { Image, ScrollView, View, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "@/components/FormField";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link, router} from "expo-router";


const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const[isSubmitting, setIsSubmitting] = useState(false)
  
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[83vh] px-4 my-6">
          <Image
            source={images.appLogo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Log In to SecureLah
          </Text>
          <FormField
            title="Email"
            // value={form.email}
            // handleChangeText={(e : any) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Pasword"
            // value={form.password}
            // handleChangeText={(e : any) => setForm({ ...form, password: e })}   
            otherStyles="mt-7"
          />
          <CustomButton
            title = "Sign In"
            handlePress = {()=>{router.push("/home")}} 
            containerStyles = "mt-7"
            isLoading = {isSubmitting}
          />
           <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-pregular">
                Don't have account?
              </Text>
              <Link href ="/sign-up" className="text-lg font-psemibold text-secondary">
              Sign Up
              </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  
  );
};

export default SignIn;