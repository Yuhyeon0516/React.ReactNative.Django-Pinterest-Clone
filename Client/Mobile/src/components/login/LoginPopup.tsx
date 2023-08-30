import {
    View,
    Text,
    Animated,
    useWindowDimensions,
    TouchableWithoutFeedback,
    TextInput,
    Platform,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginBtn from './LoginBtn';
import useDjango from '../../hooks/useDjango';

const TEXT_INPUT_GAP = Platform.OS === 'ios' ? 7 : -7;

export default function LoginPopup({
    loginPopupYAnim,
}: {
    loginPopupYAnim: Animated.Value;
}) {
    const {height} = useWindowDimensions();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {attemptingLogin} = useDjango();

    function onPressClose() {
        Animated.timing(loginPopupYAnim, {
            toValue: 1000,
            duration: 400,
            useNativeDriver: false,
        }).start();
    }

    return (
        <Animated.View
            style={{
                width: '100%',
                height: height,
                position: 'absolute',
                top: 0,
                zIndex: 3,
                backgroundColor: 'black',
                transform: [
                    {
                        translateY: loginPopupYAnim,
                    },
                ],
            }}>
            <SafeAreaView>
                <View
                    style={{
                        width: '100%',
                        height: 50,
                        justifyContent: 'center',
                        marginBottom: 20,
                    }}>
                    <View
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            padding: 10,
                        }}>
                        <TouchableOpacity
                            onPress={onPressClose}
                            hitSlop={{top: 7, left: 7, right: 7, bottom: 7}}>
                            <Ionicons size={25} color={'white'} name="close" />
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '60%',
                            alignSelf: 'center',
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 16,
                            }}>
                            로그인
                        </Text>
                    </View>
                </View>

                <View
                    style={{
                        width: '100%',
                        alignItems: 'center',
                        gap: 10,
                    }}>
                    <LoginBtn
                        bgColor="#2E4485"
                        title="Facebook으로 계속하기"
                        textColor="white"
                    />

                    <LoginBtn
                        bgColor="#346DF2"
                        title="Google로 계속하기"
                        textColor="white"
                    />

                    <TouchableWithoutFeedback>
                        <View
                            style={[
                                {
                                    backgroundColor: 'white',
                                    width: '90%',
                                    height: 50,
                                    paddingVertical: 10,
                                    borderRadius: 30,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                },
                            ]}>
                            <Ionicons
                                name="logo-apple"
                                size={16}
                                color={'black'}
                            />
                            <View style={{width: 5}} />
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: 'black',
                                }}>
                                Apple로 계속하기
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        marginVertical: 25,
                    }}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 16,
                            fontWeight: 'bold',
                        }}>
                        또는
                    </Text>
                </View>

                <View
                    style={{
                        width: '100%',
                        height: 70,
                        paddingHorizontal: 10,
                        gap: TEXT_INPUT_GAP,
                        marginBottom: 20,
                    }}>
                    <Text style={{color: '#e0e0e0', fontSize: 16}}>이메일</Text>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        placeholder="이메일을 입력하세요"
                        placeholderTextColor={'#7b7b7b'}
                        style={{
                            fontSize: 30,
                            color: '#7b7b7b',
                        }}
                    />
                </View>

                <View
                    style={{
                        width: '100%',
                        height: 70,
                        paddingHorizontal: 10,
                        gap: TEXT_INPUT_GAP,
                    }}>
                    <Text style={{color: '#e0e0e0', fontSize: 16}}>
                        비밀번호
                    </Text>
                    <View
                        style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <TextInput
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                            placeholder="비밀번호를 입력하세요"
                            placeholderTextColor={'#7b7b7b'}
                            style={{
                                fontSize: 30,
                                color: '#7b7b7b',
                            }}
                        />

                        <Ionicons name="eye" color={'#7b7b7b'} size={30} />
                    </View>

                    <View style={{alignItems: 'center', marginVertical: 25}}>
                        <LoginBtn
                            bgColor="red"
                            title="로그인"
                            textColor="white"
                            onPress={() => {
                                attemptingLogin(email, password);
                            }}
                        />
                    </View>

                    <View style={{alignItems: 'center', gap: 20}}>
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 16,
                            }}>
                            비밀번호를 잊으셨나요?
                        </Text>
                        {Platform.OS === 'ios' && (
                            <Text
                                style={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                }}>
                                iCloud 키체인 사용하기
                            </Text>
                        )}
                    </View>
                </View>
            </SafeAreaView>
        </Animated.View>
    );
}
