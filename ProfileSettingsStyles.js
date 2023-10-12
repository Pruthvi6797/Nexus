import { StyleSheet } from 'react-native';

const ProfileSettingsStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
},
  profilePictureContainer: {
    alignItems: 'center',
    marginBottom: 5,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black', // Changed to black
    borderRadius: 5,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
  },
  confirmationText: {
    color: 'green',
    fontSize: 16,
    marginTop: 10,
  },
});

export default ProfileSettingsStyles;
