import React from "react";
import Box from "../../../Components/Box/Box";
import { RecentListeningTypes } from "../../../domain/RecentListening/RecentListeningTypes";
import { Image } from "react-native";


type Props = Pick<RecentListeningTypes, 'imageUrl'>
export const RecentListening = ({imageUrl}: Props) => {
    return (
        <Box mr="s14" mt="s24" ml="s20">
            <Image source={{uri: imageUrl}} style={{width:182, height:182}}/>
        </Box>
    )
}