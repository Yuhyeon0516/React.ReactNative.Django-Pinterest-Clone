import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StackNavigationType} from '../Stack';

export default function SettingsItem({
    sectionName,
    title,
}: {
    sectionName: string;
    title: string;
}) {
    const iconName =
        sectionName === '지원' ? 'arrow-outward' : 'arrow-forward-ios';

    const navigation = useNavigation<NavigationProp<StackNavigationType>>();

    function onPressLogout() {
        AsyncStorage.removeItem('Token');
        navigation.navigate('Login');
    }

    return (
        <TouchableOpacity
            onPress={onPressLogout}
            style={{
                width: '100%',
                height: 50,

                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingHorizontal: 10,
            }}>
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}>
                    {title}
                </Text>
            </View>

            <View
                style={{
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                {title !== '베타 테스트 참여하기' && title !== '로그아웃' && (
                    <MaterialIcons name={iconName} size={25} color={'white'} />
                )}
            </View>
        </TouchableOpacity>
    );
}
