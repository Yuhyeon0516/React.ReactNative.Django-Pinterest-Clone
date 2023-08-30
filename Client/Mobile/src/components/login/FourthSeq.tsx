import {View, Text} from 'react-native';
import React from 'react';
import LoginBtn from './LoginBtn';

export default function FourthSeq({
    setGender,
    onPressNext,
}: {
    setGender: React.Dispatch<React.SetStateAction<string>>;
    onPressNext: () => void;
}) {
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
                성별을 선택하세요.
            </Text>

            <Text
                style={{
                    color: 'white',
                    fontSize: 20,
                    textAlign: 'center',
                    marginBottom: 20,
                }}>
                관련성이 더 높은 콘텐츠를 찾을 수 있습니다. 프로필에는 표시되지
                않습니다.
            </Text>

            <LoginBtn
                bgColor="black"
                title="여성"
                textColor="white"
                style={{borderColor: 'white', borderWidth: 1.5}}
                onPress={() => {
                    setGender('여성');
                    onPressNext();
                }}
            />

            <LoginBtn
                bgColor="black"
                title="남성"
                textColor="white"
                style={{borderColor: 'white', borderWidth: 1.5}}
                onPress={() => {
                    setGender('남성');
                    onPressNext();
                }}
            />

            <LoginBtn
                bgColor="black"
                title="다른 항목 입력"
                textColor="white"
                style={{borderColor: 'white', borderWidth: 1.5}}
                onPress={onPressNext}
            />
        </View>
    );
}
