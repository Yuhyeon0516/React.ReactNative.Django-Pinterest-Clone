import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import HomeItem from './HomeItem';

export default function Home() {
    const imagePath: any = {
        0: require('../../../assets/background/Background0.png'),
        1: require('../../../assets/background/Background1.png'),
        2: require('../../../assets/background/Background2.png'),
        3: require('../../../assets/background/Background3.png'),
        4: require('../../../assets/background/Background4.png'),
        5: require('../../../assets/background/Background5.png'),
        6: require('../../../assets/background/Background6.png'),
        7: require('../../../assets/background/Background7.png'),
        8: require('../../../assets/background/Background8.png'),
        9: require('../../../assets/background/Background9.png'),
        10: require('../../../assets/background/Background10.png'),
        11: require('../../../assets/background/Background11.png'),
        12: require('../../../assets/background/Background12.png'),
        13: require('../../../assets/background/Background13.png'),
        14: require('../../../assets/background/Background14.png'),
        15: require('../../../assets/background/Background15.png'),
        16: require('../../../assets/background/Background16.png'),
        17: require('../../../assets/background/Background17.png'),
        18: require('../../../assets/background/Background18.png'),
        19: require('../../../assets/background/Background19.png'),
        20: require('../../../assets/background/Background20.png'),
        21: require('../../../assets/background/Background21.png'),
        22: require('../../../assets/background/Background22.png'),
        23: require('../../../assets/background/Background23.png'),
        24: require('../../../assets/background/Background24.png'),
        25: require('../../../assets/background/Background25.png'),
        26: require('../../../assets/background/Background26.png'),
        27: require('../../../assets/background/Background27.png'),
        28: require('../../../assets/background/Background28.png'),
        29: require('../../../assets/background/Background29.png'),
        30: require('../../../assets/background/Background30.png'),
        31: require('../../../assets/background/Background31.png'),
        32: require('../../../assets/background/Background32.png'),
        33: require('../../../assets/background/Background33.png'),
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            <View
                style={{
                    width: '100%',
                    marginTop: 5,
                    marginBottom: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <View
                    style={{borderBottomColor: 'white', borderBottomWidth: 2}}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 18,
                            fontWeight: 'bold',
                            paddingBottom: 5,
                        }}>
                        모두
                    </Text>
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
                style={{
                    marginHorizontal: 5,
                    height: 1000,
                }}>
                <View>
                    {[...Array(10)].map((_, index) => {
                        return (
                            <HomeItem key={index} image={imagePath[index]} />
                        );
                    })}
                </View>
                <View>
                    {[...Array(10)].map((_, index) => {
                        return (
                            <HomeItem
                                key={index + 10}
                                image={imagePath[index + 10]}
                            />
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
