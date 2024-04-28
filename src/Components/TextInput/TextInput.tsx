import React from "react";
import { TextInput as RNTextInput, TextInputProps as RNTextInputProps, Text, View } from "react-native";
import Box from "../Box/Box";
import { IconComponent, IconNames } from "../Icon/Icon";

interface TextInputProps extends RNTextInputProps {
    title: string;
    leftIcon?: IconNames;
    rightIcon?: IconNames;
}

export const TextInput = ({title, leftIcon,rightIcon }: TextInputProps) => {

    return (
        <View>
            <Box
                alignSelf="center"
                width={370}
                height={80}
                marginBottom="s30"
                padding="s20"
                borderRadius="s16"
                borderColor="grayWhite"
                borderWidth={0.8}
                >
                    {leftIcon && <IconComponent name={leftIcon} />}
                <RNTextInput
                    style={{borderWidth:0.8, borderColor: 'gray', paddingHorizontal:15}}
                    placeholderTextColor={'white'}
                    placeholder={title}>
                </RNTextInput>
            </Box>
        </View>
    )
}