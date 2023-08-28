import {View, Text, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Search() {
    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
            <TouchableWithoutFeedback>
                <View
                    style={{
                        width: '100%',
                        height: 50,
                        marginTop: 15,
                        backgroundColor: '#211F20',
                        borderRadius: 100,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: 15,
                    }}>
                    <View
                        style={{
                            flex: 3,
                            gap: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <FontAwesome
                            name="search"
                            size={20}
                            color={'#979497'}
                        />

                        <Text style={{color: '#7C797B', fontSize: 18}}>
                            Pinterest 검색
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                        }}>
                        <FontAwesome
                            name="camera"
                            size={20}
                            color={'#979497'}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}
