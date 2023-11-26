import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

const HelpSupportScreen = () => {
  const supportEmail = 'support@example.com';
  const supportPhoneNumber = '+1234567890';

  const sendEmail = () => {
    Linking.openURL(`mailto:${supportEmail}`);
  };

  const callSupport = () => {
    Linking.openURL(`tel:${supportPhoneNumber}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        For any assistance or questions, please feel free to contact us:
      </Text>

      <Text style={styles.supportInfo}>
        Email: {supportEmail}
      </Text>
      
      <Text style={styles.supportInfo}>
        Phone: {supportPhoneNumber}
      </Text>

      <Text style={styles.text}>
        You can send us an email or call us for immediate assistance.
      </Text>

      <Text style={styles.link} onPress={sendEmail}>
        Send Email
      </Text>

      <Text style={styles.link} onPress={callSupport}>
        Call Support
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black', // Set the background color to black
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: 'red', // Set the text color to red
  },
  supportInfo: {
    fontSize: 16,
    marginBottom: 10,
    color: 'red', // Set the text color to red
  },
  link: {
    color: 'red', // Set the link text color to red
    textDecorationLine: 'underline',
    fontSize: 16,
    marginTop: 10,
  },
});

export default HelpSupportScreen;
