import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Image, Keyboard, ScrollView, Text, TouchableOpacity, Pressable,Platform, Switch } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
const AddExam = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [codice, setCodice] = useState('');
  const [date1, setDate1] = useState(new Date());
  const [mode1, setMode1] = useState('date1');
  const [show1, setShow1] = useState(false);
  const [CFU, setCFU] = useState('');
  const [voto, setVoto] = useState('');
  const [lode, setLode] = useState(false);

  const showMode1 = (currentMode) => {
    setShow1(true);
    setMode1(currentMode);
  }

  const onChange1 = (event, selectedDate) => {
    const currentDate = selectedDate || date1;
    setShow1( !show1);
    setDate1(currentDate);
 }

  return (
    <ScrollView style={{ backgroundColor: '#fff' }} >
      <View style={{ backgroundColor: '#fff', alignItems: 'center', flex: 1 }}>
            <View style={{marginTop:27}}>
              <TextInput
                placeholder={` Nome materia        `}
                placeholderTextColor='#9E9E9E'
                keyboardType="default"
                value={nome}
                onChangeText={nome => setNome(nome)}
                onSubmitEditing={() => { Keyboard.dismiss(); }}
                returnKeyType="send"
                multiline={false}
                textAlignVertical='top'
                style={{ borderWidth: 1, borderRadius: 30, padding:7, color: 'grey', textAlignVertical: 'auto', textAlign: 'center', fontSize:15, fontFamily:'Montserrat-Regular', width:260, height:44 }}
              />
            </View>
            <View style={{marginTop:27}}>
              <TextInput
                placeholder={` Codice        `}
                placeholderTextColor='#9E9E9E'
                keyboardType="default"
                value={codice}
                onChangeText={codice => setCodice(codice)}
                onSubmitEditing={() => { Keyboard.dismiss(); }}
                returnKeyType="send"
                multiline={false}
                textAlignVertical='top'
                style={{ borderWidth: 1, borderRadius: 30, padding:7, color: 'grey', textAlignVertical: 'auto', textAlign: 'center', fontSize:15, fontFamily:'Montserrat-Regular', width:260, height:44 }}
              />
            </View>
            <View style={{ marginTop: 27 }}>
            {/* <Text style={{ marginVertical: 5, fontSize: 14, color: 'black', marginLeft: 5 }}>{'Data esame'}</Text> */}
            <TouchableOpacity onPress={() => showMode1('date')}>
              <View style={{
                alignSelf: 'center', marginTop: 5, backgroundColor: 'white', width: 260, borderColor: '#8e8e8e', height: 44,
                flexDirection: 'row', paddingHorizontal: 15, borderWidth: 0.5, borderRadius: 50, alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, paddingLeft: 15, paddingRight: 15
              }}>
                <Text>{date1.toDateString()}</Text>
                <Icon name="calendar" size={22} ></Icon>

                {show1 && (
                  <DateTimePicker
                    testID='dateTimePicker1'
                    value={date1}
                    mode={mode1}
                    is24Hour={false}
                    display='default'
                    onChange={onChange1}
                  />
                )}
              </View>
            </TouchableOpacity>
          </View>
            <View style={{marginTop:27}} >
              <TextInput
                placeholder={` CFU        `}
                placeholderTextColor='#9E9E9E'
                keyboardType="numeric"
                value={CFU}
                onChangeText={CFU => setCFU(CFU)}
                onSubmitEditing={() => { Keyboard.dismiss(); }}
                returnKeyType="send"
                multiline={false}
                textAlignVertical='top'
                style={{ borderWidth: 1, borderRadius: 30, padding:7, color: 'black', textAlignVertical: 'auto', textAlign: 'center', fontSize:15, fontFamily:'Montserrat-Regular',width:260, height:44  }}
              />
            </View>
            <View style={{marginTop:27}} >
              <TextInput
                placeholder={` Voto        `}
                placeholderTextColor='#9E9E9E'
                keyboardType="numeric"
                value={voto}
                onChangeText={voto => setVoto(voto)}
                onSubmitEditing={() => { Keyboard.dismiss(); }}
                returnKeyType="send"
                multiline={false}
                textAlignVertical='top'
                style={{ borderWidth: 1, borderRadius: 30, padding:7, color: 'black', textAlignVertical: 'auto', textAlign: 'center', fontSize:15, fontFamily:'Montserrat-Regular',width:260, height:44  }}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center',width:260, height:44, marginTop:27 }}>
            <Text style={styles.scorporo}>{"Lode"}</Text>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Switch trackColor={{ false: "#767577", true: "#1976D2" }} thumbColor={"#f4f3f4"} onValueChange={() => {setLode(!lode);}} value={lode} />
            </View>
            </View>
            <Pressable onPress={()=> {}}>
            <View style={{marginTop:50, borderRadius: 50, width:260, height:44, backgroundColor:'#5271ff', paddingTop: 10}} >
              <Text style={styles.login} >{'Save & Continue'}</Text>
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
  },
  scorporo:{ 
    color: 'black', 
    textAlign: 'left', 
    fontSize: 16, 
    textAlignVertical: 'center',
    fontFamily:'Montserrat-Regular'
   }
});

export default AddExam;
