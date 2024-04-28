import React from 'react';
import { TextInput } from '../../../Components/TextInput/TextInput';
import { Image, Text, View } from 'react-native';

export const LoginScreen = () => {
    return (
        <View 
            style={{
                backgroundColor: 'black', 
                flex:1, 
                }}
                >
            <Image 
                style={{
                    alignSelf:"center", 
                    marginTop:40}} 
                source={require('../../../assets/img/musiumLogo.png')}
                />
            <Text 
                style={{
                    color:'white', 
                    alignSelf:'center',
                    marginBottom:20,
                    fontSize:30,
                    fontWeight:'bold'
                }}
                    >
                Login to your account
            </Text>
            <TextInput
                leftIcon='MailIcon' 
                title='E-mail'
                />
            <TextInput 
                title='Password' 
                />
        </View>
    )
}

