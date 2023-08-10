import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Image, Keyboard, ScrollView, Text, TouchableOpacity, Pressable } from 'react-native';

const Settings = ({ navigation, route }) => {
  const [scorporo, setScorporo] = useState(false);
  const [totalCFU, setTotalCFU] = useState(120);
  const [tesiCFU, setTesiCFU] = useState(30);
  const options = [
    { 
      value: 1,
      label: "120"
    },
    {
      value:  2,
      label: "180"
    },
    {
        value:  3,
        label: "300"
    },
    {
        value:  4,
        label: "360"
    }
  ];

  return (
    <ScrollView style={{ backgroundColor: '#fff' }} >
      <View style={{ backgroundColor: '#fff', alignItems: 'center', flex: 1 }}>
        <Image source={require('../assets/tocco_libri.jpg')} style={[styles.image]} />
            <Text style={styles.testoSignIn} >{'Hello, '+ `${route.params.username}`+'!'} </Text>
            <Text style={styles.complete} >{'Complete the fields to continue'} </Text>
            
            

            
            <Pressable>
            <View style={{marginTop:61, borderRadius: 50, width:260, height:44, backgroundColor:'#5271ff', paddingTop: 10}} >
              <Text style={styles.login} >{'SAVE & CONTINUE'}</Text>
            </View>
            </Pressable>
            
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
    width: 180,
    height: 180
  },
  testoSignIn:{
    color: 'black', 
    textAlignVertical: 'auto', 
    textAlign: 'center', 
    fontSize:20, 
    fontFamily:'Montserrat-Regular',
    paddingBottom: 13
  },
  complete:{
    color: 'black', 
    textAlignVertical: 'auto', 
    textAlign: 'center', 
    fontSize:18, 
    fontFamily:'Montserrat-Regular',
    paddingBottom: 40
  },
  login: {
    color: 'white', 
    textAlignVertical: 'center', 
    textAlign: 'center', 
    fontSize:15, 
    fontFamily:'Montserrat-Regular'
  }
});

export default Settings;