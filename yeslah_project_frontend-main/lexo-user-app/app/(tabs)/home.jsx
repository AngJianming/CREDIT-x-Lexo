import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import RiskAssessmentBox from "../../components/RiskAssessmentBox";
import NextStepBox from "../../components/NextStepBox";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-black h-full">
      <ScrollView className="px-5 py-5">
        <View className="mb-3 flex flex-row justify-between">
          <View>
            <Text className="text-2xl font-extrabold text-white mb-[5px]">
              Welcome Back
            </Text>
            <Text className="text-xl font-bold text-[#CCCCCC]">
              Hi, Jonas Kwan
            </Text>
          </View>
          <View>
            <Image
              source={images.appLogo}
              className="w-20 h-20"
              resizeMode="contain"
            />
          </View>
        </View>
        <View className="flex justify-center items-center">
          <RiskAssessmentBox />
        </View>
        {/* Horizontal ScrollView */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          className="my-7"
        >
          <View className="bg-gray-800 p-4 rounded-xl mr-3 flex-row">
           
            <View className="flex flex-col">
              <View>
                <Text className="text-white text-base">
                  Suspicious Calls Blocked
                </Text>
              </View>
              <View className="flex-row">
                <Text className="font-extrabold text-white text-xl">3</Text>
                <Text className="text-green-500 text-base ml-10">+55%</Text>
              </View>
            </View>
          </View>

          <View className="bg-gray-800 p-4 rounded-xl mr-3 flex-row">
            
            <View className="flex flex-col">
              <View>
                <Text className="text-white text-base">
                  Unknown Calls Detected
                </Text>
              </View>
              <View className="flex-row">
                <Text className="font-extrabold text-white text-xl">5</Text>
                <Text className="text-green-500 text-base ml-10">+10%</Text>
              </View>
            </View>
          </View>

          {/* Add more boxes here if needed */}
        </ScrollView>
        <View>
          <NextStepBox />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;


