import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import ProfileSettingsStyles from './ProfileSettingsStyles';

const ProfileSettingsScreen = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [paymentCardNumber, setPaymentCardNumber] = useState('');
  const [paymentCCV, setPaymentCCV] = useState('');
  const [paymentExpiration, setPaymentExpiration] = useState('');
  const [originalName, setOriginalName] = useState('John Doe');
  const [originalPhoneNumber, setOriginalPhoneNumber] = useState('123-456-7890');
  const [originalEmail, setOriginalEmail] = useState('johndoe@example.com');
  const [originalPaymentCardNumber, setOriginalPaymentCardNumber] = useState('**** **** **** 1234');
  const [originalPaymentCCV, setOriginalPaymentCCV] = useState('***');
  const [originalPaymentExpiration, setOriginalPaymentExpiration] = useState('MM/YY');
  const [confirmationText, setConfirmationText] = useState('');

  useEffect(() => {
    // Set the initial values for name, phoneNumber, email, and paymentInfo when the component mounts
    setName(originalName);
    setPhoneNumber(originalPhoneNumber);
    setEmail(originalEmail);
    setPaymentCardNumber(originalPaymentCardNumber);
    setPaymentCCV(originalPaymentCCV);
    setPaymentExpiration(originalPaymentExpiration);
  }, []);

  const handleSave = () => {
    // Implement the logic to save the updated data here.
    // For this example, we'll just update the original values.
    setOriginalName(name);
    setOriginalPhoneNumber(phoneNumber);
    setOriginalEmail(email);
    setOriginalPaymentCardNumber(paymentCardNumber);
    setOriginalPaymentCCV(paymentCCV);
    setOriginalPaymentExpiration(paymentExpiration);

    // Set confirmation text
    setConfirmationText('Saved successfully!');
  };

  return (
    <ScrollView contentContainerStyle={ProfileSettingsStyles.container}>
      <View style={ProfileSettingsStyles.profilePictureContainer}>
        <Image
          source={require('/Users/tahjmarshall/git/Nexus/assets/mochi.png')} 
          style={ProfileSettingsStyles.profilePicture}
          
        />
            <Text style={ProfileSettingsStyles.title}>John Doe</Text>

      </View>

      <Text style={ProfileSettingsStyles.sectionTitle}>Name</Text>
      <TextInput
        style={ProfileSettingsStyles.input}
        value={name}
        onChangeText={setName}
        placeholder="Full Name"
      />

      <Text style={ProfileSettingsStyles.sectionTitle}>Phone Number</Text>
      <TextInput
        style={ProfileSettingsStyles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Phone Number"
        keyboardType="phone-pad"
      />

      <Text style={ProfileSettingsStyles.sectionTitle}>Email</Text>
      <TextInput
        style={ProfileSettingsStyles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email Address"
        keyboardType="email-address"
      />

      <Text style={ProfileSettingsStyles.sectionTitle}>Payment Information</Text>
      <TextInput
        style={ProfileSettingsStyles.input}
        value={paymentCardNumber}
        onChangeText={setPaymentCardNumber}
        placeholder="Card Number"
      />
      <TextInput
        style={ProfileSettingsStyles.input}
        value={paymentCCV}
        onChangeText={setPaymentCCV}
        placeholder="CCV"
      />
      <TextInput
        style={ProfileSettingsStyles.input}
        value={paymentExpiration}
        onChangeText={setPaymentExpiration}
        placeholder="Expiration (MM/YY)"
      />

      {confirmationText !== '' && (
        <Text style={ProfileSettingsStyles.confirmationText}>
          {confirmationText}
        </Text>
      )}

      <TouchableOpacity style={ProfileSettingsStyles.saveButton} onPress={handleSave}>
        <Text style={ProfileSettingsStyles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileSettingsScreen;
