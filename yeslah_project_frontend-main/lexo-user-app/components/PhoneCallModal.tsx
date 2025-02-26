import React, { useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withRepeat, withSequence } from 'react-native-reanimated';

interface IncomingCallModalProps {
  visible: boolean;
  phoneNumber: string;
  onAccept: () => void;
  onDecline: () => void;
}

const { width } = Dimensions.get('window');

const IncomingCallModal: React.FC<IncomingCallModalProps> = ({ visible, phoneNumber, onAccept, onDecline }) => {
  const translateY = useSharedValue(200);
  const scale = useSharedValue(1);

  useEffect(() => {
    if (visible) {
      translateY.value = withSpring(0);
      scale.value = withRepeat(
        withSequence(
          withSpring(1.1),
          withSpring(1)
        ),
        -1,
        true
      );
    } else {
      translateY.value = withSpring(200);
    }
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: translateY.value },
        { scale: scale.value }
      ],
    };
  });

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
    >
      <View style={styles.modalOverlay}>
        <Animated.View style={[styles.modalContent, animatedStyle]}>
          <View style={styles.callInfo}>
            <Icon name="phone-incoming" size={40} color="#4CAF50" />
            <Text style={styles.callText}>Incoming Call</Text>
            <Text style={styles.phoneNumber}>{phoneNumber}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.declineButton]} onPress={onDecline}>
              <Icon name="phone-hangup" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.acceptButton]} onPress={onAccept}>
              <Icon name="phone" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#2C3E50',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: width - 40,
  },
  callInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  callText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  phoneNumber: {
    color: '#ecf0f1',
    fontSize: 18,
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    borderRadius: 50,
    padding: 15,
    elevation: 2,
  },
  declineButton: {
    backgroundColor: '#e74c3c',
  },
  acceptButton: {
    backgroundColor: '#2ecc71',
  },
});

export default IncomingCallModal;
