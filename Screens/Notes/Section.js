import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
const ClassesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Pdf')} >
            
            <Text style={styles.buttonText}>1st year </Text>
          </TouchableOpacity>
      </View>
      <View style={styles.grid}>
          <TouchableOpacity style={styles.button2}>
            
            <Text style={styles.buttonText}>2nd year </Text>
          </TouchableOpacity>
      </View>
      <View style={styles.grid}>
          <TouchableOpacity style={styles.button3}>
            
            <Text style={styles.buttonText}>3rd year </Text>
          </TouchableOpacity>
      </View>
      <View style={styles.grid}>
          <TouchableOpacity style={styles.button4}>
            
            <Text style={styles.buttonText}>4th year </Text>
          </TouchableOpacity>
      </View>
    </View>
  );}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#800080',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    width: '50%',
    height:100,
    backgroundColor: 'red',
    padding: 10,
    margin: 5,
    textAlign:'center',
    justifyContent:'center',
    alignItems: 'center',
    borderWidth:2,
    elevation:1,
    
  },
  button2: {
    width: '50%',
    height:100,
    backgroundColor: 'lightpink',
    padding: 10,
    margin: 5,
    textAlign:'center',
    justifyContent:'center',
    alignItems: 'center',
    borderWidth:2,
    elevation:1,
    
  },  button3: {
    width: '50%',
    height:100,
    backgroundColor: 'orange',
    padding: 10,
    margin: 5,
    textAlign:'center',
    justifyContent:'center',
    alignItems: 'center',
    borderWidth:2,
    elevation:1,
    
  },  button4: {
    width: '50%',
    height:100,
    backgroundColor: '#ADD8E6',
    padding: 10,
    margin: 5,
    textAlign:'center',
    justifyContent:'center',
    alignItems: 'center',
    borderWidth:2,
    elevation:1,
    
  },
  

  buttonText: {
    fontSize: 16,
    color: '#000',
    fontStyle:'italic',
    fontWeight:'bold'
  },
  footer: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
  },
});

export default ClassesScreen;
