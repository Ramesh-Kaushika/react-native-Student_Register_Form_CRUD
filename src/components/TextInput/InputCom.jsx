import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';

const InputCom = ({name,secureTextEntry,onchange,value}) => {
 

  return (
    
    <View style={styles.vw}>
        <TextInput
      label={name}
      secureTextEntry={secureTextEntry}
      onChangeText={onchange}
      style={styles.text}
      textColor='#ffffff'
      
    />
    </View>
    
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
 
    text: {
      fontSize: 30,
      width: '90%',
     
       backgroundColor: '#000000c0',
      margin: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 5,
      
     
    },
    vw:{
        justifyContent:'center',
        alignItems: 'center'

    },
  });

export default InputCom ;