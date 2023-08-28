import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import My from './My';
import Settings from './Settings';

const Stack = createNativeStackNavigator<MyStackNavigationType>();

export type MyStackNavigationType = {
    my: undefined;
    settings: undefined;
};

export default function MyStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="my" component={My} />
            <Stack.Screen
                name="settings"
                component={Settings}
                options={{presentation: 'containedTransparentModal'}}
            />
        </Stack.Navigator>
    );
}
