
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 


const SettingsPage = ({navigation}) => {
  return (
    <ScrollView >
    <View style={styles.container}>
      <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.settingOption} onPress={()=>{navigation.navigate('Edit')}}>
          <View style={styles.settingOptionContainer}>
            <Icon name="user" size={25} color="purple" style={styles.icon} />
            <Text style={styles.settingText}>Edit Profile</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingOption}>
          <View style={styles.settingOptionContainer}>
            <Icon name="bell" size={19} color="purple" style={styles.icon} />
            <Text style={styles.settingText}>Notifications</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingOption}>
          <View style={styles.settingOptionContainer}>
            <Icon name="key" size={24} color="purple" style={styles.icon} />
            <Text style={styles.settingText}>Change Password</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingOption}>
          <View style={styles.settingOptionContainer}>
            <Icon name="lock" size={24} color="purple" style={styles.icon} />
            <Text style={styles.settingText}>Privacy & Security</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingOption}>
          <View style={styles.settingOptionContainer}>
            <Icon name="question-circle" size={25} color="purple" style={styles.icon} />
            <Text style={styles.settingText}>Help and Support</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingOption} 
           onPress={()=>{logout()}}>
          <View style={styles.settingOptionContainer}>
            <Icon name="info-circle" size={25} color="purple" style={styles.icon} />
            <Text style={styles.settingText}>Log Out</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingOption}>
          <View style={styles.settingOptionContainer}>
            <Icon name="phone" size={25} color="purple" style={styles.icon} />
            <Text style={styles.settingText}>Contact Us </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'lightblue'
  },
  header: {
    backgroundColor: 'white',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    marginLeft: 10,
  },
  settingsContainer: {
    padding: 20,
    
    borderStyle:'solid',
    borderColor:'black'
  },
  settingOption: {
    marginBottom: 15,
    right:10,
    borderStyle:'solid',
  },
  settingOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    marginTop:15,
    borderRadius: 39,
    width:'103%',
    borderWidth: 1.4,
    borderStyle:'solid',
    borderColor: 'black',
    height:65
   

  },
  settingText: {
    marginLeft: 15,
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
});

export default SettingsPage;
