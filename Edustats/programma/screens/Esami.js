import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, Dimensions } from 'react-native';

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
  ]
  
  return (
    <ScrollView style={{ backgroundColor: '#fff' }} >
      <View style={{ backgroundColor: '#fff', alignItems: 'center', flex: 1 }}>
        
        {materie.flatMap((item, i) => (
        <View key={i} style={{width:'90%', height:30, backgroundColor:'grey', borderTopRightRadius:30, borderBottomLeftRadius:30, margin:12.5}}>
        <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 13 }} >{item.nome}</Text>
        </View>
        ))}
        
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

export default Esami;