import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './login/Login';
import MainTab from './main/MainTab';

const StackNavigation = createNativeStackNavigator();

function Stack() {
    return (
        <StackNavigation.Navigator screenOptions={{headerShown: false}}>
            <StackNavigation.Screen name="Login" component={Login} />
            <StackNavigation.Screen name="Main" component={MainTab} />
        </StackNavigation.Navigator>
    );
}

export type StackNavigationType = {
    Login: undefined;
    Main: undefined;
};

export default Stack;
