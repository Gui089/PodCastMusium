
// In Box.tsx
import {
    createBox, 
    createRestyleComponent, 
    BackgroundColorProps,
    backgroundColor, 
    spacing,
    SpacingProps,
    spacingShorthand,
    layout,
    LayoutProps,
    border,
    BorderProps,
    SpacingShorthandProps
} from '@shopify/restyle';
import { Theme } from "../../Theme/Theme";
import { TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";

const Box = createBox<Theme>();

export interface TouchableOpacityBoxProps extends 
    BackgroundColorProps<Theme>, 
    SpacingProps<Theme>, 
    LayoutProps<Theme>, 
    BorderProps<Theme>, 
    SpacingShorthandProps<Theme>, 
    TouchableOpacityProps {
        marginBottom?: keyof Theme['spacing']; // Definindo a propriedade marginBottom como opcional
}

export const TouchableOpacityBox = createRestyleComponent<TouchableOpacityBoxProps, Theme>([backgroundColor, spacing, spacingShorthand, border, layout], TouchableOpacity);

export default Box;

