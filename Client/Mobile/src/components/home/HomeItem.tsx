import React from 'react';
import {Image, View, useWindowDimensions} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeItem({image}: {image: any}) {
    const {width} = useWindowDimensions();
    const randomHeight = width / 2 - 10 + Math.floor(Math.random() * 100);

    return (
        <View>
            <View>
                <Image
                    source={image}
                    style={{
                        width: width / 2 - 10,
                        height: randomHeight,
                        borderRadius: 15,
                    }}
                />
            </View>

            <View
                style={{
                    width: width / 2 - 10,
                    paddingVertical: 5,
                    paddingRight: 5,
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                }}>
                <MaterialCommunityIcons
                    name="dots-horizontal"
                    color={'white'}
                    size={20}
                />
            </View>
        </View>
    );
}
