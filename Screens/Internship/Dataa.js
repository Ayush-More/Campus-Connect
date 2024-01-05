import React from 'react';
import { View, Text,SafeAreaView,ScrollView,StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import Sc from '../Sc'
const Dataa = ({navigation}) => {
  return (
    <>
   
   <Sc>
     <SafeAreaView>
      <ScrollView style={{}}>
    <View>
      <TouchableOpacity style={styles.ia} onPress={()=>{navigation.navigate('FullView')}}>
      <Text style={styles.tt}>Software Developer Intern</Text>
      <View style={styles.ig}>
      <Text><Icon name='building' type='font-awesome' size={15} style={{paddingRight:10}}/>Loans4you</Text>
      
      <Text ><Icon name='calendar' type='font-awesome' size={15}style={{paddingRight:10}} />2 months</Text>
      <Text><Icon name='location-arrow' type='font-awesome' size={18} style={{paddingRight:10}}/>'Los Angeles, CA</Text>
      </View>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.ia}>
      <Text style={styles.tt}>Software Developer Intern</Text>
      <View style={styles.ig}>
      <Text><Icon name='building' type='font-awesome' size={15} style={{paddingRight:10}}/>Sample Co.</Text>
      
      <Text ><Icon name='calendar' type='font-awesome' size={15}style={{paddingRight:10}} />2 months</Text>
      <Text><Icon name='location-arrow' type='font-awesome' size={18} style={{paddingRight:10}}/>'Los Angeles, CA</Text>
      </View>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.ia}>
      <Text style={styles.tt}>Software Developer Intern</Text>
      <View style={styles.ig}>
      <Text><Icon name='building' type='font-awesome' size={15} style={{paddingRight:10}}/>Sample Co.</Text>
      
      <Text ><Icon name='calendar' type='font-awesome' size={15}style={{paddingRight:10}} />2 months</Text>
      <Text><Icon name='location-arrow' type='font-awesome' size={18} style={{paddingRight:10}}/>'Los Angeles, CA</Text>
      </View>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.ia}>
      <Text style={styles.tt}>Software Developer Intern</Text>
      <View style={styles.ig}>
      <Text><Icon name='building' type='font-awesome' size={15} style={{paddingRight:10}}/>Sample Co.</Text>
      
      <Text ><Icon name='calendar' type='font-awesome' size={15}style={{paddingRight:10}} />2 months</Text>
      <Text><Icon name='location-arrow' type='font-awesome' size={18} style={{paddingRight:10}}/>'Los Angeles, CA</Text>
      </View>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.ia}>
      <Text style={styles.tt}>Software Developer Intern</Text>
      <View style={styles.ig}>
      <Text><Icon name='building' type='font-awesome' size={15} style={{paddingRight:10}}/>Sample Co.</Text>
      
      <Text ><Icon name='calendar' type='font-awesome' size={15}style={{paddingRight:10}} />2 months</Text>
      <Text><Icon name='location-arrow' type='font-awesome' size={18} style={{paddingRight:10}}/>'Los Angeles, CA</Text>
      </View>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.ia}>
      <Text style={styles.tt}>Software Developer Intern</Text>
      <View style={styles.ig}>
      <Text><Icon name='building' type='font-awesome' size={15} style={{paddingRight:10}}/>Sample Co.</Text>
      
      <Text ><Icon name='calendar' type='font-awesome' size={15}style={{paddingRight:10}} />2 months</Text>
      <Text><Icon name='location-arrow' type='font-awesome' size={18} style={{paddingRight:10}}/>'Los Angeles, CA</Text>
      </View>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.ia}>
      <Text style={styles.tt}>Software Developer Intern</Text>
      <View style={styles.ig}>
      <Text><Icon name='building' type='font-awesome' size={15} style={{paddingRight:10}}/>Sample Co.</Text>
      
      <Text ><Icon name='calendar' type='font-awesome' size={15}style={{paddingRight:10}} />2 months</Text>
      <Text><Icon name='location-arrow' type='font-awesome' size={18} style={{paddingRight:10}}/>'Los Angeles, CA</Text>
      </View>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.ia}>
      <Text style={styles.tt}>Software Developer Intern</Text>
      <View style={styles.ig}>
      <Text><Icon name='building' type='font-awesome' size={15} style={{paddingRight:10}}/>Sample Co.</Text>
      
      <Text ><Icon name='calendar' type='font-awesome' size={15}style={{paddingRight:10}} />2 months</Text>
      <Text><Icon name='location-arrow' type='font-awesome' size={18} style={{paddingRight:10}}/>'Los Angeles, CA</Text>
      </View>
      </TouchableOpacity>
    </View>

      </ScrollView>
      </SafeAreaView>
      </Sc>

    </>
  );
};
const styles = StyleSheet.create({
  ia:{
    height:100,
    borderTopWidth:2,
    borderBottomWidth:2,
    borderLeftWidth:2,
    borderRightWidth:2,
    backgroundColor:'#badfad',
    elevation:10,
    marginLeft:16,
    marginRight:14,
    marginTop:13,
    padding:20,
    shadowColor: "blue",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 6.84,
  },
  tt:{
   fontWeight:'bold'
  },
  ig:{
    paddingTop:20,
     flexDirection:"row",
     fontWeight:'bold',
     justifyContent:'space-between'
    
  }
})

export default Dataa;