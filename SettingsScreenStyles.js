import { StyleSheet } from 'react-native';

const SettingsScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: 'white', // Default background color
    },
    darkModeContainer: {
        backgroundColor: 'black', // Background color in dark mode
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: 'black', // Default text color
    },
    darkModeTitle: {
        color: 'white', // Text color in dark mode
    },
    settingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    profileSettingsButton: {
        fontSize: 18,
        textDecorationLine: 'underline',
        marginTop: 20,
    },
    // Add styles for navigation buttons
    navigationButtonsContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20, // Added margin for spacing
    },
    navigationButton: {
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    navigationButtonText: {
        fontSize: 18,
        color: 'black', // Default text color
    },
    darkModeText: {
        color: 'white', // Text color in dark mode
    },
});

export default SettingsScreenStyles;
