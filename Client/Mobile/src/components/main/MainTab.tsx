import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../home/Home';
import Search from '../search/Search';
import Create from '../create/Create';
import Alarm from '../alarm/Alarm';
import My from '../my/My';
import {Text} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export type TabParam = {
    Home: undefined;
    Search: undefined;
    Create: undefined;
    Alarm: undefined;
    My: undefined;
};

const Tab = createBottomTabNavigator<TabParam>();

export default function MainTab() {
    const safeAreaInset = useSafeAreaInsets();

    return (
        <Tab.Navigator
            sceneContainerStyle={{backgroundColor: 'black'}}
            safeAreaInsets={{bottom: 0}}
            screenOptions={({route}) => {
                return {
                    tabBarHideOnKeyboard: true,
                    tabBarActiveBackgroundColor: 'black',
                    tabBarInactiveBackgroundColor: 'black',
                    headerShown: false,
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: '#7F7D80',
                    tabBarStyle: {
                        paddingBottom: safeAreaInset.bottom,
                        height: 70 + safeAreaInset.bottom,
                        backgroundColor: 'black',
                    },
                    tabBarLabel: ({children, color}) => {
                        if (children === 'Home') {
                            return (
                                <Text
                                    style={{
                                        color: color,
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                    }}>
                                    홈
                                </Text>
                            );
                        } else if (children === 'Search') {
                            return (
                                <Text
                                    style={{
                                        color: color,
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                    }}>
                                    검색
                                </Text>
                            );
                        } else if (children === 'Create') {
                            return (
                                <Text
                                    style={{
                                        color: color,
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                    }}>
                                    만들기
                                </Text>
                            );
                        } else if (children === 'Alarm') {
                            return (
                                <Text
                                    style={{
                                        color: color,
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                    }}>
                                    알림
                                </Text>
                            );
                        }

                        return (
                            <Text
                                style={{
                                    color: color,
                                    fontSize: 14,
                                    fontWeight: 'bold',
                                }}>
                                저장됨
                            </Text>
                        );
                    },
                    tabBarIcon: ({focused, size}) => {
                        if (route.name === 'Home') {
                            return (
                                <Foundation
                                    size={size + 8}
                                    name="home"
                                    color={focused ? 'white' : '#7F7D80'}
                                />
                            );
                        } else if (route.name === 'Search') {
                            return (
                                <FontAwesome
                                    name="search"
                                    size={size + 5}
                                    color={focused ? 'white' : '#7F7D80'}
                                />
                            );
                        } else if (route.name === 'Create') {
                            return (
                                <FontAwesome
                                    name="plus"
                                    size={size + 5}
                                    color={focused ? 'white' : '#7F7D80'}
                                />
                            );
                        } else if (route.name === 'Alarm') {
                            return (
                                <FontAwesome
                                    size={size + 8}
                                    name="commenting"
                                    color={focused ? 'white' : '#7F7D80'}
                                />
                            );
                        } else {
                            return (
                                <Ionicons
                                    size={size + 8}
                                    name="person"
                                    color={focused ? 'white' : '#7F7D80'}
                                />
                            );
                        }
                    },
                };
            }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen
                name="Create"
                component={Create}
                listeners={({navigation}) => ({
                    tabPress: e => {
                        e.preventDefault();
                        navigation.navigate('CreateModal');
                    },
                })}
            />
            <Tab.Screen name="Alarm" component={Alarm} />
            <Tab.Screen name="My" component={My} />
        </Tab.Navigator>
    );
}
