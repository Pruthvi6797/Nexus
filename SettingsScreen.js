import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, Image } from 'react-native';
import SettingsScreenStyles from './SettingsScreenStyles';

const SettingsScreen = ({ navigation }) => {
    const [notificationEnabled, setNotificationEnabled] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    const profileImage = require('C:/Users/marsh/git/Nexus/assets/oldbearcat.png');

    const handleProfileClick = () => {
        // Navigate to the ProfileSettings screen when the profile picture is clicked
        navigation.navigate('ProfileSettings');
    };

    const handlePrivacySecurityClick = () => {
        // Navigate to the PrivacySecurityScreen
        navigation.navigate('PrivacySecurityScreen');
    };

    const handleHelpSupportClick = () => {
        // Navigate to the HelpSupportScreen
        navigation.navigate('HelpSupportScreen');S
    };

    const handlePrivacyPolicyClick = () => {
        // Navigate to the PrivacyPolicyScreen
        navigation.navigate('PrivacyPolicyScreen');
    };

    return (
        <View style={[SettingsScreenStyles.container, darkMode && SettingsScreenStyles.darkModeContainer]}>
            <TouchableOpacity onPress={handleProfileClick}>
                <Image source={profileImage} style={SettingsScreenStyles.profileImage} />
            </TouchableOpacity>

            <Text style={[SettingsScreenStyles.title, darkMode && SettingsScreenStyles.darkModeTitle]}>John Doe</Text>

            <View style={SettingsScreenStyles.settingRow}>
                <Text style={[darkMode && SettingsScreenStyles.darkModeText]}>Enable Notifications</Text>
                <Switch 
                    value={notificationEnabled} 
                    onValueChange={setNotificationEnabled} 
                />
            </View>

            <View style={SettingsScreenStyles.settingRow}>
                <Text style={[darkMode && SettingsScreenStyles.darkModeText]}>Dark Mode</Text>
                <Switch 
                    value={darkMode} 
                    onValueChange={setDarkMode} 
                />
            </View>

            {/* Navigation buttons */}
            <View style={SettingsScreenStyles.navigationButtonsContainer}>
                <TouchableOpacity style={SettingsScreenStyles.navigationButton} onPress={handlePrivacySecurityClick}>
                    <Text style={[SettingsScreenStyles.navigationButtonText, darkMode && SettingsScreenStyles.darkModeText]}>Privacy & Security</Text>
                </TouchableOpacity>

                <TouchableOpacity style={SettingsScreenStyles.navigationButton} onPress={handleHelpSupportClick}>
                    <Text style={[SettingsScreenStyles.navigationButtonText, darkMode && SettingsScreenStyles.darkModeText]}>Help & Support</Text>
                </TouchableOpacity>

                <TouchableOpacity style={SettingsScreenStyles.navigationButton} onPress={handlePrivacyPolicyClick}>
                    <Text style={[SettingsScreenStyles.navigationButtonText, darkMode && SettingsScreenStyles.darkModeText]}>Privacy Policy & Terms of Service</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SettingsScreen;
