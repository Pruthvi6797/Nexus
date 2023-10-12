import { StyleSheet } from 'react-native';

const LoginScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  loginContainer: {
    flex: 1,
    marginTop: 100,  // Adjust this value to move the entire login section (including the title) down
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default LoginScreenStyles;
