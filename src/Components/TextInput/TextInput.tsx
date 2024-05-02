import React, { useRef } from "react";
import { Pressable, TextInput as RNTextInput, TextInputProps as RNTextInputProps, Text, View } from "react-native";
import Box from "../Box/Box";
import { IconComponent, IconNames } from "../Icon/Icon";

interface TextInputProps extends RNTextInputProps {
    title: string;
    leftIcon?: IconNames;
    rightIcon?: IconNames;
}

export const TextInput = ({title, leftIcon,rightIcon }: TextInputProps) => {

    const formRef = useRef<any>(null);

    const focusInput = () => {
        formRef.current.focus();
    }

    return (
        <Pressable onPress={focusInput}>
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
                    ref={formRef}
                    style={{borderColor: '#DBE7E8', paddingHorizontal:15, marginLeft:10}}
                    placeholderTextColor={'white'}
                    placeholder={title}>
                </RNTextInput>
            </Box>
        </View>
        </Pressable>
    )
}