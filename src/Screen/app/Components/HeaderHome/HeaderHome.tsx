import React from "react";
import Box from "../../../../Components/Box/Box";
import { Image, Text, View } from "react-native";
import { IconComponent } from "../../../../Components/Icon/Icon";

export const HeaderHome = () => {
    return (
        <Box mt="s40" ml="s24" alignItems="center" flexDirection="row">
            <View style={{
                borderRadius:100,
                backgroundColor:'#00DBFC',
                alignItems:'center',
                justifyContent:'center',
                width:50,
                height:50,
            }}>
                <Image style={{height:43, width:43, borderRadius:100}} source={require('../../../../assets/img/gui02.jpg')}/>
            </View>

            <Box>
                <Text 
                    style={{
                        color:'white',
                        marginLeft:15,
                        fontWeight:'bold',
                        fontSize:15,
                        marginRight:50
                    }}
                >
                    Welcome Back!
                </Text>
                <Text
                    style={{
                        color:'gray',
                        fontWeight:'bold',
                        fontSize:12,
                        marginLeft:15
                    }}
                >
                    Guilherme
                </Text>
            </Box>

            <Box justifyContent="center" ml='s50'>
                <IconComponent style={{marginLeft:0}} name="barIcon" />
                <IconComponent style={{marginLeft:35}} name="bellIcon" />
                <IconComponent style={{marginLeft:74}} name="settingsIcon"/>
            </Box>
                
        </Box>

    )
}