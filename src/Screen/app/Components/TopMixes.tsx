import React from "react";
import Box from "../../../Components/Box/Box";
import { TopMixes } from "../../../domain/TopMixes/TopMixesTypes";
import { Image, Text, TouchableOpacity } from "react-native";

type Props = Pick<TopMixes, 'title' | 'imageUrl' | 'barColor'>
export const TopMixesComponent = ({title, imageUrl, barColor}: Props) => {
    return (
        <Box ml="s24" mt="s24">
            <TouchableOpacity >
                <Text style={{
                    color:'white', 
                    fontWeight:'bold', 
                    fontSize:15,
                    position:'absolute',
                    marginLeft:20,
                    marginTop:10
                    }}
                >
                    {title}
                </Text>
                <Image style={{width:150, height:150, marginRight:10, opacity:0.7}} source={{uri:imageUrl}} />
                <Box width={150} height={10} style={{backgroundColor:barColor}}/>
            </TouchableOpacity>
        </Box>
    )
}