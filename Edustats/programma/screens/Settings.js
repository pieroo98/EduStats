import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Image, Keyboard, ScrollView, Text, Pressable, Switch } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

const Settings = ({ navigation, route }) => {
  const [scorporo, setScorporo] = useState(false);
  const [totalCFU, setTotalCFU] = useState(120);
  const [tesiCFU, setTesiCFU] = useState('');
  const options = [
    { 
      key: 1,
      value: "120"
    },
    {
      key:  2,
      value: "180"
    },
    {
        key:  3,
        value: "300"
    },
    {
        key:  4,
        value: "360"
    }
  ];

  const handle1 = (val) => {
    let stringa ="";
    for ( const c1 of options){
        if (c1.key == val){
            stringa = c1.value;
            break;
        }
    }
    setTotalCFU(stringa)
}
  return (
    <>
    <ScrollView style={{ backgroundColor: '#fff' }} >
      <View style={{ backgroundColor: '#fff', alignItems: 'center', flex: 1 }}>
        <Image source={require('../assets/tocco_libri.jpg')} style={[styles.image]} />
        <Text style={styles.testoSignIn} >{'Hello, '+ `${route.params.username}`+'!'} </Text>
        <Text style={styles.complete} >{'Complete the fields to continue'} </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center',width:260, height:44, marginBottom:20 }}>
          <Text style={styles.scorporo}>{"Scorporo"}</Text>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Switch trackColor={{ false: "#767577", true: "#1976D2" }} thumbColor={"#f4f3f4"} onValueChange={() => {setScorporo(!scorporo);}} value={scorporo} />
          </View>
        </View>

        <SelectList
          setSelected={(val) => {handle1(val)}}
          data={options}
          search={false}
          maxHeight={156} 
          boxStyles={{ borderRadius: 40,width:260, height:44 }} //override default styles
          defaultOption={{ key: options[0].key, value: options[0].value }} />            

        <View style={{ marginTop:20}}>
          <TextInput
            placeholder={` Tesi CFU        `}
            placeholderTextColor='#9E9E9E'
            keyboardType="numeric"
            value={tesiCFU}
            onChangeText={tesiCFU => setTesiCFU(tesiCFU)}
            onSubmitEditing={() => { Keyboard.dismiss(); }}
            returnKeyType="send"
            multiline={false}
            textAlignVertical='top'
            style={{ borderWidth: 1, borderRadius: 40, padding:7, color: 'grey', textAlignVertical: 'auto', fontSize:15, fontFamily:'Montserrat-Regular', width:260, height:44 }}
          />
        </View>
            
        
            
      </View>
    </ScrollView>
    <Pressable style={{ backgroundColor: '#fff', alignItems: 'center' }}>
    <View style={{marginTop:31,marginBottom:50, borderRadius: 50, width:260, height:44, backgroundColor:'#5271ff', paddingTop: 10}} >
      <Text style={styles.login} >{'SAVE & CONTINUE'}</Text>
    </View>
  </Pressable>
  </>
  );
};

const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
    width: 180,
    height: 180
  },
  testoSignIn:{
    color: 'black', 
    textAlignVertical: 'auto', 
    textAlign: 'center', 
    fontSize:20, 
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

export default Settings;