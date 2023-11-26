import { StyleSheet } from 'react-native';

const LoginScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'black',  // The background color is black
  },
  loginContainer: {
    flex: 1,
    marginTop: 50,  // Reduced top margin to raise the login section
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    color: 'white',  // Text color set to white for contrast
  },
  input: {
    height: 40,
    borderColor: 'red',  // Changed the border color to red
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    color: 'white',  // Input text color set to white for contrast
  },
});

export default LoginScreenStyles;
