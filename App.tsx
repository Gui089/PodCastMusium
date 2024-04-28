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
import { LoginScreen } from './src/Screen/Auth/LoginScreen/LoginScreen';

export default function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor='black'/>
        {/* <SignUpScreen /> */}
        <LoginScreen />
    </ThemeProvider>
  );
}
