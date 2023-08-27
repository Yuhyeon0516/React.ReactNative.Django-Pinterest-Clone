import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StackNavigationType} from '../Stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CreateModal({
    navigation,
}: {
    navigation: NativeStackNavigationProp<StackNavigationType>;
}) {
    const safeInsetArea = useSafeAreaInsets();
    const {width, height} = useWindowDimensions();

    return (
        <View
            style={{
                width: '100%',
                height: Platform.OS === 'ios' ? '27%' : '32%',
                backgroundColor: '#211F20',
                position: 'absolute',
                bottom: 0,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                alignItems: 'center',
            }}>
            <View style={{width: '100%', height: 50}}>
                <View
                    style={{
                        width: '100%',
                        height: 50,
                        position: 'absolute',
                        justifyContent: 'center',
                        marginTop: 7,
                        marginLeft: 7,
                    }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        hitSlop={{top: 5, left: 5, right: 5, bottom: 5}}>
                        <Ionicons name="close" size={30} color={'white'} />
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        width: '60%',
                        height: 50,
                        alignSelf: 'center',
                        position: 'absolute',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 7,
                    }}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 16,
                            fontWeight: '600',
                        }}>
                        지금 만들어 보기
                    </Text>
                </View>
            </View>

            <View
                style={{
                    width: '100%',
                    height: (height / 100) * 25 - safeInsetArea.bottom,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 60,
                    paddingTop: 10,
                }}>
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                    <View
                        style={{
                            width: width / 5,
                            height: '80%',
                        }}>
                        <View
                            style={{
                                width: '100%',
                                height: '60%',
                                backgroundColor: '#3C3A3D',
                                borderRadius: 15,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 10,
                            }}>
                            <Ionicons name="copy" color={'white'} size={30} />
                        </View>

                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontWeight: 'bold',
                            }}>
                            아이디어 핀
                        </Text>
                    </View>

                    <View
                        style={{
                            width: width / 5,
                            height: '80%',
                        }}>
                        <View
                            style={{
                                width: '100%',
                                height: '60%',
                                backgroundColor: '#3C3A3D',
                                borderRadius: 15,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 10,
                            }}>
                            <MaterialCommunityIcons
                                name="pin"
                                color={'white'}
                                size={30}
                            />
                        </View>

                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontWeight: 'bold',
                            }}>
                            핀
                        </Text>
                    </View>

                    <View
                        style={{
                            width: width / 5,
                            height: '80%',
                        }}>
                        <View
                            style={{
                                width: '100%',
                                height: '60%',
                                backgroundColor: '#3C3A3D',
                                borderRadius: 15,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 10,
                            }}>
                            <MaterialCommunityIcons
                                name="view-dashboard"
                                color={'white'}
                                size={30}
                            />
                        </View>

                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontWeight: 'bold',
                            }}>
                            보드
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
