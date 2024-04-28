import React from 'react';
import { TextInput } from '../../../Components/TextInput/TextInput';
import { View } from 'react-native';

export const LoginScreen = () => {
    return (
        <View style={{backgroundColor: 'black', flex:1, justifyContent:'center'}}>
            <TextInput 
                title='E-mail'
                />
            <TextInput 
                title='Password' 
                />
                
        </View>
    )
}

