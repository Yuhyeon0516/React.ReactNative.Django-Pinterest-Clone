import {View, Text, TextInput} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

export default function SecondSeq({
    password,
    setPassword,
}: {
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
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
        </>
    );
}
