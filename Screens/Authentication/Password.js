import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const PasswordResetScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = ({}) => {
   
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Reset Password</Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Reset Password" onPress={handleResetPassword} />
      <Text onPress={() => navigation.navigate('Login')}>Back to Login</Text>
    </View>
  );
};

export default PasswordResetScreen;