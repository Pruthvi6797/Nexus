import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Image } from 'react-native';
import { Header } from 'react-native-elements';
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
        centerComponent={{ text: 'Nexus', style: { color: '#FF0000', fontSize: 40 } }}
        containerStyle={{ 
          backgroundColor: 'transparent', 
          borderBottomWidth: 0
        }}
      />
      <Image
        source={require('C:/Users/marsh/git/Nexus/assets/newUC_CECHFull-01.png')} // Update the path to your image
        style={{ width: '100%', height: 200, marginLeft: 10 }} // Adjust the size as needed
        resizeMode="contain" // or 'cover', 'stretch', etc.
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
