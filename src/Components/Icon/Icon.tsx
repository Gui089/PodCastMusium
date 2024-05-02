import React from "react";
import { EyeOffIcon } from "../../assets/Icons/EyeOff";
import { LockIcon } from "../../assets/Icons/LockIcon";
import { MailIcon } from "../../assets/Icons/MailIcon";
import { View } from "react-native";


interface Props {
    name: IconNames;
}

export const IconComponent = ({name}: Props) => {

    const IconSvg = iconRegistry[name];

    return (
        <View style={{alignSelf:'flex-start',position:'absolute', marginTop:30, marginLeft:20}}>
              <IconSvg/>
        </View>
    )
}

const iconRegistry = {
    eyeOff: EyeOffIcon,
    LockIcon: LockIcon,
    MailIcon: MailIcon
}

type IconType = typeof iconRegistry;

export type IconNames = keyof IconType;