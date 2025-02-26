import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { icons } from '@/constants'

const TabIcon = ({icon, color, name, focused}: any)=>{
    return(
        <View className='items-center justify-center gap-2'>
            <Image
                source = {icon}
                resizeMode = "contain"
                tintColor={color}
                className='w-6 h-6'
            />
        </View>
    )
}
{/*Tools Learn phone sms profile*/}
const TabsLayout = () => {
  return (
   <Tabs
   screenOptions={{
    tabBarShowLabel : false, 
    tabBarActiveTintColor: "#FFA001",
    tabBarInactiveTintColor: "#CDCDE0",
    tabBarStyle:{
        backgroundColor: "#161622",
        borderTopWidth: 1,
        borderTopColor: "#232533",
        height: 50,
    }
   }}
   >
    <Tabs.Screen
    name = "tools"
    options={{
        title: 'Tools',
        headerShown: false, 
        tabBarIcon:({color, focused}) =>(
            <TabIcon 
                    icon = {icons.tools}
                    color = {color}               
                    focused = {focused}
                    
                    />
        )
    }}
    />

<Tabs.Screen
    name = "antivish"
    options={{
        title: 'antivish',
        headerShown: false, 
        tabBarIcon:({color, focused}) =>(
            <TabIcon 
                    icon = {icons.phonecall}
                    color = {color}               
                    name = "Home"
                    focused = {focused}
                    
                    />
        )
    }}
    />

<Tabs.Screen
    name = "home"
    options={{
        title: 'Home',
        headerShown: false, 
        tabBarIcon:({color, focused}) =>(
            <TabIcon 
                    icon = {icons.home}
                    color = {color}               
                   // name = "Home"
                    focused = {focused}
                    
                    />
        )
    }}
    />

<Tabs.Screen
    name = "smsprotect"
    options={{
        title: 'SMS Protect',
        headerShown: false, 
        tabBarIcon:({color, focused}) =>(
            <TabIcon 
                    icon = {icons.sms}
                    color = {color}               
                    //name = "Home"
                    focused = {focused}
                    
                    />
        )
    }}
    />

<Tabs.Screen
    name = "learn"
    options={{
        title: 'Learn',
        headerShown: false, 
        tabBarIcon:({color, focused}) =>(
            <TabIcon 
                    icon = {icons.teaching}
                    color = {color}               
                    //name = "Home"
                    focused = {focused}
                    
                    />
        )
    }}
    />

   </Tabs>
  )
}

export default TabsLayout