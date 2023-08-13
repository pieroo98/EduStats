import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, Dimensions, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Esami = ({ route }) => {
  const screenWidth = Dimensions.get("window").width;
  const materie = [
    {
      "nome": "Matematica",
      "voto": 28,
      "codice": "MAT101",
      "data": "2023-08-11",
      "lode": false,
      "CFU": 6
    },
    {
      "nome": "Informatica",
      "voto": 25,
      "codice": "INF201",
      "data": "2023-07-25",
      "lode": false,
      "CFU": 5
    },
    {
      "nome": "Storia",
      "voto": 30,
      "codice": "STO301",
      "data": "2023-06-15",
      "lode": true,
      "CFU": 8
    },
    {
      "nome": "Chimica",
      "voto": 18,
      "codice": "CHI401",
      "data": "2023-07-03",
      "lode": false,
      "CFU": 7
    },
    {
      "nome": "Letteratura",
      "voto": 27,
      "codice": "LET501",
      "data": "2023-06-20",
      "lode": false,
      "CFU": 6
    },
    {
      "nome": "Economia",
      "voto": 22,
      "codice": "ECO601",
      "data": "2023-07-10",
      "lode": false,
      "CFU": 5
    },
    {
      "nome": "Fisica",
      "voto": 29,
      "codice": "FIS701",
      "data": "2023-08-02",
      "lode": false,
      "CFU": 7
    },
    {
      "nome": "Psicologia",
      "voto": 24,
      "codice": "PSI801",
      "data": "2023-06-28",
      "lode": false,
      "CFU": 6
    }
  ];
  const [esami, setEsami] = useState(materie);
  const ReqDeleteExam =(item) => {
    Alert.alert(
        'Sicuro di voler cancellare ' + item.nome+'?',
        'La cancellazione è irreversibile',
        [
          { text: 'No', onPress: () => {} },
          { text: 'Si', onPress: () => {DeleteExam(item)} },
        ]
      );
  }
  const DeleteExam = (item) =>{
    setEsami(esami.filter( (ex) => ex.codice !== item.codice ));
  };
  return (
    <ScrollView style={{ backgroundColor: '#fff' }} >
      <View style={{ backgroundColor: '#fff', alignItems: 'center', flex: 1 }}>
        
        {esami?.flatMap((item, i) => (
        <View key={i} style={{width:screenWidth - 40, height:161, backgroundColor:'#E4F2FC', borderTopRightRadius:30, borderBottomLeftRadius:30, margin:12.5}}>
        <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 22, paddingLeft:20, paddingBottom:8, paddingTop:10 }} >{item.nome}</Text>
        <View style={{width:74, height:51, backgroundColor:'#5271FF', borderTopRightRadius:30, borderBottomLeftRadius:30,  alignSelf:'flex-end', marginTop:-47}} >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, textAlign:'center', paddingTop:11 }} >{item.voto}</Text>
        </View>
        <Text style={styles.testo} >{'Codice: '+item.codice}</Text>
        <Text style={styles.testo} >{'Data: '+item.data}</Text>
        <Text style={styles.testo} >{'CFU: '+item.CFU}</Text>
        <View style={{flexDirection:'column', marginTop: - 90, alignItems:'flex-end', marginRight:20}} >
            <TouchableOpacity >
                <Icon name='pencil' size={30} color={'#F18200'} />
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:20}} onPress={() => ReqDeleteExam(item)}>
                <Icon name='trash' size={30} color={'red'} />
            </TouchableOpacity>
        </View>
        </View>
        ))}
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  testo: { 
    color: 'black', 
    fontSize: 20, 
    paddingLeft:20, 
    paddingBottom:8,
    fontFamily:'Montserrat-Regular'
    }
});

export default Esami;