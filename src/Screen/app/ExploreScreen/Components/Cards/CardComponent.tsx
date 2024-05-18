import React from "react";
import Box from "../../../../../Components/Box/Box";
import { Image } from "react-native";


type Props = { 
    imageUrl: string;
    cardColor: string;
}
export const CardComponent = ({imageUrl, cardColor}: Props) => {
    return (
        <Box
            width={167}
            height={98}
            style={{
                backgroundColor: cardColor,
                borderRadius:4
            }}
        >
            <Image source={{uri: imageUrl}} />
        </Box>
    )
}