import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ImageBackground } from 'react-native';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const handleResetPassword = () => {
    Alert.alert('Password Reset', 'Password reset instructions sent to your email.');
  };

  return (
    <View style={styles.container}>
        <ImageBackground   resizeMode="cover" style={styles.image}> 
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
     
      <Button title="Reset Password"color={'lightblue'}  onPress={handleResetPassword} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'lightpink',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight:'bold',
    color:'black',
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 50,
    borderColor: 'gray',
    borderWidth: 2,
    padding: 8,
    marginBottom: 20,
  },
 
});

export default ForgotPasswordScreen;