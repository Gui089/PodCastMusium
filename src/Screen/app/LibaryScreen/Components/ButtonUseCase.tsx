
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

type Props = {
    title: string;
}

const iconMap = {
    'add': require('../../../../assets/img/add-lg.png'),
    'favorite': require('../../../../assets/img/Vector.png')
};

export const ButtonUseCase = ({title}: Props) => {

    const urlIcon = title === 'add' ? iconMap['add'] : iconMap['favorite'];

    return (
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
    )
}
