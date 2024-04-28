
import {createTheme} from '@shopify/restyle';

const palette = {
    primrayBlue: '#1DB1B7',
    secondaryBlue: '#44D7DD',
    thereBlue: '#00C2CB',
    lightBlue: '#A6F3FF',
    grayBlue: '#446266'
}

export const theme = createTheme({
  colors: {
    primaryButton: palette.primrayBlue,
  },
  spacing:{
    s4:4,
    s8:8,
    s12:12,
    s14:14,
    s20:20,
    s24:24,
    s30:30,
    s40:40,
    s50:50,
    s80:80,
    s100:100
  }, 
  borderRadii:{
    s16:16,
    s20:20,
    s24:24,
    s30:30
  },
});

export type Theme = typeof theme;
