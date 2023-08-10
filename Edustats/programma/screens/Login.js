import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Image, Keyboard, ScrollView, Text, TouchableOpacity, Pressable } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView style={{ backgroundColor: '#fff' }} >
      <View style={{ backgroundColor: '#fff', alignItems: 'center', flex: 1 }}>
        <Image source={require('../assets/Welcome_back.png')} style={[styles.image]} />
            <Text style={styles.testoSignIn} >{'Sign In to continue'}</Text>
            <View >
              <TextInput
                placeholder={` Email or Username        `}
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
            <View style={{marginTop:25}} >
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
            <TouchableOpacity onPress={() =>{ navigation.navigate('forgotpass') }} >
            <Text style={styles.forgotPass} >{'Forgot Password'}</Text>
            </TouchableOpacity>
            <Pressable onPress={() =>{ navigation.navigate('settings',{username: email}) }}>
            <View style={{marginTop:61, borderRadius: 50, width:260, height:44, backgroundColor:'#5271ff', paddingTop: 10}} >
              <Text style={styles.login} >{'LOGIN'}</Text>
            </View>
            </Pressable>
            <TouchableOpacity onPress={() =>{ navigation.navigate('newaccount') }} >
            <Text style={styles.forgotPass} >{'Create a new account'}</Text>
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
    paddingBottom: 57,
    marginTop: -200
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

export default Login;
