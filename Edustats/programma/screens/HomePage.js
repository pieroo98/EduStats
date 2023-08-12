import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { ProgressChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { ART } from 'react-native';
const { Surface, Shape, Path } = ART;

const HomePage = ({ route }) => {
  const screenWidth = Dimensions.get("window").width;
  const chartConfig = {
    color: (opacity = 1) => `rgba(82, 113, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    useShadowColorFromDataset: false // optional
  };

  const data2 = {
    labels: ["CFU"], // optional
    data: [0.48]
  };

  return (
    <ScrollView style={{ backgroundColor: '#fff' }} >
      <View style={{ backgroundColor: '#fff', alignItems: 'center', flex: 1 }}>
        <Text style={styles.testoSignIn} >{'Hello, '+ `ciao`+'!'} </Text> 
        <Text style={styles.complete} >{'Andamento carriera'} </Text>
       
        <ProgressChart
          data={data2}
          width={screenWidth-30}
          height={220}
          strokeWidth={20}
          radius={82}
          chartConfig={chartConfig}
          hideLegend={true}
        />

        <View style={{backgroundColor:'#E9E8E8', width:'90%', height:16, borderRadius:40 }} >
          <View style={{backgroundColor:'#77C2F9', width:'48%', height:16, borderRadius:40 }} >
            <View style={{backgroundColor:'#5271ff', width:16, height:16, borderRadius:50, alignSelf:'flex-end' }} />
          </View>
        </View>

        <Text style={styles.proiezione} >{'Proiezione voto di laurea:'}</Text>
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
  },
  proiezione: {
    color: 'black', 
    textAlignVertical: 'auto', 
    textAlign: 'center', 
    fontSize:18, 
    fontFamily:'Montserrat-Regular',
    paddingBottom: 13
  },
  
});

export default HomePage;