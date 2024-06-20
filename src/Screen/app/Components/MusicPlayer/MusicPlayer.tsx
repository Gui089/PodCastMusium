import React, { useRef, useState } from "react";
import { Button, StyleSheet, Text } from "react-native";
import Video from "react-native-video";
import Box from "../../../../Components/Box/Box";

interface MusicPlayerProps {
    soundUrl: string;
    title: string;
}

export const MusicPlayer = ({ soundUrl, title }: MusicPlayerProps) => {
    const MusicRef = useRef(null);
    const [stateMusic, setStateMusic] = useState(false);

    const musics = {
        Oceano: require('../../../../assets/sounds/oceano_djavan.m4a'),
        Sozinho: require('../../../../assets/sounds/CaetanoVeloso_Sozinho.mp3'),
        Deixe_me_ir: require('../../../../assets/sounds/DeixeMeIr.mp3')
    };

    const getMusicUri = (title: string) => {

        if (musics.hasOwnProperty(title)) {
            return musics[title];
        } else {
            console.error(`Título de música "${title}" não encontrado.`);
            return null;
        }
    };

    const PauseAndPlay = () => setStateMusic(prev => !prev);

    // Obtém a URI do áudio com base no título fornecido
    const musicUri = getMusicUri(title);

    return (
        <Box mt="s20" backgroundColor="primaryButton">
            {musicUri && (
                <Video
                    source={musicUri}
                    ref={MusicRef}
                    controlsStyles={{
                        hideSeekBar: true,
                    }}
                    style={styles.backgroundVideo}
                    controls
                    paused={stateMusic}
                />
            )}
            <Button title={stateMusic ? "Play" : "Pause"} onPress={PauseAndPlay} />
        </Box>
    );
};

const styles = StyleSheet.create({
    backgroundVideo: {
        
    },
});
