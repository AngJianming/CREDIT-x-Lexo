import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Learn = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const[pressed,setPressed] = useState(false);

  const newsItems = [
    { id: 1, title: "New Phishing Scam Targets Malaysian Banks", image: "https://plus.unsplash.com/premium_photo-1680363254554-d1c63ad8d33d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFua3xlbnwwfHwwfHx8MA%3D%3D" },
    { id: 2, title: "Government Launches Cybersecurity Awareness Campaign", image: "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 3, title: "Major Data Breach Affects Millions in Southeast Asia", image: "https://plus.unsplash.com/premium_photo-1661764393655-1dbffee8c0ce?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D" },
  ];

  const courses = [
    { id: 1, title: "Introduction to Cybersecurity", category: "Beginner" },
    { id: 2, title: "Advanced Phishing Prevention", category: "Intermediate" },
    { id: 3, title: "Secure Coding Practices", category: "Advanced" },
    { id: 4, title: "Social Engineering Defense", category: "Intermediate" },
  ];

  const press = ()=>{
      setPressed(!pressed);
  }
  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView className="flex-1">
        <View className="p-5">
          {/* Header */}
          <View className="mb-6">
            <Text className="text-white text-3xl font-bold">Educate</Text>
            <Text className="text-gray-400 mt-2">Stay Updated and Learn the Best Cybersecurity Practices</Text>
          </View>

          {/* Recent Vishing Call Context */}
          <View className="bg-gray-800 rounded-xl p-4 mb-6">
            <Text className="text-white text-xl font-bold mb-2">Learn from Your Past Experiences</Text>
            <View className="bg-red-900 rounded-lg p-3 mb-3">
              <Text className="text-white font-bold">Recent Vishing Attempt Detected</Text>
              <Text className="text-gray-300 mt-1">Unknown caller tried to obtain your financial information</Text>
            </View>
            <TouchableOpacity className="bg-blue-500 rounded-lg p-3 items-center"
            onPress={press}
            >
              <Text className="text-white font-bold text-center">Learn How to Protect Yourself with our Securelah AI Advisor</Text>
            </TouchableOpacity>
            {pressed && ( // Render the response only if `pressed` is true
              <View className="bg-white rounded-lg shadow-md p-4 mt-3">
                <Text className="text-black font-bold">Tips to Protect Yourself:</Text>
                <Text className="text-gray-700 mt-2">1. Never share your financial information over the phone.</Text>
                <Text className="text-gray-700 mt-1">2. Verify the caller's identity by contacting the bank directly.</Text>
                <Text className="text-gray-700 mt-1">3. Report suspicious calls to the authorities.</Text>
              </View>
            )}
          </View>

          {/* Recent Cybersecurity News */}
          <View className="mb-6">
            <Text className="text-white text-xl font-bold mb-3">Recent Cybersecurity News in Malaysia</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {newsItems.map((item) => (
                <TouchableOpacity key={item.id} className="mr-4 w-64">
                  <Image source={{ uri: item.image }} className="w-full h-36 rounded-lg mb-2" />
                  <Text className="text-white font-semibold">{item.title}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Courses Section */}
          <View>
            <Text className="text-white text-xl font-bold mb-3">Cybersecurity Courses Personalized For You</Text>
            
            {/* Search and Categories */}
            <View className="mb-4">
              <View className="flex-row items-center bg-gray-800 rounded-lg p-2 mb-2">
                <Icon name="magnify" size={24} color="white" />
                <TextInput
                  className="flex-1 text-white ml-2"
                  placeholder="Search courses..."
                  placeholderTextColor="#A0AEC0"
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                />
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-2">
                {["All", "Beginner", "Intermediate", "Advanced"].map((category) => (
                  <TouchableOpacity key={category} className="bg-gray-700 rounded-full px-4 py-2 mr-2">
                    <Text className="text-white">{category}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            {/* Course List */}
            {courses.map((course) => (
              <TouchableOpacity key={course.id} className="bg-gray-800 rounded-lg p-4 mb-3">
                <Text className="text-white font-bold">{course.title}</Text>
                <Text className="text-gray-400 mt-1">{course.category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Learn;

