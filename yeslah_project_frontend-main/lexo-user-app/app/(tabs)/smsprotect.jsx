import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const SMSProtect = () => {
  const recentSMS = [
    { id: 1, sender: '+1234567890', message: 'Your account has been locked. Click here to unlock: http://bit.ly/2cXu8z', timestamp: '2023-05-15 14:30', safe: false },
    { id: 2, sender: 'MYBANK', message: 'Your OTP for transaction #1234 is 567890. Do not share this with anyone.', timestamp: '2023-05-15 13:45', safe: true },
    { id: 3, sender: 'MOM', message: 'Hi honey, can you pick up some milk on your way home?', timestamp: '2023-05-13 18:20', safe: true },
  ]

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView className="flex-1">
        <View className="p-5">
          <View className="mb-6">
            <Text className="text-white text-3xl font-bold">SMS-Protect</Text>
            <Text className="text-gray-400 mt-2">Scan your messages for threats</Text>
          </View>

          <View className="mb-6">
            <Text className="text-white text-xl font-bold mb-3">Your Recently Received SMS Messages</Text>
            {recentSMS.map((sms) => (
              <View key={sms.id} className={`bg-gray-800 rounded-lg p-4 mb-3 ${sms.safe ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'}`}>
                <View className="flex-row justify-between items-center mb-2">
                  <Text className="text-white font-bold">{sms.sender}</Text>
                  <Text className="text-gray-400 text-xs">{sms.timestamp}</Text>
                </View>
                <Text className="text-gray-300">{sms.message}</Text>
                <View className="flex-row items-center mt-2">
                  <Icon name={sms.safe ? 'shield-check' : 'shield-alert'} size={20} color={sms.safe ? '#4CAF50' : '#FF5252'} />
                  <Text className={`ml-2 ${sms.safe ? 'text-green-400' : 'text-red-400'}`}>
                    {sms.safe ? 'Safe' : 'Potential Threat'}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          <View className="bg-gray-800 rounded-lg p-4">
            <Text className="text-white text-xl font-bold mb-3">AI-Generated Threat Analysis</Text>
            <View className="mb-4">
              <Text className="text-white font-bold mb-2">Unsafe Message Detected: 1</Text>
              <Text className="text-gray-300">Our AI has analyzed the suspicious message from +1234567890. Here are the specific actions you should take:</Text>
            </View>
            <View className="space-y-3 flex flex-col gap-3 text-justify">
              <View className="flex-row items-start text-justify">
                <Icon name="link-off" size={24} color="#FF5252" />
                <Text className="text-gray-300 ml-2 flex-1 text-justify">Do not click on the provided link (http://bit.ly/2cXu8z). It appears to be a shortened URL, which is often used in phishing attempts to disguise malicious websites.</Text>
              </View>
              <View className="flex-row items-start">
                <Icon name="bank-off" size={24} color="#FF5252" />
                <Text className="text-gray-300 ml-2 flex-1 text-justify">The message claims your account is locked. This is a common phishing tactic. Do not provide any account information or credentials in response to this SMS.</Text>
              </View>
              <View className="flex-row items-start">
                <Icon name="phone-alert" size={24} color="#FF5252" />
                <Text className="text-gray-300 ml-2 flex-1 text-justify">The sender (+1234567890) is not recognized as an official number. Legitimate organizations typically use dedicated short codes or clearly identifiable sender names.</Text>
              </View>
              <View className="flex-row items-start">
                <Icon name="shield-account" size={24} color="#4CAF50" />
                <Text className="text-gray-300 ml-2 flex-1 text-justify">If you're concerned about your account status, contact your bank or service provider directly using their official website or phone number, not the one provided in the SMS.</Text>
              </View>
            </View>
            <Text className="text-white text-xl font-extrabold my-3">Further Actions: </Text>
            <TouchableOpacity className="bg-blue-500 rounded-lg p-3 items-center mt-4">
              <Text className="text-white font-bold">Report Message</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SMSProtect

