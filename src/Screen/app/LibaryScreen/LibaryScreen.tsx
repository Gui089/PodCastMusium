import React, { useRef } from "react";
import { Image, ScrollView, Text } from "react-native";
import { HeaderLibary } from "./Components/HeaderLibary";
import { FilterLibary } from "./Components/Filter";
import { ButtonUseCase } from "./Components/ButtonUseCase";
import Box from "../../../Components/Box/Box";
import { MusicPlayer } from "../Components/MusicPlayer/MusicPlayer";


export const LibaryScreen = () => {

    return (
        <ScrollView 
            style={{backgroundColor:'black'}}
        >
            <HeaderLibary />

            <FilterLibary />

            <ButtonUseCase text="Add New Playlist" title="add"/>
            <ButtonUseCase text="Your Liked Songs" title="favorite" />

            <Box 
            style={{
                marginLeft:40,
                marginTop:34.5,
                flexDirection:'row',
                alignItems:'center'
            }}>
                <Image  width={17} height={13} source={require('../../../assets/img/sort.png')}/>
                <Text 
                style={{
                    color:'#39C0D4',
                    fontSize:16,
                    fontWeight:'bold',
                    marginLeft:5

                }} >
                    Recently played
                </Text> 
            </Box>
        </ScrollView>
    )
}