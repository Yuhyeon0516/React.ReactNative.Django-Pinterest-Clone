import {View, Text, KeyboardAvoidingView, Platform} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LoginBtn from './LoginBtn';

export default function FifthSeq({onPressNext}: {onPressNext: () => void}) {
    return (
        <>
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
                    어디에 사세요?
                </Text>

                <Text
                    style={{
                        color: 'white',
                        fontSize: 20,
                        textAlign: 'center',
                        marginBottom: 20,
                    }}>
                    관련성이 더 높은 콘텐츠를 찾을 수 있습니다. 프로필에는
                    표시되지 않습니다.
                </Text>

                <View
                    style={[
                        {
                            backgroundColor: 'black',
                            width: '95%',
                            height: 50,
                            paddingVertical: 10,
                            borderRadius: 30,
                            borderWidth: 1.5,
                            borderColor: 'white',
                            flexDirection: 'row',
                            padding: 15,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        },
                    ]}>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: 'white',
                        }}>
                        대한민국
                    </Text>

                    <MaterialIcons
                        name="arrow-forward-ios"
                        color={'white'}
                        size={20}
                    />
                </View>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={40}
                style={{
                    width: '100%',
                    height: '60%',
                    justifyContent: 'flex-end',
                }}>
                <View
                    style={{
                        width: '100%',
                        alignItems: 'center',
                    }}>
                    <LoginBtn
                        bgColor="red"
                        title="다음"
                        textColor="white"
                        onPress={onPressNext}
                    />
                </View>
            </KeyboardAvoidingView>
        </>
    );
}
