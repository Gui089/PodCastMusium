import React from "react";

import Box from "../../../../Components/Box/Box";
import { TextInput } from "react-native";
import { IconComponent } from "../../../../Components/Icon/Icon";

export const ExploreSearch = () => {
    return (
        <Box
            style={{
                backgroundColor:'#D9D9D9',
                marginTop:21,
                width:370,
                alignSelf:'center',
                borderRadius:18
            }}
        >
            <IconComponent 
                name="searchIcon" 
                color="#979797"
                style={{
                    marginTop:16
                }}
                />
            <TextInput
                placeholder="Songs, Artist, Podcasts & More"
                placeholderTextColor={"#8A9A9D"}
                style={{
                    backgroundColor:'#D9D9D9',
                    borderRadius:18,
                    width:290,
                    alignSelf:'center',
                }}
            >

            </TextInput>
        </Box>
    )
}