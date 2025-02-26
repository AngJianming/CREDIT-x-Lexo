import React, { useState, useCallback, useRef, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, StyleSheet, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { PermissionsAndroid } from 'react-native';
import CallDetectorManager from 'react-native-call-detection';
import IncomingCallModal from '../../components/PhoneCallModal';

const AntiVish = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [featureOn, setFeatureOn] = useState(false);
  const [incoming, setIncoming] = useState(false);
  const [number, setNumber] = useState(null);
  const [showIncomingCallModal, setShowIncomingCallModal] = useState(false);
  const [showAlert1, setShowAlert1] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const [showAlert3, setShowAlert3] = useState(false);
  const [showAlert4, setShowAlert4] = useState(false);
  const [showAlert5, setShowAlert5] = useState(false);

  const callDetectorRef = useRef(null);

  useEffect(() => {
    askPermission();
  }, []);

  const askPermission = async () => {
    try {
      const permissions = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
        PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
      ]);
      console.log('Permissions are:', permissions);
    } catch (err) {
      console.warn(err);
    }
  };

  const toggleFeature = () => {
    if (featureOn) {
      stopListenerTapped();
    } else {
      startListenerTapped();
    }
  };

  const startListenerTapped = () => {
    setFeatureOn(true);
    
    callDetectorRef.current = new CallDetectorManager(
      (event, phoneNumber) => {
        console.log(event, phoneNumber);
        
        switch(event) {
          case 'Disconnected':
            setIncoming(false);
            setNumber(null);
            resetAlerts();
            break;
          case 'Incoming':
            handleIncomingCall(phoneNumber);
            break;
          case 'Offhook':
            handleIncomingCall(phoneNumber);
            break;
          case 'Missed':
            setIncoming(false);
            setNumber(null);
            resetAlerts();
            break;
        }
      },
      true,
      () => {},
      {
        title: 'Phone State Permission',
        message: 'This app needs access to your phone state to detect incoming calls.',
      }
    );

    // Simulate a call when turning the feature on
    simulateCall();
  };

  const stopListenerTapped = () => {
    if (callDetectorRef.current) {
      callDetectorRef.current.dispose();
    }
    setFeatureOn(false);
    setIncoming(false);
    setNumber(null);
    resetAlerts();
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const simulateCall = useCallback(() => {
    const randomNumber = '+60' + Math.floor(Math.random() * 9000000000 + 1000000000);
    handleIncomingCall(randomNumber);
    
    resetAlerts();
    setShowAlert1(true);
    setTimeout(() => setShowAlert2(true), 3000);
    setTimeout(() => setShowAlert3(true), 6000);
    setTimeout(() => setShowAlert4(true), 9000);
    setTimeout(() => setShowAlert5(true), 12000);
  }, [handleIncomingCall, resetAlerts]);

  const handleIncomingCall = useCallback((phoneNumber) => {
    setIncoming(true);
    setNumber(phoneNumber);
    setShowIncomingCallModal(true);
  }, []);

  const resetAlerts = () => {
    setShowAlert1(false);
    setShowAlert2(false);
    setShowAlert3(false);
    setShowAlert4(false);
    setShowAlert5(false);
  };

  return (
    <SafeAreaView className="bg-black flex-1">
      <ScrollView className="p-5">
        {/* Header */}
        <View className="flex flex-row justify-between items-center mb-6">
          <View>
            <Text className="text-white text-2xl font-bold">Vishing Protect</Text>
            <Text className="text-gray-400 mt-1">Best Protection Against Any Vishing Attacks</Text>
          </View>
          <TouchableOpacity className="bg-blue-500 p-2 rounded-full" onPress={toggleModal}>
            <Icon name="cog" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View className="bg-gray-600 rounded-md shadow-md flex items-center justify-center p-5">
          <Text style={{color: 'white', fontSize: 26, fontWeight: '700', marginBottom: 10}}>
            Call Detection
          </Text>
          <TouchableHighlight
            className="p-2 bg-secondary w-[100px] h-[35px] rounded-xl"
            onPress={toggleFeature}>
            <Text className="text-lg text-center font-white font-extrabold">{featureOn ? `ON` : `OFF`}</Text>
          </TouchableHighlight>
          {incoming && (
            <Text style={{fontSize: 20, color: 'red', marginTop: 10}}>
              Incoming Call: {number}
            </Text>
          )}
        </View>
      
        {/* Protection Status */}
        <View className="bg-gray-800 p-4 rounded-xl mb-6 mt-6">
          <View className="flex-row items-center">
            <Icon name="shield-check" size={24} color="#4CAF50" />
            <Text className="text-white font-bold ml-2">Auto Vishing-Protect Enabled</Text>
          </View>
          <Text className="text-gray-400 mt-2">Your calls are being monitored for potential vishing attempts.</Text>
        </View>

        {/* Real Time Alert */}
        <View className="mb-6">
          <Text className="text-white text-xl font-bold mb-3">Real Time Alert</Text>
          <View className="flex flex-col space-y-3 gap-3">
            {showAlert1 && (
              <View className="bg-red-900 p-4 rounded-xl">
                <Text className="text-white font-bold">Alert 1 - Low Risk</Text>
                <Text className="text-gray-300 text-xs">TimeStamp: {new Date().toLocaleString()}</Text>
                <Text className="text-white mt-2">Unknown phone number detected. Deepfake and Sentiment Analysis Model is running to detect potential frauds.</Text>
              </View>
            )}
            {showAlert2 && (
              <View className="bg-red-700 p-4 rounded-xl">
                <Text className="text-white font-bold">Alert 2 - High Risk</Text>
                <Text className="text-gray-300 text-xs">TimeStamp: {new Date().toLocaleString()}</Text>
                <Text className="text-white mt-2">Caller seems to be using a deepfake voice to attempt to trick you. Please be aware.</Text>
              </View>
            )}
            {showAlert3 && (
              <View className="bg-yellow-900 p-4 rounded-xl">
                <Text className="text-white font-bold">Alert 3 - Medium Risk</Text>
                <Text className="text-gray-300 text-xs">TimeStamp: {new Date().toLocaleString()}</Text>
                <Text className="text-white mt-2">Potential attempt to phish your credit card information detected. Caller seems to be very urgent in getting your info.</Text>
              </View>
            )}
            {showAlert4 && (
              <View className="bg-secondary-200 p-4 rounded-xl">
                <Text className="text-white font-bold">Alert 4 - High Risk </Text>
                <Text className="text-gray-300 text-xs">TimeStamp: {new Date().toLocaleString()}</Text>
                <Text className="text-white mt-2">Please remain calm as user is detected to be experiencing certain levels of panic. Always be reminded that banks will not be threatening you with immediate search warrant if you did not pay your tax.</Text>
              </View>
            )}
            {showAlert5 && (
              <View className="bg-blue-900 p-4 rounded-xl">
                <Text className="text-white font-bold">Alert 5 - Information</Text>
                <Text className="text-gray-300 text-xs">TimeStamp: {new Date().toLocaleString()}</Text>
                <Text className="text-white mt-2">Reminder: Do not share any credit card info with unknown contacts.</Text>
              </View>
            )}
          </View>
        </View>

        {/* Previous Call Logs */}
        <View>
          <Text className="text-white text-xl font-bold mb-3">Previous Call Logs</Text>
          <View className="flex flex-col gap-3">
            {[
              { id: 1, number: '+1 (555) 123-4567', date: '2023-05-15 14:30', duration: '5:23', safe: true },
              { id: 2, number: '+1 (555) 987-6543', date: '2023-05-14 10:15', duration: '2:47', safe: false },
              { id: 3, number: '+1 (555) 246-8135', date: '2023-05-13 16:45', duration: '8:12', safe: true },
            ].map((call) => (
              <View key={call.id} className={`p-4 rounded-xl ${call.safe ? 'bg-green-900' : 'bg-red-900'}`}>
                <View className="flex-row justify-between items-center">
                  <Text className="text-white font-bold">{call.number}</Text>
                  <View className="flex-row items-center">
                    <Icon name={call.safe ? 'shield-check' : 'shield-alert'} size={20} color={call.safe ? '#4CAF50' : '#FF5252'} />
                    <Text className={`ml-1 ${call.safe ? 'text-green-400' : 'text-red-400'}`}>
                      {call.safe ? 'Safe' : 'Unsafe'}
                    </Text>
                  </View>
                </View>
                <Text className="text-gray-300 text-xs mt-1">Date: {call.date}</Text>
                <Text className="text-gray-300 text-xs">Duration: {call.duration}</Text>
                <Text className="text-white mt-2">
                  {call.safe
                    ? 'No vishing attempt detected during this call.'
                    : 'Potential vishing attempt detected. Call details have been logged for review.'}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Modal for Vishing Protection Instructions */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="bg-gray-800 p-6 rounded-xl w-11/12 max-w-md">
            <Text className="text-white text-2xl font-bold mb-4">How Vishing Protection Works</Text>
            <ScrollView className="max-h-96">
              <View className="space-y-4 flex flex-col gap-4">
                <View className="flex-row items-start">
                  <Icon name="numeric-1-circle" size={24} color="#4CAF50" />
                  <Text className="text-white ml-2 flex-1">When a call is detected, the system runs a cross-check with existing contacts. If the number is unknown, it will be flagged for further analysis.</Text>
                </View>
                <View className="flex-row items-start">
                  <Icon name="numeric-2-circle" size={24} color="#4CAF50" />
                  <Text className="text-white ml-2 flex-1">For business purposes, the system will start audio recording and transcribe the call to text for analysis.</Text>
                </View>
                <View className="flex-row items-start">
                  <Icon name="numeric-3-circle" size={24} color="#4CAF50" />
                  <Text className="text-white ml-2 flex-1">The caller's voice will be analyzed using AI models for deepfake detection and sentiment analysis. This helps detect if the caller is using urgency tactics, which is common in vishing attempts.</Text>
                </View>
                <View className="flex-row items-start">
                  <Icon name="numeric-4-circle" size={24} color="#4CAF50" />
                  <Text className="text-white ml-2 flex-1">You will receive real-time alerts if a potential vishing attempt is detected during the call.</Text>
                </View>
              </View>
            </ScrollView>
            <TouchableOpacity
              className="bg-blue-500 p-3 rounded-xl mt-4"
              onPress={toggleModal}
            >
              <Text className="text-white text-center font-bold">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <IncomingCallModal
        visible={showIncomingCallModal}
        phoneNumber={number}
        onAccept={() => {
          setShowIncomingCallModal(false);
          // Handle call acceptance logic here
        }}
        onDecline={() => {
          setShowIncomingCallModal(false);
          setIncoming(false);
          setNumber(null);
          resetAlerts();
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    padding: 20,
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  button: {},
});

export default AntiVish;

