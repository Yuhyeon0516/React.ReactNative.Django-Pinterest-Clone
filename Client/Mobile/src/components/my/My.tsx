import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    useWindowDimensions,
    TouchableOpacity,
    Animated,
    TouchableWithoutFeedback,
    PanResponder,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {TabParam} from '../main/MainTab';
import {MyStackNavigationType} from './MyStack';

export default function My({
    navigation,
}: {
    navigation: NavigationProp<TabParam>;
}) {
    const {width} = useWindowDimensions();
    const [selectSection, setSelectSection] = useState<'Community' | 'Board'>(
        'Community',
    );

    const sectionAnim = useRef(new Animated.Value(0)).current;
    const scrollAnim = useRef(new Animated.Value(0)).current;
    const scrollRef = useRef<ScrollView | null>(null);
    const myNavigation = useNavigation<NavigationProp<MyStackNavigationType>>();

    const panRes = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gestureState) => {
            const {dx} = gestureState;

            if (selectSection === 'Community') {
                sectionAnim.setValue(-dx / width);
            } else {
                sectionAnim.setValue(1 - dx / width);
            }
        },
        onPanResponderEnd: (_, gestureState) => {
            const {dx} = gestureState;

            if (dx < -120) {
                onPressBoard();
            } else if (dx < 0 && dx > -120) {
                const value = selectSection === 'Community' ? 0 : 1;

                Animated.timing(sectionAnim, {
                    toValue: value,
                    duration: 400,
                    useNativeDriver: false,
                }).start();
            }

            if (dx > 120) {
                onPressCommunity();
            } else if (dx > 0 && dx < 120) {
                const value = selectSection === 'Community' ? 0 : 1;

                Animated.timing(sectionAnim, {
                    toValue: value,
                    duration: 400,
                    useNativeDriver: false,
                }).start();
            }
        },
    });

    function onPressCommunity() {
        Animated.timing(sectionAnim, {
            toValue: 0,
            duration: 400,
            useNativeDriver: false,
        }).start(({finished}) => {
            if (finished) {
                setSelectSection('Community');
                scrollRef.current!.scrollTo({x: 0, y: 440, animated: true});
            }
        });
    }

    function onPressBoard() {
        Animated.timing(sectionAnim, {
            toValue: 1,
            duration: 400,
            useNativeDriver: false,
        }).start(({finished}) => {
            if (finished) {
                setSelectSection('Board');
                scrollRef.current!.scrollTo({x: 0, y: 440, animated: true});
            }
        });
    }

    return (
        <View style={{backgroundColor: 'black', flex: 1}}>
            <SafeAreaView style={{flex: 1}}>
                <ScrollView
                    ref={scrollRef}
                    stickyHeaderIndices={[2]}
                    scrollEventThrottle={1}
                    onScroll={e => {
                        scrollAnim.setValue(e.nativeEvent.contentOffset.y);
                    }}>
                    <View
                        style={{
                            width: '100%',
                            height: 50,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            paddingHorizontal: 10,
                            gap: 15,
                        }}>
                        <Ionicons
                            name="share-outline"
                            color={'white'}
                            size={30}
                        />

                        <TouchableWithoutFeedback
                            onPress={() => myNavigation.navigate('settings')}>
                            <Ionicons
                                name="settings-outline"
                                color={'white'}
                                size={30}
                            />
                        </TouchableWithoutFeedback>
                    </View>

                    <View
                        style={{
                            width: '100%',
                            height: 400,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <View
                            style={{
                                width: width * 0.33,
                                height: width * 0.33,
                                backgroundColor: '#434043',
                                borderRadius: 100,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 10,
                            }}>
                            <Text
                                style={{
                                    fontSize: 32,
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    color: 'white',
                                }}>
                                김
                            </Text>
                        </View>

                        <Text
                            style={{
                                textAlign: 'center',
                                color: 'white',
                                fontSize: 32,
                                fontWeight: 'bold',
                                marginBottom: 15,
                            }}>
                            김유현
                        </Text>

                        <Text
                            style={{
                                textAlign: 'center',
                                marginBottom: 15,
                                color: '#7D7A7E',
                                fontSize: 16,
                            }}>
                            @rladbgus0516
                        </Text>

                        <Text
                            style={{
                                textAlign: 'center',
                                marginBottom: 30,
                                color: 'white',
                                fontSize: 16,
                            }}>
                            팔로워 0명 ・ 팔로잉 0건
                        </Text>

                        <View
                            style={{
                                backgroundColor: '#211F20',
                                paddingHorizontal: 20,
                                paddingVertical: 20,
                                borderRadius: 100,
                            }}>
                            <Text style={{fontSize: 16, color: 'white'}}>
                                프로필 수정하기
                            </Text>
                        </View>
                    </View>

                    <View style={{paddingTop: 15}}>
                        <View
                            style={{
                                width: '100%',
                                height: 50,
                                marginBottom: 20,
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 30,
                                flexDirection: 'row',
                                backgroundColor: 'black',
                            }}>
                            <TouchableWithoutFeedback
                                onPress={onPressCommunity}>
                                <View
                                    style={{
                                        height: '100%',
                                        width: 130,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            color: 'white',
                                        }}>
                                        내가 만든 커뮤니티
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={onPressBoard}>
                                <View
                                    style={{
                                        height: '100%',
                                        width: 80,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            color: 'white',
                                        }}>
                                        저장된 보드
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>

                            <Animated.View
                                style={{
                                    width: 50,
                                    height: 50,
                                    backgroundColor: '#434043',
                                    borderRadius: 100,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'absolute',
                                    left: 5,
                                    opacity: scrollAnim.interpolate({
                                        inputRange: [0, 430, 440],
                                        outputRange: [0, 0, 1],
                                    }),
                                }}>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        color: 'white',
                                    }}>
                                    김
                                </Text>
                            </Animated.View>

                            <Animated.View
                                style={{
                                    borderBottomWidth: 3,
                                    borderBottomColor: 'white',
                                    width: sectionAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [130, 80],
                                    }),
                                    height: '80%',
                                    position: 'absolute',
                                    alignSelf: 'center',
                                    transform: [
                                        {
                                            translateX: sectionAnim.interpolate(
                                                {
                                                    inputRange: [0, 1],
                                                    outputRange: [-55, 80],
                                                    extrapolate: 'clamp',
                                                },
                                            ),
                                        },
                                    ],
                                }}
                            />
                        </View>
                    </View>

                    <Animated.View
                        {...panRes.panHandlers}
                        style={{
                            width: width * 2,
                            height: 600,
                            flexDirection: 'row',
                            transform: [
                                {
                                    translateX: sectionAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, -width],
                                    }),
                                },
                            ],
                        }}>
                        <View style={{width: '50%', height: '100%'}}>
                            <View
                                style={{
                                    width: '100%',
                                    paddingHorizontal: 20,
                                    marginTop: 80,
                                    marginBottom: 20,
                                }}>
                                <Text
                                    style={{
                                        fontSize: 24,
                                        fontWeight: '600',
                                        color: 'white',
                                        textAlign: 'center',
                                    }}>
                                    핀으로 영감을 받으세요!
                                </Text>
                            </View>

                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <TouchableOpacity>
                                    <View
                                        style={{
                                            backgroundColor: 'red',
                                            paddingHorizontal: 15,
                                            paddingVertical: 15,
                                            borderRadius: 100,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                color: 'white',
                                                fontWeight: 'bold',
                                            }}>
                                            만들기
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{width: '50%', height: '100%'}}>
                            <View
                                style={{
                                    width: '100%',
                                    paddingHorizontal: 20,
                                    marginVertical: 50,
                                }}>
                                <Text
                                    style={{
                                        fontSize: 24,
                                        fontWeight: '600',
                                        color: '#797678',
                                        textAlign: 'center',
                                    }}>
                                    아직 저장한 아이디어가 없습니다.
                                </Text>
                            </View>

                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate('Search')
                                    }>
                                    <View
                                        style={{
                                            backgroundColor: '#211F20',
                                            paddingHorizontal: 20,
                                            paddingVertical: 20,
                                            borderRadius: 100,
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                color: 'white',
                                            }}>
                                            아이디어 찾기
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Animated.View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
