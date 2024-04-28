/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import {StatusBar} from 'react-native';
import { theme } from './src/Theme/Theme';
import { SignUpScreen } from './src/Screen/Auth/SignUpScreen/SignUpScreen';

export default function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor='black'/>
       <SignUpScreen />
    </ThemeProvider>
  );
}
