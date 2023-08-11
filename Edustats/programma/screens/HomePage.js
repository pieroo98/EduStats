import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, Pressable,  } from 'react-native';

const HomePage = ({ navigation, route }) => {
  return (
    <ScrollView style={{ backgroundColor: '#fff' }} >
      <View style={{ backgroundColor: '#fff', alignItems: 'center', flex: 1 }}>
        <Text style={styles.testoSignIn} >{'Hello, '+ `${route.params.username}`+'!'} </Text>
        <Text style={styles.complete} >{'Andamento carriera'} </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  testoSignIn:{
    color: 'black', 
    textAlignVertical: 'auto', 
    textAlign: 'center', 
    fontSize:32, 
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
  }
});

export default HomePage;