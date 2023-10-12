// PrivacyPolicyScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PrivacyPolicyScreen = () => {
  const termsOfService = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nullam nec augue sit amet odio lacinia dictum. 
    Cras bibendum euismod bibendum. 
    Vestibulum faucibus ligula id dui pellentesque mattis. 
    Morbi in efficitur nisl, non fringilla eros. 
    Curabitur id lectus id mi efficitur gravida. 
    Nullam vel sagittis leo. 
    Donec eget tortor vitae velit aliquam feugiat. 
    Sed eu ex ut nulla eleifend dictum. 
    Sed eu metus sit amet felis auctor fermentum. 
    Vivamus eu bibendum tellus. 
    Fusce tincidunt enim nec urna facilisis, id fringilla libero varius. 
    Quisque hendrerit velit sit amet justo convallis scelerisque. 
    Quisque cursus tellus et sapien efficitur egestas. 
    Aliquam et fringilla dolor. 
    Fusce laoreet tristique bibendum. 
    Integer non enim nec dolor laoreet venenatis. 
    Vivamus maximus, neque in iaculis porttitor, sapien elit rhoncus ante, 
    in rhoncus ipsum risus vel ex. 
    Praesent eu tristique dolor, nec vestibulum est. 
    Donec sed posuere tellus, id ullamcorper elit.
  `;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Terms of Service</Text>
      <Text>{termsOfService}</Text>
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
});

export default PrivacyPolicyScreen;
