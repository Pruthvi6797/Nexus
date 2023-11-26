import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const ResetPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // Implement your logic to send a password reset email here.
    // You can use the provided email address in the 'email' state.

    // For this example, we'll display a success message.
    Alert.alert('Success', 'Password reset email sent successfully.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="red" // Set the placeholder text color to red
        onChangeText={setEmail}
        value={email}
      />
      <Button title="Reset Password" onPress={handleResetPassword} />
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

export default ResetPasswordScreen;
