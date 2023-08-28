import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {MyStackNavigationType} from './MyStack';
import SettingsItem from './SettingsItem';

export default function Settings({
    navigation,
}: {
    navigation: NavigationProp<MyStackNavigationType>;
}) {
    const settings = [
        {
            계정: [
                '프로필 수정하기',
                '계정 관리',
                '프로필 가시성',
                '홈피드 조정',
                '소셜 권한 및 활동',
                '알림',
                '개인정보 보호 및 데이터',
            ],
        },
        {로그인: ['계정 추가', '보안', '베타 테스트 참여하기', '로그아웃']},
        {지원: ['도움 받기', '서비스 약관 보기', '개인정보 보호정책 보기']},
    ];

    return (
        <View style={{backgroundColor: 'black', width: '100%', height: '100%'}}>
            <SafeAreaView style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <View
                        style={{
                            width: '100%',
                            height: 50,
                            marginBottom: 20,
                        }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View
                                style={{
                                    position: 'absolute',
                                    width: 50,
                                    height: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Ionicons
                                    name="close"
                                    size={37}
                                    color={'white'}
                                />
                            </View>
                        </TouchableOpacity>

                        <View
                            style={{
                                width: '60%',
                                height: '100%',
                                position: 'absolute',
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'center',
                            }}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                }}>
                                설정
                            </Text>
                        </View>
                    </View>

                    <ScrollView>
                        {settings.map((item, index) => {
                            const keys = [...Object.keys(item)];
                            const values = [...Object.values(item)];
                            const key = keys[0];
                            const value = values[0];

                            return (
                                <View
                                    key={index}
                                    style={{
                                        flex: 1,
                                        marginBottom: 50,
                                    }}>
                                    <Text
                                        style={{
                                            color: 'white',
                                            fontSize: 16,
                                        }}>
                                        {key}
                                    </Text>

                                    <View style={{flex: 1}}>
                                        {value.map(
                                            (
                                                detailItem: string,
                                                detailIndex: number,
                                            ) => {
                                                return (
                                                    <SettingsItem
                                                        key={detailIndex}
                                                        sectionName={key}
                                                        title={detailItem}
                                                    />
                                                );
                                            },
                                        )}
                                    </View>
                                </View>
                            );
                        })}
                    </ScrollView>
                </View>
            </SafeAreaView>
        </View>
    );
}
