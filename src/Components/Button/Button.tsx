
import { Image, StyleSheet, Text } from "react-native";
import { TouchableOpacityBox, TouchableOpacityBoxProps } from "../Box/Box";

interface RNButtonProps extends TouchableOpacityBoxProps {
    title: string;
    loading?: boolean;
    DesignUI?: 'primary' | 'outline';
}

export const RNButton = ({title, loading, DesignUI, style, ...boxProps}: RNButtonProps) => {
    return (
       <TouchableOpacityBox
       backgroundColor="primaryButton"
       paddingHorizontal="s20"
       height={50}
       alignItems="center"
       justifyContent="center"
       borderRadius="s16"
       style={DesignUI === 'outline' ? styles.outline : style}
        {...boxProps}
       >
        {DesignUI === 'outline' && <Image style={styles.imageButton} source={require('../../assets/img/google.png')} />}
        <Text style={{color:'white', fontWeight:'bold', fontSize:16}}>{title}</Text>
       </TouchableOpacityBox>
    )
}

const styles = StyleSheet.create({
    outline:{
        borderWidth: 1,
        borderColor:'white',
        backgroundColor:'black',
        borderRadius: 10
    },
    imageButton: {
        alignSelf:'flex-start',
        position:'absolute',
        left:80
    }
});