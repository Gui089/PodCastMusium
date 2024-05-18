import React from "react";
import Box from "../../../../../Components/Box/Box";
import { Image, Text } from "react-native";
import { TopGenreTypes } from "../../../../../domain/TopGenre/TopGenreTypes";


type Props = Pick<TopGenreTypes, 'title' | 'cardColor'| 'imageUrl'>
export const CardComponent = ({imageUrl, cardColor, title}: Props) => {
    return (
        <Box
            width={167}
            height={98}
            style={{
                backgroundColor: cardColor,
                borderRadius:4,
                marginRight:10,
                marginLeft:20,
                marginTop:20
            }}
        > 
            <Text
                style={{
                    fontSize:16,
                    color:'white',
                    fontWeight:'bold',
                    marginTop:14,
                    marginLeft:17
                }}
            >
                {title}
            </Text>
            <Image  
                style={{
                    width:85,
                    height:85,
                    alignSelf:'flex-end',
                    marginTop:-22

                }}
            source={{uri: imageUrl}} />
        </Box>
    )
}