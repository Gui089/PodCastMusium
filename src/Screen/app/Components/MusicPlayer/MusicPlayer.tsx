import React, { useRef, useState } from "react";
import { Button, StyleSheet, Text } from "react-native";
import Video,{ VideoRef } from "react-native-video";
import Box from "../../../../Components/Box/Box";


export const MusicPlayer = () => {

    const MusicRef = useRef<VideoRef>(null);
    const background = require('../../../../assets/sounds/oceano_djavan.m4a');
    const [stateMusic, setStateMusic] = useState(false);
    const PauseAndPlay = () => setStateMusic(prev => !prev);

    return (
        <Box mt="s20" backgroundColor="primaryButton">
            <Video
                source={background}
                ref={MusicRef}
                controlsStyles={{
                    hideSeekBar: true,
                    
                }}
                style={styles.backgroundVideo}
                controls
                paused={stateMusic}
            />
        </Box>
    )

}

var styles = StyleSheet.create({
    backgroundVideo: {
        
    },
});