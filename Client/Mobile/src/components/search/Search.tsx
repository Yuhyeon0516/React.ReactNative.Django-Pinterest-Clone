import {
    View,
    Text,
    SafeAreaView,
    TouchableWithoutFeedback,
    TextInput,
} from 'react-native';
import React, {useRef, useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Search() {
    const [searchBarTab, setSearchBarTab] = useState(false);
    const [searchBarText, setSearchBarText] = useState('');
    const searchBarRef = useRef<TextInput | null>(null);

    function showSearchBar() {
        setSearchBarTab(true);

        setTimeout(() => {
            searchBarRef.current!.focus();
        }, 200);
    }

    function hideSearchBar() {
        setSearchBarTab(false);
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            {searchBarTab ? (
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 15,
                    }}>
                    <View
                        style={{
                            width: '87%',
                            height: 50,
                            backgroundColor: '#211F20',
                            borderRadius: 100,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: 15,
                        }}>
                        <View style={{flex: 7}}>
                            <TextInput
                                ref={searchBarRef}
                                value={searchBarText}
                                onChangeText={setSearchBarText}
                                placeholder="검색"
                                placeholderTextColor={'#7C797B'}
                                style={{color: '#7C797B', fontSize: 18}}
                            />
                        </View>

                        <View style={{flex: 1, alignItems: 'flex-end'}}>
                            <FontAwesome
                                name="camera"
                                size={20}
                                color={'#979497'}
                            />
                        </View>
                    </View>

                    <TouchableWithoutFeedback onPress={hideSearchBar}>
                        <View
                            style={{
                                width: '13%',
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: 'white',
                                    textAlign: 'center',
                                    alignSelf: 'center',
                                }}>
                                취소
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            ) : (
                <View style={{flex: 1, alignItems: 'center'}}>
                    <TouchableWithoutFeedback onPress={showSearchBar}>
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
                </View>
            )}
        </SafeAreaView>
    );
}
