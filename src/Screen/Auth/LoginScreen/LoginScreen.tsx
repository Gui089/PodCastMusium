import React from 'react';
import { TextInput } from '../../../Components/TextInput/TextInput';
import { Image, Pressable, StatusBar, Text, View } from 'react-native';
import { RNButton } from '../../../Components/Button/Button';
import Box, { TouchableOpacityBox } from '../../../Components/Box/Box';
import { IconComponent } from '../../../Components/Icon/Icon';
import { RootStackParamList } from '../../../routes/routes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>
export const LoginScreen = ({navigation}: LoginScreenProps) => {

    const goToRegister = () => {
        navigation.navigate('RegisterScreen');
    }

    const goBack = () => {
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
            
            <Pressable hitSlop={10} onPress={goBack}>
                <IconComponent name='leftIcon' />
            </Pressable>

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
                
                leftIcon='LockIcon'
                title='Password' 
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
            <TouchableOpacityBox onPress={goToRegister}>
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
            </TouchableOpacityBox>
            </Box>
        </View>
    )
}

