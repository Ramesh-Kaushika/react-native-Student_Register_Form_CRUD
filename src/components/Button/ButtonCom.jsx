import * as React from 'react';
import { StyleSheet, Touchable, TouchableOpacity, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

function ButtonCom (props) {

   

    return (
          <View style={{ justifyContent: 'center', alignItems: 'center', }} >
        <TouchableOpacity onPress={props.onPress} mode="contained" labelStyle={{ }}
        style={[
            styles.btn, {backgroundColor: props.bgcolor}
        ]} 
        >
           <Text style={{fontSize: 20, color: 'black', textAlign: 'center',}}>{props.title}
            </Text> 
        </TouchableOpacity>
    </View>
    )
  

    };

export default ButtonCom;

const styles = StyleSheet.create({
    btn: {
        width: '40%',
        padding: 12,
        borderRadius: 100,
        marginTop: 20,
        textAlign: 'center',
        justifyContent: 'center',
        
        alignContent: 'center',

      
        
       
       
    },
})