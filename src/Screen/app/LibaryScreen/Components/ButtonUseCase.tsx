
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Box from "../../../../Components/Box/Box";

type Props = {
    title: string;
    text: string;
}

const iconMap = {
    'add': require('../../../../assets/img/add-lg.png'),
    'favorite': require('../../../../assets/img/Vector.png')
};

export const ButtonUseCase = ({title, text}: Props) => {

    const urlIcon = title === 'add' ? iconMap['add'] : iconMap['favorite'];

    return (
        <Box flexDirection="row">
            <TouchableOpacity
                style={{
                    backgroundColor:'#00C2CB',
                    borderRadius:56,
                    height:56,
                    width:56,
                    alignItems:'center',
                    justifyContent:'center',
                    marginTop:25,
                    marginLeft:25
                }}
            >
                <Image source={urlIcon}/>
            </TouchableOpacity>
            <Text
                style={{
                    color:'white',
                    fontSize:20,
                    fontWeight:'bold',
                    marginTop:36,
                    marginLeft:20
                }}
            >{text}</Text>
        </Box>
    )
}

