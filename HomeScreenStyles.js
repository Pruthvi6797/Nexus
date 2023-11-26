import { StyleSheet } from 'react-native';

const HomeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#000000', // Screen background is black
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        color: '#FF0000', // Input text color set to red
        marginTop: 15, // Adjust this value to lower the input boxes
    },
    map: {
        height: 300,
        marginTop: 20,
    },
    modeSelector: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    modeText: {
        margin: 10,
        marginTop: -60,
        color: '#FF0000', // Mode text color set to red
    },
    smallModePicker: {
        flex: 1,
        height: 210,
        marginTop: -70,
    },
    estimatedCost: {
        color: '#FF0000', // Estimated cost text color set to red
        marginTop: -90, // Adjust this value as needed to raise the position
        marginLeft: 10,
    },
    estimatedDuration: {
        color: '#FF0000', // Estimated duration text color set to red
        marginTop: 10, // Adjust this value as needed to raise the position
        marginLeft: 10,
    },
});

export default HomeScreenStyles;
