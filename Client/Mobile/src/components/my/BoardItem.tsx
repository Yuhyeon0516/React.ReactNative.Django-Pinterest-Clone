import React from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import {BoardType} from './My';

export default function BoardItem({item}: {item: BoardType}) {
    const {width} = useWindowDimensions();

    return (
        <View style={{gap: 10}}>
            <View
                style={{
                    width: width * 0.5 - 20,
                    height: width * 0.4,
                    backgroundColor: '#211F20',
                    borderRadius: 20,
                }}
            />
            <View style={{paddingLeft: 10, gap: 10}}>
                <Text style={{color: 'white'}}>{item.board_name}</Text>
                <View style={{flexDirection: 'row', gap: 10}}>
                    <Text style={{color: 'white'}}>핀 0개</Text>
                    <Text style={{color: '#646464'}}>방금</Text>
                </View>
            </View>
        </View>
    );
}
