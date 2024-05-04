import React from "react";
import { Image, StatusBar, Text, View } from "react-native";
import { TextInput } from "../../../Components/TextInput/TextInput";
import { RNButton } from "../../../Components/Button/Button";
import Box from "../../../Components/Box/Box";

export const RegisterScreen= () => {
    return (
        <View 
            style={{
                backgroundColor: 'black', 
                flex:1, 
                }}
                >
                    <StatusBar backgroundColor={'black'}/>
            <Image 
                style={{
                    alignSelf:"center", 
                    marginTop:0}} 
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
                Register your account
            </Text>

            <TextInput 
                title='Username' 
                />
            <TextInput
                title="Email"
            />
            <TextInput
                title="password"
             />
            <RNButton 
                alignSelf='center'
                height={60} 
                width={370} 
                title='Login'
                />
            <Box 
                alignItems='center' 
                justifyContent='center' 
                flexDirection='row'>
            <Text
                style={{
                    color:'white',
                    alignSelf:'center',
                    marginTop:20,
                    fontSize:18
                }}
            >
                Don’t have an account? 
            </Text>
            <Text
                style={{
                    color:'#7CEEFF',
                    alignSelf:'center',
                    marginTop:20,
                    fontSize:18,
                    marginLeft:5
                }}
            >
                SignUp
            </Text>
            </Box>
        </View>
    )
}