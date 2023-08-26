import {View, Text, useWindowDimensions, ScrollView, Image} from 'react-native';
import React from 'react';
import LoginBtn from './LoginBtn';

export default function SixthSeq({onPressNext}: {onPressNext: () => void}) {
    const {width} = useWindowDimensions();

    const data = [
        {
            text: '배경화면',
            image: require('../../../assets/join/background.png'),
        },
        {text: '동물', image: require('../../../assets/join/animal.png')},
        {text: '고양이', image: require('../../../assets/join/cat.png')},
        {
            text: '남자 스타일',
            image: require('../../../assets/join/man_style.png'),
        },
        {
            text: '인테리어 디자인',
            image: require('../../../assets/join/interior.png'),
        },
        {text: '거리예술', image: require('../../../assets/join/load.png')},
        {text: '자동차', image: require('../../../assets/join/car.png')},
        {
            text: '남자 헤어스타일',
            image: require('../../../assets/join/man_hair.png'),
        },
        {text: '여행', image: require('../../../assets/join/travel.png')},
        {text: '인용구', image: require('../../../assets/join/quote.png')},
        {text: '사진', image: require('../../../assets/join/photo.png')},
        {text: '연예인', image: require('../../../assets/join/celebrity.png')},
        {
            text: '여성 패션',
            image: require('../../../assets/join/women_fashion.png'),
        },
        {
            text: '그래픽 디자인',
            image: require('../../../assets/join/graphic_design.png'),
        },
        {text: '만화', image: require('../../../assets/join/comic.png')},
        {text: '디자인', image: require('../../../assets/join/design.png')},
        {text: '마블', image: require('../../../assets/join/marble.png')},
        {text: '메이크업', image: require('../../../assets/join/makeup.png')},
        {
            text: '비디오 게임',
            image: require('../../../assets/join/video_game.png'),
        },
        {
            text: '집 건축',
            image: require('../../../assets/join/construction.png'),
        },
        {
            text: '일본 애니메이션',
            image: require('../../../assets/join/animation.png'),
        },
        {text: '예술', image: require('../../../assets/join/art.png')},
        {
            text: '캐릭터 그리기',
            image: require('../../../assets/join/character_drawing.png'),
        },
        {text: '축구', image: require('../../../assets/join/soccer.png')},
        {
            text: '일러스트레이션',
            image: require('../../../assets/join/illustration.png'),
        },
        {text: '영화', image: require('../../../assets/join/movie.png')},
        {text: '그림', image: require('../../../assets/join/painting.png')},
        {text: '스포츠', image: require('../../../assets/join/sport.png')},
        {
            text: '헤어스타일',
            image: require('../../../assets/join/hair_style.png'),
        },
        {text: '디저트', image: require('../../../assets/join/dessert.png')},
    ];

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
                어떤 것에 관심이 있으세요?
            </Text>

            <Text
                style={{
                    color: 'white',
                    fontSize: 18,
                    textAlign: 'center',
                    marginBottom: 20,
                }}>
                홈피드를 사용자 지정할 수 있도록 5개를 골라주세요
            </Text>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{width: '100%'}}>
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <View style={{gap: 10}}>
                        {[...Array(10)].map((_, index) => {
                            return (
                                <View
                                    key={index}
                                    style={{gap: 10, marginBottom: 5}}>
                                    <Image
                                        source={data[index].image}
                                        style={{
                                            width: (width - 30) / 3,
                                            height: (width - 30) / 3,
                                            backgroundColor: 'white',
                                            borderRadius: 10,
                                        }}
                                    />
                                    <Text
                                        style={{
                                            color: 'white',
                                            textAlign: 'center',
                                        }}>
                                        {data[index].text}
                                    </Text>
                                </View>
                            );
                        })}
                    </View>

                    <View style={{gap: 10}}>
                        {[...Array(10)].map((_, index) => {
                            return (
                                <View
                                    key={index + 10}
                                    style={{gap: 10, marginBottom: 5}}>
                                    <Image
                                        source={data[index + 10].image}
                                        style={{
                                            width: (width - 30) / 3,
                                            height: (width - 30) / 3,
                                            backgroundColor: 'white',
                                            borderRadius: 10,
                                        }}
                                    />
                                    <Text
                                        style={{
                                            color: 'white',
                                            textAlign: 'center',
                                        }}>
                                        {data[index + 10].text}
                                    </Text>
                                </View>
                            );
                        })}
                    </View>

                    <View style={{gap: 10}}>
                        {[...Array(10)].map((_, index) => {
                            return (
                                <View
                                    key={index + 20}
                                    style={{gap: 10, marginBottom: 5}}>
                                    <Image
                                        source={data[index + 20].image}
                                        style={{
                                            width: (width - 30) / 3,
                                            height: (width - 30) / 3,
                                            backgroundColor: 'white',
                                            borderRadius: 10,
                                        }}
                                    />
                                    <Text
                                        style={{
                                            color: 'white',
                                            textAlign: 'center',
                                        }}>
                                        {data[index + 20].text}
                                    </Text>
                                </View>
                            );
                        })}
                    </View>
                </View>

                <View style={{height: 250}} />
            </ScrollView>

            <View
                style={{
                    width: '100%',
                    height: 50,
                    position: 'absolute',
                    alignItems: 'center',
                    bottom: 0 + 160,
                }}>
                <LoginBtn
                    bgColor="red"
                    textColor="white"
                    title="가입"
                    onPress={onPressNext}
                />
            </View>
        </View>
    );
}
