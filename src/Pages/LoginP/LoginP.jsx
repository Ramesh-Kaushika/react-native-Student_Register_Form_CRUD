
import { ImageBackground, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import ButtonCom from '../../components/Button/ButtonCom';
import InputCom from '../../components/TextInput/InputCom';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import PasswordInput from '../../components/TextInput/PasswordInput';





const LoginP = ({ navigation }) => {

    const login = () => {

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
                            <Text style={{ fontWeight: 'bold', color: '#dff9fb' }} variant="displayMedium"> Student Register {"\n"}             Form </Text>
                        </View>

                        <View style={styles.container}>
                            <View style={{ marginTop: '5%' }}>
                                <Text style={{ fontWeight: 'bold', color: '#0be881', textAlign: 'center', fontSize: 40, }} variant="displayMedium">Login</Text>
                            </View>

                            <InputCom name={'User Name'}  />
                            <PasswordInput name={'Password'}/>
                            <ButtonCom onPress={login} bgcolor={'#2ecc71'} title={'LOGIN'} />

                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20, }}>
                                <View>
                                    <Text style={{ color: 'red', }} variant="titleMedium">Register Account</Text>
                                </View>
                                <View>
                                    <Text style={{ color: 'red', }} variant="titleMedium">   |   </Text>
                                </View>
                                <View>
                                    <Text style={{ color: 'red', }} variant="titleMedium">Forget Password</Text>
                                </View>

                            </View>
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
        marginTop: 200,



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



export default LoginP;