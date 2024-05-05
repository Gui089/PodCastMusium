import React from "react";
import { Image, Pressable, StatusBar, Text, View } from "react-native";
import { TextInput } from "../../../Components/TextInput/TextInput";
import { RNButton } from "../../../Components/Button/Button";
import { IconComponent } from "../../../Components/Icon/Icon";

export const RegisterScreen= ({navigation}) => {

    const goBackNavigation = () => {
        navigation.goBack();
    }

    return (
        <View 
            style={{
                backgroundColor: 'black', 
                flex:1, 
                }}
                >
                    <StatusBar backgroundColor={'black'}/>

                <Pressable onPress={goBackNavigation} hitSlop={10}>
                    <IconComponent name="leftIcon" />                
                </Pressable>

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
        </View>
    )
}