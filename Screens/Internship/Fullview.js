import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Sc from '../Sc';
const JobDetails = () => {
  return (
    
    <Sc>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Web Development Internship Details</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>Loans4you</Text>
        
        <View style={{flexDirection:'row'}}> 
         <Text style={styles.boldText}>Location:</Text>
        <Text style={styles.subtitle}>Work from home</Text>
        </View>
        <View style={{flexDirection:'row'}}> 
        <Text style={styles.boldText}>Duration:</Text>
        <Text style={styles.subtitle}>1 Month</Text>
        </View>
        <View style={{flexDirection:'row'}}> 
        <Text style={styles.boldText}>Stipend:</Text>
       
        <Text style={styles.subtitle}>₹1,000/month</Text>
        </View>
        <View style={{flexDirection:'row'}}> 
        <Text style={styles.boldText}>Experience Required:</Text>
        <Text style={styles.subtitle}>Beginner/Intermediate</Text>
        </View>
        
        <View style={{flexDirection:'row'}}> 
        <Text style={styles.boldText}>Posted:</Text>
        <Text style={styles.subtitle}>3 weeks ago</Text>
        </View>
        
        
      </View>
      <View style={styles.about}>
        <Text style={styles.title}>About Loans4you</Text>
        <Text>
          Loans4you.in acts as an online financial solutions provider for consumer and corporate loans, credit cards, and insurance.
        </Text>
      </View>

      <View style={styles.container1}>
        <Text style={styles.header1}>Job Details</Text>
        <Text style={styles.title1}>Skills Required:</Text>
        <Text>PHP, MySQL, HTML, CSS, JavaScript, Java, Bootstrap</Text>
        <View style={styles.section}>
          <Text style={styles.title1}>Learn these skills:</Text>
          <Text>PHP, MySQL, HTML, CSS, JavaScript</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title1}>Who can apply:</Text>
          <Text>1. Only candidates who can work from home job/internship</Text>
          <Text>2. are available for the work from home job/internship between 5th Sep'23 and 10</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <Text style={styles.title2}>Number of openings</Text>
        <Text style={styles.number}>2</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Apply now</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Sc>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
   

  },
  header: {
    backgroundColor: 'green',
    padding: 10,
    marginBottom: 10,
    borderWidth:1,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderWidth:1,
  },
  about: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderWidth:1,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    
  },
  subtitle: {
    color: '#666',
    fontSize: 14,
    marginTop:2,
    marginLeft:6,
  },
  container1: {
    
    padding: 20,
    borderWidth:1,
    borderBottomWidth:0,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header1: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  title1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
    marginBottom: 10,
  },
  section: {
    marginBottom: 15,
  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bold',
    
  },

  container2: {
    flex: 1,
    justifyContent: 'center',
    borderTopWidth:0,
    borderWidth:1,
    backgroundColor: '#fff',
  },
  title2: {
    fontSize: 16,
    color: '#000',marginLeft:22,
    fontWeight: 'bold',
    marginTop:9,
  },
  number: {
    fontSize: 14,
  
    marginLeft:22,
    color: '#000',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0000ff',
    padding: 10,
    marginBottom:40,
    textAlign:'center',
    justifyContent:"center",
    alignItems:"center",
    width:'50%'
 ,   marginLeft:170,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },

});

export default JobDetails;

