// PrivacySecurityScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PrivacySecurityScreen = ({ navigation }) => {
  const handleMultiFactorAuthClick = () => {
    // Navigate to the Multi-factor Authentication screen
    navigation.navigate('MultiFactorAuthScreen');
  };

  const handleResetPasswordClick = () => {
    // Navigate to the Reset Password screen
    navigation.navigate('ResetPasswordScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleMultiFactorAuthClick}>
        <Text style={styles.buttonText}>Multi-factor Authentication</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleResetPasswordClick}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue', // Change the color as needed
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default PrivacySecurityScreen;
