import {View, Text, useWindowDimensions, ScrollView} from 'react-native';
import React from 'react';
import LoginBtn from './LoginBtn';

export default function SixthSeq({onPressNext}: {onPressNext: () => void}) {
    const {width} = useWindowDimensions();

    return (
        <View
            style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                paddingHorizontal: 5,
            }}>
            <Text
                style={{
                    color: 'white',
                    fontSize: 24,
                    fontWeight: 'bold',
                }}>
                어떤 것에 관심이 있으세요?
            </Text>

            <Text
                style={{
                    color: 'white',
                    fontSize: 18,
                    textAlign: 'center',
                    marginBottom: 20,
                }}>
                홈피드를 사용자 지정할 수 있도록 5개를 골라주세요
            </Text>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{width: '100%'}}>
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <View style={{gap: 10}}>
                        {[...Array(10)].map((item, index) => {
                            return (
                                <View
                                    key={index}
                                    style={{gap: 10, marginBottom: 5}}>
                                    <View
                                        style={{
                                            width: (width - 30) / 3,
                                            height: (width - 30) / 3,
                                            backgroundColor: 'white',
                                            borderRadius: 10,
                                        }}
                                    />
                                    <Text
                                        style={{
                                            color: 'white',
                                            textAlign: 'center',
                                        }}>
                                        {index}
                                    </Text>
                                </View>
                            );
                        })}
                    </View>

                    <View style={{gap: 10}}>
                        {[...Array(10)].map((item, index) => {
                            return (
                                <View
                                    key={index}
                                    style={{gap: 10, marginBottom: 5}}>
                                    <View
                                        style={{
                                            width: (width - 30) / 3,
                                            height: (width - 30) / 3,
                                            backgroundColor: 'white',
                                            borderRadius: 10,
                                        }}
                                    />
                                    <Text
                                        style={{
                                            color: 'white',
                                            textAlign: 'center',
                                        }}>
                                        {index}
                                    </Text>
                                </View>
                            );
                        })}
                    </View>

                    <View style={{gap: 10}}>
                        {[...Array(10)].map((item, index) => {
                            return (
                                <View
                                    key={index}
                                    style={{gap: 10, marginBottom: 5}}>
                                    <View
                                        style={{
                                            width: (width - 30) / 3,
                                            height: (width - 30) / 3,
                                            backgroundColor: 'white',
                                            borderRadius: 10,
                                        }}
                                    />
                                    <Text
                                        style={{
                                            color: 'white',
                                            textAlign: 'center',
                                        }}>
                                        {index}
                                    </Text>
                                </View>
                            );
                        })}
                    </View>
                </View>
            </ScrollView>

            <View
                style={{
                    width: '100%',
                    height: 50,
                    position: 'absolute',
                    alignItems: 'center',
                    bottom: 0 + 160,
                }}>
                <LoginBtn
                    bgColor="red"
                    textColor="white"
                    title="가입"
                    onPress={onPressNext}
                />
            </View>
        </View>
    );
}
