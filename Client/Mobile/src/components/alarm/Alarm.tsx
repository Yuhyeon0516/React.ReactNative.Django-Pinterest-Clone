import React, {useRef, useState} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    useWindowDimensions,
    Image,
    Animated,
    PanResponder,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Alarm() {
    const {width} = useWindowDimensions();
    const [location, setLocation] = useState<'update' | 'message'>('update');
    const xAnim = useRef(new Animated.Value(0)).current;
    const panRes = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gestureState) => {
            const {dx} = gestureState;

            if (location === 'update') {
                console.log(-dx / width);
                xAnim.setValue(-dx / width);
            } else {
                xAnim.setValue(1 - dx / width);
            }
        },
        onPanResponderEnd: (_, gestureState) => {
            const {dx} = gestureState;

            if (dx < -120) {
                Animated.timing(xAnim, {
                    toValue: 1,
                    duration: 400,
                    useNativeDriver: false,
                }).start();

                setLocation('message');
            } else if (dx < 0 && dx > -120) {
                const value = location === 'update' ? 0 : 1;

                Animated.timing(xAnim, {
                    toValue: value,
                    duration: 400,
                    useNativeDriver: false,
                }).start();
            }

            if (dx > 120) {
                Animated.timing(xAnim, {
                    toValue: 0,
                    duration: 400,
                    useNativeDriver: false,
                }).start();

                setLocation('update');
            } else if (dx > 0 && dx < 120) {
                const value = location === 'update' ? 0 : 1;

                Animated.timing(xAnim, {
                    toValue: value,
                    duration: 400,
                    useNativeDriver: false,
                }).start();
            }
        },
    });

    return (
        <SafeAreaView style={{flex: 1}}>
            <View
                style={{
                    width: '100%',
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: 15,
                }}>
                <View
                    style={{
                        width: '20%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text
                        style={{
                            color: location === 'update' ? 'black' : 'white',
                            fontSize: 16,
                        }}>
                        업데이트
                    </Text>
                </View>

                <View
                    style={{
                        width: '20%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text
                        style={{
                            color: location === 'message' ? 'black' : 'white',
                            fontSize: 16,
                        }}>
                        메시지
                    </Text>
                </View>

                <Animated.View
                    style={{
                        position: 'absolute',
                        alignSelf: 'center',
                        width: '22%',
                        height: 50,
                        borderRadius: 30,
                        backgroundColor: 'white',
                        zIndex: -1,
                        transform: [
                            {
                                translateX: xAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [
                                        ((-width / 100) * 20) / 2,
                                        ((width / 100) * 20) / 2,
                                    ],
                                }),
                            },
                        ],
                    }}
                />
            </View>

            <Animated.View
                {...panRes.panHandlers}
                style={{
                    height: '100%',
                    width: width * 2,
                    flexDirection: 'row',
                    transform: [
                        {
                            translateX: xAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, -width],
                            }),
                        },
                    ],
                    // justifyContent: 'center',
                    // alignItems: 'center',
                }}>
                <View
                    style={{
                        width: '50%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 35,
                        top: -30,
                    }}>
                    <Image
                        source={require('../../../assets/bell.png')}
                        style={{
                            left: -10,
                            width: width / 2,
                            height: width / 2,
                            marginBottom: 30,
                            opacity: 0.8,
                            transform: [
                                {
                                    rotate: '10deg',
                                },
                            ],
                        }}
                    />

                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20,
                            fontWeight: '600',
                            marginBottom: 10,
                        }}>
                        (아직) 아무것도 없습니다!
                    </Text>

                    <Text
                        style={{
                            color: 'white',
                            fontSize: 18,
                            marginBottom: 30,
                        }}>
                        홈피드를 탐색하거나 보드를 만들거나 영감을 주는
                        아이디어가 있는 사람을 팔로잉해보세요.
                    </Text>

                    <View
                        style={{
                            backgroundColor: '#211F21',
                            height: 60,
                            justifyContent: 'center',
                            paddingHorizontal: 20,
                            borderRadius: 30,
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 18,
                            }}>
                            홈피드로 이동
                        </Text>
                    </View>
                </View>

                <View
                    style={{
                        width: '50%',
                        height: '100%',
                    }}>
                    <View
                        style={{
                            width: '100%',
                            paddingHorizontal: 10,
                            paddingTop: 15,
                            gap: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <View
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 100,
                                backgroundColor: 'red',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <MaterialCommunityIcons
                                name="square-edit-outline"
                                color={'white'}
                                size={30}
                                style={{margin: 10}}
                            />
                        </View>

                        <View
                            style={{
                                justifyContent: 'center',
                            }}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                }}>
                                새 메시지
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{
                            width: '100%',
                            paddingHorizontal: 10,
                            paddingTop: 15,
                            gap: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <View
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 100,
                                backgroundColor: '#DBD8DD',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Ionicons
                                name="person-add-sharp"
                                color={'black'}
                                size={25}
                                style={{margin: 10}}
                            />
                        </View>

                        <View>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                }}>
                                친구 초대
                            </Text>

                            <Text style={{color: 'white', fontSize: 16}}>
                                연결하여 채팅을 시작하세요.
                            </Text>
                        </View>
                    </View>
                </View>
            </Animated.View>
        </SafeAreaView>
    );
}
