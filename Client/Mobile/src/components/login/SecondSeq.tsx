import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import LoginBtn from './LoginBtn';

export default function SecondSeq({
    password,
    setPassword,
    onPressNext,
}: {
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    onPressNext: () => void;
}) {
    return (
        <>
            <View
                style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 10,
                }}>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 24,
                        fontWeight: 'bold',
                    }}>
                    비밀번호 생성
                </Text>

                <View
                    style={{
                        marginHorizontal: 10,
                        width: '100%',
                        height: 50,
                        borderRadius: 20,
                        borderColor: 'white',
                        borderWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }}>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                        placeholder="비밀번호를 입력하세요"
                        placeholderTextColor={'#585658'}
                        style={{
                            fontSize: 20,
                            marginLeft: 12,
                            color: 'white',
                        }}
                    />

                    <Entypo
                        name="eye-with-line"
                        size={20}
                        color={'white'}
                        style={{marginRight: 15}}
                    />
                </View>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={40}
                style={{
                    width: '100%',
                    height: '70%',
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
