/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Login from './src/components/login/Login';
import {View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): JSX.Element {
    return (
        <SafeAreaProvider>
            <View style={{flex: 1, backgroundColor: 'black'}}>
                <Login />
            </View>
        </SafeAreaProvider>
    );
}

export default App;
