import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Image, Keyboard, ScrollView, Text, TouchableOpacity, Pressable } from 'react-native';

const NewAccount = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [password2, setPassword2] = useState('');


  return (
    <ScrollView style={{ backgroundColor: '#fff' }} >
      <View style={{ backgroundColor: '#fff', alignItems: 'center', flex: 1 }}>
        <Image source={require('../assets/Welcome_back.png')} style={[styles.image]} />
            <Text style={styles.testoSignIn} >{'Sign Up'}</Text>
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
            <View style={{marginTop:27}}>
              <TextInput
                placeholder={` Username        `}
                placeholderTextColor='#9E9E9E'
                keyboardType="default"
                value={username}
                onChangeText={username => setUsername(username)}
                onSubmitEditing={() => { Keyboard.dismiss(); }}
                returnKeyType="send"
                multiline={false}
                textAlignVertical='top'
                style={{ borderWidth: 1, borderRadius: 30, padding:7, color: 'grey', textAlignVertical: 'auto', textAlign: 'center', fontSize:15, fontFamily:'Montserrat-Regular', width:260, height:44 }}
              />
            </View>
            <View style={{marginTop:27}} >
              <TextInput
                placeholder={` Password        `}
                placeholderTextColor='#9E9E9E'
                secureTextEntry={true}
                keyboardType="default"
                value={password}
                onChangeText={password => setPassword(password)}
                onSubmitEditing={() => { Keyboard.dismiss(); }}
                returnKeyType="send"
                multiline={false}
                textAlignVertical='top'
                style={{ borderWidth: 1, borderRadius: 30, padding:7, color: 'black', textAlignVertical: 'auto', textAlign: 'center', fontSize:15, fontFamily:'Montserrat-Regular',width:260, height:44  }}
              />
            </View>
            <View style={{marginTop:27}} >
              <TextInput
                placeholder={` Confirm Password        `}
                placeholderTextColor='#9E9E9E'
                secureTextEntry={true}
                keyboardType="default"
                value={password2}
                onChangeText={password2 => setPassword2(password2)}
                onSubmitEditing={() => { Keyboard.dismiss(); }}
                returnKeyType="send"
                multiline={false}
                textAlignVertical='top'
                style={{ borderWidth: 1, borderRadius: 30, padding:7, color: 'black', textAlignVertical: 'auto', textAlign: 'center', fontSize:15, fontFamily:'Montserrat-Regular',width:260, height:44  }}
              />
            </View>
            
            <Pressable onPress={()=> navigation.navigate('login')}>
            <View style={{marginTop:50, borderRadius: 50, width:260, height:44, backgroundColor:'#5271ff', paddingTop: 10}} >
              <Text style={styles.login} >{'SIGN UP'}</Text>
            </View>
            </Pressable>
            <TouchableOpacity onPress={()=> navigation.navigate('login')}>
            <Text style={styles.forgotPass} >{'Already have an account? Sign In'}</Text>
            </TouchableOpacity>
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
    paddingBottom: 20,
    marginTop: -228
  },
  forgotPass:{
    color: '#5271ff', 
    textAlignVertical: 'auto', 
    textAlign: 'center', 
    fontSize:15, 
    fontFamily:'Montserrat-Regular',
    paddingTop: 20
  },
  login: {
    color: 'white', 
    textAlignVertical: 'center', 
    textAlign: 'center', 
    fontSize:15, 
    fontFamily:'Montserrat-Regular'
  }
});

export default NewAccount;
