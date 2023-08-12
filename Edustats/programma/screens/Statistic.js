import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, Pressable } from 'react-native';
import {  LineChart,  BarChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";

const Statistic = ({ navigation, route }) => {
  const screenWidth = Dimensions.get("window").width;
  const chartConfig = {
    color: (opacity = 1) => `rgba(82, 113, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    useShadowColorFromDataset: false // optional
  };
  const data = {
    labels: ["2/22", "2/22", "6/22", "9/22", "1/23", "2/23", "2/23", "6/23"],
    datasets: [
      {
        data: [27, 28.6, 28.75, 27.8, 26.83, 26.42, 26.63, 26.53],
        color: (opacity = 1) => `rgba(82, 113, 255, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
  };
  const data3 = {
    labels: ["2/22", "2/22", "6/22", "9/22", "1/23", "2/23", "2/23", "6/23"],
    datasets: [
      {
        data: [27, 30, 29, 24, 22, 24, 28, 26],
        color: (opacity = 1) => `rgba(82, 113, 255, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
  };
  
  return (
    <ScrollView style={{ backgroundColor: '#fff' }} >
      <View style={{ backgroundColor: '#fff', alignItems: 'center', flex: 1 }}>
        <Text style={styles.testoSignIn} >{'Se da ora in poi prendi tutti 18 la tua media sarà:'} </Text>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text style={styles.media} >{'23.73'}</Text>
          <Text style={styles.media2} >{'/30'}</Text>
        </View>
        <View style={styles.line} />
        <Text style={styles.complete} >{'Se da ora in poi prendi tutti 30 la tua media sarà:'} </Text>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text style={styles.media} >{'28.12'}</Text>
          <Text style={styles.media2} >{'/30'}</Text>
        </View>
        <View style={styles.line} />
        <Text style={styles.complete} >{'andamento media'} </Text>

        <LineChart
          data={data}
          width={screenWidth - 10}
          height={220}
          chartConfig={chartConfig} />
        <View style={styles.line} />
        <Text style={styles.complete} >{'voti materie'} </Text>

        <BarChart
          style={{paddingBottom: 40}}
          data={data3}
          width={screenWidth - 10}
          height={220}
          chartConfig={chartConfig}
          verticalLabelRotation={30}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  testoSignIn:{
    color: 'black', 
    textAlignVertical: 'auto', 
    textAlign: 'center', 
    fontSize:16, 
    fontFamily:'Montserrat-Regular',
    paddingBottom: 13
  },
  complete:{
    color: 'black', 
    textAlignVertical: 'auto', 
    textAlign: 'center', 
    fontSize:16, 
    fontFamily:'Montserrat-Regular',
    paddingBottom: 13
  },
  media2:{
    color: 'black', 
    textAlignVertical: 'auto', 
    textAlign: 'center', 
    fontSize:21, 
    fontFamily:'Montserrat-Regular',
    paddingBottom: 13
  },
  media:{
    color: 'black', 
    textAlignVertical: 'auto', 
    textAlign: 'center', 
    fontSize:21,
    fontFamily:'Montserrat-Regular',
    paddingBottom: 13
  },
  line: {
    height: 1,
    alignItems: 'center',
    marginTop: 8, 
    marginBottom: 10,
    backgroundColor: 'black', 
    width: '100%'
}
});

export default Statistic;