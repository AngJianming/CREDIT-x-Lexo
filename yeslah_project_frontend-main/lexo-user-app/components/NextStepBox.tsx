import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

const NextStepsBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Next Steps to Stay Secure</Text>
     
      <View style={styles.stepContainer}>
        <Text style={styles.stepText}>1. Update Password Strength</Text>
        <Svg height="20" width="100">
          <Rect x="0" y="0" width="60" height="20" fill="#FFA500" />
          <Rect x="60" y="0" width="40" height="20" fill="#333333" />
        </Svg>
      </View>
      <View style={styles.stepContainer}>
        <Text style={styles.stepText}>2. Enable Two-Factor Authentication</Text>
        <Svg height="20" width="100">
          <Rect x="0" y="0" width="30" height="20" fill="#4CAF50" />
          <Rect x="30" y="0" width="70" height="20" fill="#333333" />
        </Svg>
      </View>
      <View style={styles.stepContainer}>
        <Text style={styles.stepText}>3. Review Recent Activities</Text>
        <Svg height="20" width="100">
          <Rect x="0" y="0" width="80" height="20" fill="#2196F3" />
          <Rect x="80" y="0" width="20" height="20" fill="#333333" />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  stepContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  stepText: {
    fontSize: 14,
    color: '#CCCCCC',
    flex: 1,
    marginRight: 10,
  },
});

export default NextStepsBox;

