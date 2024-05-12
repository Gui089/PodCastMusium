import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { Listening } from "../../../domain/Listening/listeningType";
import Box from "../../../Components/Box/Box";

type Props = Pick<Listening, 'genre' | 'imageUrl'>
export const ListeningList = ({genre, imageUrl}: Props) => {
    return (
        <Box padding="s8" ml="s4" mt="s8">
            <TouchableOpacity
                style={{
                backgroundColor:'#1D2728',
                width:183,
                height:60,
                borderRadius:10,
                }}
            >
                <Text style={{
                    color:'white',
                    alignSelf:'flex-end',
                    marginRight:23,
                    marginTop:20,
                    fontWeight:'bold'
                }}>
                    {genre}
                </Text>
                <Image style={{width:55, height:58, borderRadius:10,marginTop:-38}}  source={{uri:imageUrl}}/>
            </TouchableOpacity>
        </Box>
    )
}