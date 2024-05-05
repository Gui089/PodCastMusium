import React from "react";
import { Image, Pressable, StatusBar, Text, View } from "react-native";
import { RNButton } from "../../../Components/Button/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/routes";


type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>
export const SignUpScreen = ({navigation}: SignUpScreenProps) => {

  const goToLoginScreen = () => {
    navigation.navigate('LoginScreen');
  }

  const goToSignUpScreen = () => {
    navigation.navigate('RegisterScreen');
  }

    return (
        <View style={{flex:1, backgroundColor: 'black'}}>
        <StatusBar backgroundColor={'black'}/>
        <Image style={{alignSelf:'center', marginTop:40}} source={require('../../../assets/img/musiumLogo.png')}/>
        <Text style={{color:'white', alignSelf:'center', fontSize:42, fontWeight:'bold'}}>Let’s get you in</Text>
        <RNButton 
        marginTop='s30'
        title='Continue with a Google'
        DesignUI='outline'/>
        <View 
          style={{
            height:1, 
            width:150, 
            backgroundColor:'white', 
            bottom:370, 
            left:30,
            alignSelf:'center', 
            position:'absolute'}}>
      
            </View>
            <Text 
            style={{
              color:'white',
              position:'absolute',
              fontWeight:'bold',
              bottom:365,
              right:196,
              }}>OR</Text>
            <View 
          style={{
            height:1, 
            width:150, 
            backgroundColor:'white', 
            bottom:370, 
            right:30,
            alignSelf:'center', 
            position:'absolute'}}>
            </View>
        <RNButton 
        marginTop='s80'
        marginBottom='s4' 
        title='log in with a password' 
        onPress={goToLoginScreen}
        />
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:10}}>
          <Text style={{fontSize:18,color:'white'}}>Don't have an account?</Text>

          <Pressable hitSlop={10} onPress={goToSignUpScreen}>
            <Text style={{fontSize:18,color:'#7CEEFF', marginLeft:5}}>Sign Up</Text>
          </Pressable>

        </View>
      </View>
    )
}