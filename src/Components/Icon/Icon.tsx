import React from "react";
import { EyeOffIcon } from "../../assets/Icons/EyeOff";
import { LockIcon } from "../../assets/Icons/LockIcon";
import { MailIcon } from "../../assets/Icons/MailIcon";
import { View, ViewStyle } from "react-native";
import { LeftIcon } from "../../assets/Icons/LeftIcon";
import { BarIcon } from "../../assets/Icons/BarIcon";
import { BellIcon } from "../../assets/Icons/BellIcon";
import { SettingsIcon } from "../../assets/Icons/SettingsIcon";


interface Props {
    name: IconNames;
    style?: ViewStyle;
}

export const IconComponent = ({name, style}: Props) => {

    const IconSvg = iconRegistry[name];

    return (
        <View style={[{alignSelf:'flex-start',position:'absolute', marginTop:30, marginLeft:20},{...style}]}>
            <IconSvg/>
        </View>
    )
}

const iconRegistry = {
    eyeOff: EyeOffIcon,
    LockIcon: LockIcon,
    MailIcon: MailIcon,
    leftIcon: LeftIcon,
    barIcon: BarIcon,
    bellIcon: BellIcon,
    settingsIcon: SettingsIcon
}

type IconType = typeof iconRegistry;

export type IconNames = keyof IconType;