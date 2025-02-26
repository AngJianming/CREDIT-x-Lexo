import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const tools = [
  { id: 1, name: "Email Verifier", icon: "email-check-outline" },
  { id: 2, name: "Link Scanner", icon: "link-variant" },
  { id: 3, name: "Password Checker", icon: "lock-check-outline" },
  { id: 4, name: "Data Breach Checker", icon: "database-lock-outline" },
  { id: 5, name: "Malware Scanner", icon: "bug-outline" },
  { id: 6, name: "Network Analyzer", icon: "wifi-strength-outline" },
];

const Tools = () => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView className="flex-1">
        <View className="p-5">
          <Text className="text-white font-extrabold text-4xl">Tools</Text>
          <Text className="my-3 text-gray-400 font-bold">
            Even more awesome tools to stay safe
          </Text>
          {/* Grid Layout */}
          <View className="flex-row flex-wrap justify-between mt-5">
            {tools.map((tool) => (
              <TouchableOpacity
                key={tool.id}
                className="w-[47%] mb-4 bg-orange-300 rounded-xl p-5 items-center"
                activeOpacity={0.8}
                onPress={() => {
                  // Handle navigation to tool's page
                  console.log(`${tool.name} clicked`);
                }}
              >
                <Icon
                  name={tool.icon}
                  size={40}
                  color="black"
                  style={{ marginBottom: 8 }}
                />
                <Text className="text-black font-bold text-center text-lg">
                  {tool.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Tools;

