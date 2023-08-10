import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Image, Keyboard, ScrollView, Text, Pressable } from 'react-native';

const ForgotPass = ({ navigation }) => {
  const [email, setEmail] = useState('');

  return (
    <ScrollView style={{ backgroundColor: '#fff' }} >
      <View style={{ backgroundColor: '#fff', alignItems: 'center', flex: 1 }}>
        <Image source={require('../assets/Welcome_back.png')} style={[styles.image]} />
            <Text style={styles.testoSignIn} >{'Forgot Password?'}</Text>
            <View >
              <TextInput
                placeholder={` Email        `}
                placeholderTextColor='#9E9E9E'
                keyboardType="default"
                value={email}
                onChangeText={email => setEmail(email)}
                onSubmitEditing={() => { Keyboard.dismiss(); }}
                returnKeyType="send"
                multiline={false}
                textAlignVertical='top'
                style={{ borderWidth: 1, borderRadius: 30, padding:7, color: 'grey', textAlignVertical: 'auto', textAlign: 'center', fontSize:15, fontFamily:'Montserrat-Regular', width:260, height:44 }}
              />
            </View>
            
            <Pressable onPress={() =>{ navigation.navigate('login') }}>
                <View style={{marginTop:61, borderRadius: 50, width:260, height:44, backgroundColor:'#5271ff', paddingTop: 10}} >
                    <Text style={styles.login} >{'SUBMIT'}</Text>
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
    resizeMode: 'contain'
  },
  testoSignIn:{
    color: 'black', 
    textAlignVertical: 'auto', 
    textAlign: 'center', 
    fontSize:20, 
    fontFamily:'Montserrat-Regular',
    paddingBottom: 57,
    marginTop: -200
  },
  login: {
    color: 'white', 
    textAlignVertical: 'center', 
    textAlign: 'center', 
    fontSize:15, 
    fontFamily:'Montserrat-Regular'
  }
});

export default ForgotPass;
