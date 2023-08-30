import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './login/Login';
import MainTab from './main/MainTab';
import CreateModal from './create/CreateModal';
import CreateBoard from './create/CreateBoard';

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
            <StackNavigation.Screen
                name="CreateBoard"
                component={CreateBoard}
                options={{presentation: 'containedTransparentModal'}}
            />
        </StackNavigation.Navigator>
    );
}

export type StackNavigationType = {
    Login: undefined;
    Main: undefined;
    CreateModal: undefined;
    CreateBoard: undefined;
};

export default Stack;
