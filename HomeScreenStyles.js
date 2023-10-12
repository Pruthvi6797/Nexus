import { StyleSheet } from 'react-native';

const HomeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
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
    },
    map: {
        height: 300,
        marginTop: 40,
    },
    modeSelector: {
        flexDirection: 'row', // Arrange items horizontally
        alignItems: 'center', // Align items vertically in the center
        marginBottom: -50,
    },
    modeText: {
        margin: 10,
    },
    smallModePicker: {
        height: 150,
        width: 106, // Adjust the width as needed
        marginTop: -75,
    },
    timeEstimate: {
        color: 'black', 
        textAlign: 'right',
    },
});

export default HomeScreenStyles;
