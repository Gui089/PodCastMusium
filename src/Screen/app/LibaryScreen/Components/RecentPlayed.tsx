import React from "react";
import Box from "../../../../Components/Box/Box";
import { Image, Text } from "react-native";

interface Props {
    imageUrl: string;
    title: string;
    subtitle?: string;
}
export const RecentPlayed = ({imageUrl, title, subtitle}: Props) => {

    const borderRadiusSpacing = subtitle != null ? 0 : 50;

    return (
        <Box flexDirection="row" mt="s30" ml="s24">

            <Image style={{
                width:84,
                height:82,
                borderRadius:borderRadiusSpacing,
            }} source={{uri: imageUrl}} />


        <Box justifyContent="center">
            <Text 
                style={{
                    color:'white',
                    fontSize:20,
                    fontWeight: 'bold',
                    alignSelf:'flex-start',
                    paddingLeft:21
                    }}>
                {title}
            </Text>
            {subtitle && 
            <Text style={{
                color:'#8A9A9D',
                marginLeft:20
            }}>
                {subtitle}
            </Text>}
        </Box>
        </Box>
    )
}