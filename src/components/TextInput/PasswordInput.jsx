import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';

const PasswordInput = ({ name }) => {

    const [password, setPassword] = React.useState('');
    const [isPasswordSecure, setIsPasswordSecure] = React.useState(true);

    return (

        <View style={styles.vw}>
            <TextInput
                secureTextEntry={isPasswordSecure}
                style={styles.text}
                right={
                    <TextInput.Icon
                        name={() => <MaterialCommunityIcons name={isPasswordSecure ? "eye-off" : "eye"} size={28} color={COLORS.black} />} // where <Icon /> is any component from vector-icons or anything else
                        onPress={() => { isPasswordSecure ? setIsPasswordSecure(false) : setIsPasswordSecure(true) }}
                    />
                }
                textColor='#ffffff'
                label={name}
                value={password}
                onChangeText={text => setPassword(text)}
                underlineColorAndroid="transparent"

            />

        </View>

    );
};

const styles = StyleSheet.create({


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
    vw: {
        justifyContent: 'center',
        alignItems: 'center'

    },
});

export default PasswordInput;