import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './login/Login';
import MainTab from './main/MainTab';
import CreateModal from './create/CreateModal';

const StackNavigation = createNativeStackNavigator();

function Stack() {
    return (
        <StackNavigation.Navigator screenOptions={{headerShown: false}}>
            <StackNavigation.Screen name="Login" component={Login} />
            <StackNavigation.Screen name="Main" component={MainTab} />
            <StackNavigation.Screen
                name="CreateModal"
                component={CreateModal}
                options={{presentation: 'containedTransparentModal'}}
            />
        </StackNavigation.Navigator>
    );
}

export type StackNavigationType = {
    Login: undefined;
    Main: undefined;
};

export default Stack;
