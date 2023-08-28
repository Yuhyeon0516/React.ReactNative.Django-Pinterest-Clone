import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    useWindowDimensions,
    Image,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Alarm() {
    const {width} = useWindowDimensions();

    return (
        <SafeAreaView style={{flex: 1}}>
            <View
                style={{
                    width: '100%',
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}>
                <View
                    style={{
                        width: '20%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{color: 'black', fontSize: 16}}>업데이트</Text>
                </View>

                <View
                    style={{
                        width: '20%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{color: 'white', fontSize: 16}}>메시지</Text>
                </View>

                <View
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
                                translateX: ((-width / 100) * 20) / 2,
                            },
                        ],
                    }}
                />
            </View>

            <View
                style={{
                    height: '100%',
                    width: width * 2,
                    flexDirection: 'row',
                    transform: [
                        {
                            translateX: -width,
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
            </View>
        </SafeAreaView>
    );
}
