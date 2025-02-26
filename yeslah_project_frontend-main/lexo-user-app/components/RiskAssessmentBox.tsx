import { View, Text } from 'react-native'
import React from 'react'
import Svg, {Circle, Text as SvgText}from 'react-native-svg'
import { Link } from 'expo-router';

const RiskAssessmentBox = () => {
const riskLevel = 'Low'; // This could be dynamic based on actual risk assessment
const riskColor = '#4CAF50'; // Green for low risk
  return (
    <View className='bg-white rounded-sm py-6 px-8 my-3  shadow-md flex justify-center items-center'>
      <Text className='text-[18px] font-extrabold text-black mb-8 text-center'>Risk Assessment Overview</Text>

      <View className='flex flex-col items-center justify-center my-3'>
      <Svg height="120" width="120" viewBox="0 0 120 120">
          <Circle
            cx="60"
            cy="60"
            r="50"
            stroke="#333333"
            strokeWidth="10"
            fill="none"
          />
          <Circle
            cx="60"
            cy="60"
            r="50"
            stroke={riskColor}
            strokeWidth="10"
            fill="none"
            strokeDasharray="314"
            strokeDashoffset="78"
          />
          <SvgText
            x="60"
            y="65"
            fontSize="18"
            fontWeight="bold"
            fill={riskColor}
            textAnchor="middle"
          >
            {riskLevel}
          </SvgText>
        </Svg>
        <View className='ml-10 flex-col mt-3'>
          <Text className=' text-center font-bold text-lg'>Vishing Attempts Detected: <Text className='font-semibold'> 3</Text></Text>
          <Text className='text-center font-bold text-lg'>Personal Risk Score: <Text className='font-semibold'> 4/10</Text></Text>
          <Text className='text-base text-center text-gray-600 mt-4'>Learn more about identifying vishing <Link href="/" className='text-blue underline'>here</Link></Text>
        </View>
        
      </View>
    </View>
  )
}

export default RiskAssessmentBox;