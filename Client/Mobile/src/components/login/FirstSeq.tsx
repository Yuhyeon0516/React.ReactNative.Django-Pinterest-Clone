import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginBtn from './LoginBtn';

export default function FirstSeq({
    email,
    setEmail,
    onPressNext,
}: {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
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
                    이메일 주소를 알려주세요.
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
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        placeholder="이메일 주소를 입력합니다."
                        placeholderTextColor={'#585658'}
                        style={{
                            fontSize: 20,
                            marginLeft: 12,
                            color: 'white',
                        }}
                    />

                    <Ionicons
                        name="close"
                        size={37}
                        color={'white'}
                        style={{marginRight: 12}}
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
