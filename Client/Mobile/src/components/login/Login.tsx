import {View, Text, Image} from 'react-native';
import React from 'react';
import LoginBtn from './LoginBtn';
import LinearGradient from 'react-native-linear-gradient';

export default function Login() {
    return (
        <View style={{flex: 1}}>
            <Image
                source={require('../../../assets/Background.png')}
                style={{width: '100%', height: '100%', position: 'absolute'}}
            />

            <LinearGradient
                colors={[
                    '#00000000',
                    '#00000090',
                    '#000000',
                    '#000000',
                    '#000000',
                    '#000000',
                    '#000000',
                    '#000000',
                    '#000000',
                ]}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '53%',
                    bottom: 0,
                    zIndex: 10,
                    paddingVertical: 10,
                }}>
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Image
                        source={require('../../../assets/MobileLogo.png')}
                        style={{width: 80, height: 80, marginBottom: 20}}
                    />

                    <Text
                        style={{
                            fontSize: 26,
                            fontWeight: 'bold',
                            color: 'white',
                            marginHorizontal: 5,
                            marginBottom: 30,
                        }}>
                        Pinterest에 오신 것을 환영합니다
                    </Text>

                    <LoginBtn
                        bgColor="red"
                        textColor="white"
                        title="가입"
                        style={{marginBottom: 10}}
                    />
                    <LoginBtn
                        bgColor="white"
                        textColor="black"
                        title="로그인"
                        style={{marginBottom: 20}}
                    />

                    <Text
                        style={{
                            marginHorizontal: 10,
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 12,
                            fontWeight: 'bold',
                        }}>
                        계속 진행하면 Pinterest 서비스 약관에 동의하고 개인정보
                        보호정책을 읽었음을 인정하는 것으로 간주됩니다. 컬렉션
                        알림
                    </Text>
                </View>
            </LinearGradient>
        </View>
    );
}
