/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './src/components/Stack';

function App(): JSX.Element {
    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <Stack />
            </SafeAreaProvider>
        </NavigationContainer>
    );
}

export default App;
