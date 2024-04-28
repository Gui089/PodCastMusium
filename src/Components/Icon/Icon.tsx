import React from "react";
import { EyeOffIcon } from "../../assets/Icons/EyeOff";
import { LockIcon } from "../../assets/Icons/LockIcon";
import { MailIcon } from "../../assets/Icons/MailIcon";

interface Props {
    name: IconNames;
}

export const IconComponent = ({name}: Props) => {

    const IconSvg = iconRegistry[name];

    return (
        <IconSvg />
    )
}

const iconRegistry = {
    eyeOff: EyeOffIcon,
    LockIcon: LockIcon,
    MailIcon: MailIcon
}

type IconType = typeof iconRegistry;

export type IconNames = keyof IconType;