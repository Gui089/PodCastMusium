import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, Text, View } from "react-native";
import { AppStackParams } from "../../../routes/AppStack";
import { MusicPlayer } from "../Components/MusicPlayer/MusicPlayer";
import { IconComponent } from "../../../Components/Icon/Icon";

type PlayMusicProps = NativeStackScreenProps<AppStackParams, 'PlayMusicScreen'>

export const PlayMusicScreen = ({navigation, route}: PlayMusicProps) => {
    return (
        <View style={{backgroundColor:'black', flex:1}}>
            <Image 
                style={{
                    marginTop:100,
                    borderRadius:4,
                    alignSelf:'center'
                }} 
                source={{uri: route.params.imageUrl}} 
                width={345} 
                height={330}
                />
                <View style={{marginLeft:35, marginTop:20}}>
                    <Text style={{
                        color:'white',
                        fontSize:24,
                        fontWeight:'bold'
                        }}>
                        {route.params.title}
                    </Text>
                    <Text style={{
                        color:"#8A9A9D",
                        fontSize:16,
                        fontWeight:'bold'
                    }}>
                        {route.params.artist}
                    </Text>
                </View>
            
            <MusicPlayer title={route.params.title} soundUrl={route.params.songUrl}/>
        </View>
    )
}