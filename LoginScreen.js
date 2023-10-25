import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { Header } from 'react-native-elements';// Github latest test
import LoginScreenStyles from './LoginScreenStyles'; // Import the styles

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if ((username === 'user' && password === 'password') || (username === 'JohnDoe' && password === 'Pa$$w0rd')) {
      navigation.navigate('Home');  // Navigate to HomeScreen on successful login
    } else {
      Alert.alert('Error', 'Invalid credentials!');
    }
  };

  return (
    <View style={LoginScreenStyles.container}>
      <Header
        centerComponent={{ text: 'Nexus', style: { color: '#000000', fontSize: 40 } }}
        containerStyle={{ 
          backgroundColor: 'transparent', 
          borderBottomWidth: 0
        }}
      />
      <View style={LoginScreenStyles.loginContainer}>
        <Text style={LoginScreenStyles.title}>Login</Text>
        <TextInput
          style={LoginScreenStyles.input}
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          style={LoginScreenStyles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default LoginScreen;
