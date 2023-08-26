import {View, Text, Image, Animated, useWindowDimensions} from 'react-native';
import React, {useEffect, useRef} from 'react';
import LoginBtn from './LoginBtn';
import LinearGradient from 'react-native-linear-gradient';
import LoginPopup from './LoginPopup';
import JoinPopup from './JoinPopup';

export default function Login() {
    const {width} = useWindowDimensions();
    const bgYAnim = useRef(new Animated.Value(50)).current;
    const loginPopupYAnim = useRef(new Animated.Value(1000)).current;
    const joinPopupYAnim = useRef(new Animated.Value(1000)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(bgYAnim, {
                toValue: -1000,
                duration: 80000,
                useNativeDriver: false,
            }),
            {
                resetBeforeIteration: true,
            },
        ).start();
    }, [bgYAnim]);

    const imagePath: any = {
        0: require('../../../assets/Background0.png'),
        1: require('../../../assets/Background1.png'),
        2: require('../../../assets/Background2.png'),
        3: require('../../../assets/Background3.png'),
        4: require('../../../assets/Background4.png'),
        5: require('../../../assets/Background5.png'),
        6: require('../../../assets/Background6.png'),
        7: require('../../../assets/Background7.png'),
        8: require('../../../assets/Background8.png'),
        9: require('../../../assets/Background9.png'),
        10: require('../../../assets/Background10.png'),
        11: require('../../../assets/Background11.png'),
        12: require('../../../assets/Background12.png'),
        13: require('../../../assets/Background13.png'),
        14: require('../../../assets/Background14.png'),
        15: require('../../../assets/Background15.png'),
        16: require('../../../assets/Background16.png'),
        17: require('../../../assets/Background17.png'),
        18: require('../../../assets/Background18.png'),
        19: require('../../../assets/Background19.png'),
        20: require('../../../assets/Background20.png'),
        21: require('../../../assets/Background21.png'),
        22: require('../../../assets/Background22.png'),
        23: require('../../../assets/Background23.png'),
        24: require('../../../assets/Background24.png'),
        25: require('../../../assets/Background25.png'),
        26: require('../../../assets/Background26.png'),
        27: require('../../../assets/Background27.png'),
        28: require('../../../assets/Background28.png'),
        29: require('../../../assets/Background29.png'),
        30: require('../../../assets/Background30.png'),
        31: require('../../../assets/Background31.png'),
        32: require('../../../assets/Background32.png'),
        33: require('../../../assets/Background33.png'),
    };

    function onPressLogin() {
        Animated.timing(loginPopupYAnim, {
            toValue: 50,
            duration: 400,
            useNativeDriver: false,
        }).start();
    }

    function onPressJoin() {
        Animated.timing(joinPopupYAnim, {
            toValue: 0,
            duration: 400,
            useNativeDriver: false,
        }).start();
    }

    return (
        <View style={{flex: 1}}>
            <Animated.View
                style={{
                    height: 3000,
                    marginHorizontal: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    transform: [
                        {
                            translateY: bgYAnim,
                        },
                    ],
                }}>
                <View style={{gap: 15}}>
                    {[...Array(11)].map((_, index) => {
                        return (
                            <Image
                                key={index}
                                source={imagePath[index]}
                                style={{
                                    width: (width - 70) / 3,
                                    height:
                                        (width - 70) / 3 +
                                        Math.floor(Math.random() * 50),
                                    borderRadius: 10,
                                }}
                            />
                        );
                    })}
                </View>

                <View style={{gap: 15}}>
                    {[...Array(11)].map((_, index) => {
                        return (
                            <Image
                                key={index + 10}
                                source={imagePath[index + 10]}
                                style={{
                                    width: (width - 70) / 3,
                                    height:
                                        (width - 70) / 3 +
                                        Math.floor(Math.random() * 60),
                                    borderRadius: 10,
                                }}
                            />
                        );
                    })}
                </View>

                <View style={{gap: 15}}>
                    {[...Array(11)].map((_, index) => {
                        return (
                            <Image
                                key={index + 20}
                                source={imagePath[index + 20]}
                                style={{
                                    width: (width - 70) / 3,
                                    height:
                                        (width - 70) / 3 +
                                        Math.floor(Math.random() * 40),
                                    borderRadius: 10,
                                }}
                            />
                        );
                    })}
                </View>
            </Animated.View>

            <LinearGradient
                colors={[
                    '#00000000',
                    '#00000060',
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
                    zIndex: 2,
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
                        onPress={onPressJoin}
                    />
                    <LoginBtn
                        bgColor="white"
                        textColor="black"
                        title="로그인"
                        style={{marginBottom: 20}}
                        onPress={onPressLogin}
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

            <LoginPopup loginPopupYAnim={loginPopupYAnim} />
            <JoinPopup joinPopupYAnim={joinPopupYAnim} />
        </View>
    );
}
