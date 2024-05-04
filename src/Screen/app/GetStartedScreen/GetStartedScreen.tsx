import React from "react";
import { Image, StatusBar, Text, View } from "react-native";
import { RNButton } from "../../../Components/Button/Button";


export const GetStartedScreen = ({navigation}) => {

    const gotToSignScreen = () => {
        navigation.navigate('SignUpScreen');
    }

    return (
        <View style={{flex:1, backgroundColor:'#41C3D6'}}>
            <StatusBar backgroundColor={'#41C3D6'}/>
            <Image style={{position:'absolute', margin:33}} source={require('../../../assets/img/Ellipse2(1).png')}/>
            <Image style={{position:'absolute',marginTop:120, marginLeft:280, width:50, height:50}} source={require('../../../assets/img/Ellipse2(1).png')}/>
            <Image style={{alignSelf:'center', marginTop:180}}  source={require('../../../assets/img/img_girl.png')}/>
            <View 
                style={{
                        height:308,
                        backgroundColor:'black',
                        marginTop:-20,
                        borderTopStartRadius:30,
                        borderTopEndRadius:30,
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                    >
                <Text 
                style={{
                    color:'white',
                    fontSize:20,
                    width:300, 
                    fontWeight:'bold',
                    textAlign:'center',
                    marginBottom:30,
                }}
                    >
                    From the <Text style={{color:'#41C3D6'}}>latest</Text> to the  <Text style={{color:'#41C3D6'}}>greatest</Text> hits, play your favorite tracks on  <Text style={{color:'#41C3D6'}}>Musium</Text> now!
                </Text>
                <RNButton
                    title="Get Started"
                    marginTop="s12"
                    height={60} 
                    width={370}
                    onPress={gotToSignScreen}
                />
            </View>
        </View>
    )
}