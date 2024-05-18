import React from "react";
import { EyeOffIcon } from "../../assets/Icons/EyeOff";
import { LockIcon } from "../../assets/Icons/LockIcon";
import { MailIcon } from "../../assets/Icons/MailIcon";
import { View, ViewStyle } from "react-native";
import { LeftIcon } from "../../assets/Icons/LeftIcon";
import { BarIcon } from "../../assets/Icons/BarIcon";
import { BellIcon } from "../../assets/Icons/BellIcon";
import { SettingsIcon } from "../../assets/Icons/SettingsIcon";
import { HomeIcon } from "../../assets/Icons/HomeIcon";
import { SearchIcon } from "../../assets/Icons/SearchIcon";
import { FolderIcon } from "../../assets/Icons/FolderIcon";


export interface IconProps {
    name: IconNames;
    style?: ViewStyle;
    color?: string;
    width?: number;
    height?: number;
}

export const IconComponent = ({name, style, color, width, height}: IconProps) => {

    const IconSvg = iconRegistry[name];

    return (
        <View style={[{alignSelf:'flex-start',position:'absolute', marginTop:30, marginLeft:20},{...style}]}>
            <IconSvg color={color} width={width} height={height}/>
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
    settingsIcon: SettingsIcon,
    homeIcon: HomeIcon,
    searchIcon: SearchIcon,
    folderIcon: FolderIcon
}

type IconType = typeof iconRegistry;

export type IconNames = keyof IconType;