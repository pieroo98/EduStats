import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, Dimensions } from 'react-native';

const UserInfo = ({ route }) => {
  const screenWidth = Dimensions.get("window").width;
  
  return (
    <ScrollView style={{ backgroundColor: '#fff' }} >
      <View style={{ backgroundColor: '#fff', alignItems: 'center', flex: 1 }}>
        

        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 1,
    alignItems: 'center',
    marginTop: 8, 
    marginBottom: 10,
    backgroundColor: 'black', 
    width: '100%'
}
});

export default UserInfo;