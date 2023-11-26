import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const MultiFactorAuthScreen = ({ navigation }) => {
  const [code, setCode] = useState('');

  const handleVerifyCode = () => {
    // Implement your logic to verify the multi-factor authentication code here.
    if (code === '123456') {
      Alert.alert('Success', 'Multi-factor authentication verified!');
    } else {
      Alert.alert('Error', 'Invalid code. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Code:</Text>
      <TextInput
        style={styles.input}
        placeholder="Verification Code"
        placeholderTextColor="red" // Set the placeholder text color to red
        onChangeText={setCode}
        value={code}
      />
      <Button title="Verify Code" onPress={handleVerifyCode} />
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
  input: {
    height: 40,
    borderColor: 'red', // Set the border color to red
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    color: 'red', // Set the text color of the input to red
  },
});

export default MultiFactorAuthScreen;
