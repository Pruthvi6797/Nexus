import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen'; 
import HomeScreen from './HomeScreen';    
import SettingsScreen from './SettingsScreen';
import ProfileSettingsScreen from './ProfileSettings'; 
import PrivacySecurityScreen from './PrivacySecurityScreen';
import HelpSupportScreen from './HelpSupportScreen';
import PrivacyPolicyScreen from './PrivacyPolicyScreen';
import MultiFactorAuthScreen from './MultiFactorAuthScreen';
import ResetPasswordScreen from './ResetPasswordScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#000000" />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black', // Set the header background color to black
          },
          headerTintColor: 'red', // Set the header text color to red
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home' }}
        />
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{ title: 'Settings' }}
        />
        <Stack.Screen 
          name="ProfileSettings" 
          component={ProfileSettingsScreen}
          options={{ title: 'Profile' }}
        />
        <Stack.Screen 
          name="PrivacySecurityScreen" 
          component={PrivacySecurityScreen} 
          options={{ title: 'Privacy & Security'}}
        />
        <Stack.Screen 
          name="HelpSupportScreen" 
          component={HelpSupportScreen}
          options={{ title: 'Help & Support'}} 
        />
        <Stack.Screen 
          name="PrivacyPolicyScreen" 
          component={PrivacyPolicyScreen} 
          options={{ title: 'Privacy Policy & Terms of Service'}}
        />
        <Stack.Screen 
          name="MultiFactorAuthScreen" 
          component={MultiFactorAuthScreen} 
          options={{ title: 'Multi-Factor Authentication'}}
        />
        <Stack.Screen 
          name="ResetPasswordScreen" 
          component={ResetPasswordScreen} 
          options={{ title: 'Reset Password'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
