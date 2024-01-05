import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ProfileScreen = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('');
  const [birthday, setBirthday] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      {image && (
        <Image source={{ uri: image }} style={{ width: 100, height: 120, marginVertical: 10 }} />
      )}
      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        <Text style={styles.imagePickerText}>Pick an image</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Region"
        value={region}
        onChangeText={setRegion}
      />
      <TextInput
        style={styles.input}
        placeholder="Birthday"
        value={birthday}
        onChangeText={setBirthday}
      />
      <TouchableOpacity style={styles.saveButton} onPress={() => {}}>
        <Text style={{ color: '#fff' }}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
 
    marginTop:35  ,
    paddingLeft: 10,
    marginLeft:24
  },
  imagePicker: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginLeft:28,
    marginTop:10,
    width:310
  },
  imagePickerText: {
    color: '#fff',
    textAlign: 'center',
  },
  saveButton: {
    backgroundColor: '#27ae60',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginLeft:114,
    width:136,
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center'
  },
});

export default ProfileScreen;
