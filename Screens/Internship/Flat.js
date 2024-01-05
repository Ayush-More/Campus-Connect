import React from 'react';
import {FlatList } from 'react-native';
import Internship from './Display';
const InternshipList = ({ internships,navigation}) => {
  return (
    <>
    <FlatList
      data={internships}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Internship internship={item}  navigation={navigation}/>
    }
  
    />
    </>
  );
};


export default InternshipList;