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
    backgroundColor: 'black', // Set the background color to black
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'red', // Set the text color to red
  },
  button: {
    backgroundColor: 'black', // Set the button background color to black
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    borderColor: 'red', // Set the border color to red
    borderWidth: 1, // Add border to the button
  },
  buttonText: {
    color: 'red', // Set the button text color to red
    fontSize: 18,
  },
});

export default PrivacySecurityScreen;
