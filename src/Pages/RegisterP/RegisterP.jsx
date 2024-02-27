
import { ImageBackground, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import ButtonCom from '../../components/Button/ButtonCom';
import InputCom from '../../components/TextInput/InputCom';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import instance from '../../services/AxiosOrder/AxiosInstance';
import { useState } from 'react';





const RegisterP = ({ navigation }) => {

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const login = () => {

    instance.post('/register', {
      name: name,
      email: email,
      password: password,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

        console.log(name);
        console.log(email);
        console.log(password);

    navigation.navigate('Login')

  }



  const keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0;


  return (
    <ImageBackground source={require('../LoginP/stock-nubia-ui-android-wallpaper-preview.jpg')} resizeMode="cover" style={styles.image}>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <ScrollView automaticallyAdjustKeyboardInsets> */}
        {/*
              //  
                // contentContainerStyle={{
                // paddingHorizontal: 10,
                //gap: 10,
                //paddingBottom: 60, }}

               // >*/}


        <KeyboardAwareScrollView>

          <View style={{ flex: 1, marginTop: 20, }}>
            <View style={styles.vw2}>
              <Text style={{ fontWeight: 'bold', color: '#dff9fb' }} variant="displayMedium"> Admin Register {"\n"}             Form </Text>
            </View>

            <View style={styles.container}>
              <View style={{ marginTop: '5%' }}>
                <Text style={{ fontWeight: 'bold', color: '#0be881', textAlign: 'center', fontSize: 40, }} variant="displayMedium">Register</Text>
              </View>

              <InputCom name={'Enter Name'} onchange={(e) => setname(e)} />
              <InputCom name={'E-mail'} onchange={(e) => setemail(e)}/>
              <InputCom name={'Password'} onchange={(e) => setpassword(e)}/>
          
              <ButtonCom onPress={()=>(login())} bgcolor={'#2ecc71'} title={'Creat Account'} />

              
            </View>
          </View>

        </KeyboardAwareScrollView>
        {/* </ScrollView>  */}

      </SafeAreaView>
    </ImageBackground>
  )



};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 80,



  },
  container1: {
    flex: 1,


  },
  image: {
    flex: 1,
    justifyContent: 'center',




  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  vw2: {
    justifyContent: 'center',
    alignItems: 'center',



  },
});



export default RegisterP;
