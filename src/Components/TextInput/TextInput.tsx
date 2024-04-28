import React from "react";
import { TextInput as RNTextInput, TextInputProps as RNTextInputProps, Text, View } from "react-native";
import Box from "../Box/Box";

interface TextInputProps extends RNTextInputProps {
    title: string;
}

export const TextInput = ({title}: TextInputProps) => {
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
                <RNTextInput
                    style={{borderWidth:0.8, borderColor: 'gray', paddingHorizontal:15}}
                    placeholderTextColor={'white'}
                    placeholder={title}>
                </RNTextInput>
            </Box>
        </View>
    )
}