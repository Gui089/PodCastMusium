import React from "react";
import Box from "../../../../Components/Box/Box";
import { Image } from "react-native";
import { IconComponent } from "../../../../Components/Icon/Icon";

export const HeaderLibary = () => {
    return (
        <Box mt="s30" ml="s20">
            <Image source={require('../../../../assets/img/Logos/LogoLibary.png')} />

            <IconComponent style={{
                marginTop:15, 
                alignSelf:'flex-end', 
                paddingRight:20
                }} 
                name="searchIcon" 
                width={30} 
                height={30}
            />
        </Box>
    )
}