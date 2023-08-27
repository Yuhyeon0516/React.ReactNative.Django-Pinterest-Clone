import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../home/Home';
import Search from '../search/Search';
import Create from '../create/Create';
import Alarm from '../alarm/Alarm';
import My from '../my/My';

const Tab = createBottomTabNavigator();

export default function MainTab() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Create" component={Create} />
            <Tab.Screen name="Alarm" component={Alarm} />
            <Tab.Screen name="My" component={My} />
        </Tab.Navigator>
    );
}
