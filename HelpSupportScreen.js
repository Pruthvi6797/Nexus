// HelpSupportScreen.js
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

      <Text>
        For any assistance or questions, please feel free to contact us:
      </Text>

      <Text style={styles.supportInfo}>
        Email: {supportEmail}
      </Text>
      
      <Text style={styles.supportInfo}>
        Phone: {supportPhoneNumber}
      </Text>

      <Text>
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
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  supportInfo: {
    fontSize: 16,
    marginBottom: 10,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 16,
    marginTop: 10,
  },
});

export default HelpSupportScreen;
