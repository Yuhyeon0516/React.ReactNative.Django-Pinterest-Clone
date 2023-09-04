import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    Switch,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StackNavigationType} from '../Stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useDjango from '../../hooks/useDjango';
import {getToken} from '../../utils/storage';
import {useRecoilValue} from 'recoil';
import {nameState} from '../../utils/recoil';

export default function CreateBoard({
    navigation,
}: {
    navigation: NativeStackNavigationProp<StackNavigationType>;
}) {
    const safeAreaInset = useSafeAreaInsets();
    const [name, setName] = useState('');
    const [switchValue, setSwitchValue] = useState(false);
    const {createBoard} = useDjango();
    const userName = useRecoilValue(nameState);

    async function onPressCreate() {
        const token = await getToken();
        await createBoard(token, name, switchValue);
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                marginTop: safeAreaInset.top,
                backgroundColor: '#211F21',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
            }}>
            <View
                style={{
                    width: '100%',
                    height: 50,
                    paddingLeft: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                <View
                    style={{
                        height: 50,
                        justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        hitSlop={{top: 5, left: 5, right: 5, bottom: 5}}>
                        <Ionicons name="close" size={30} color={'white'} />
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        height: 50,
                        justifyContent: 'center',
                    }}>
                    <Text style={{color: 'white', fontSize: 16}}>
                        보드 만들기
                    </Text>
                </View>

                <TouchableOpacity
                    onPress={onPressCreate}
                    disabled={name === ''}>
                    <View
                        style={{
                            height: '90%',
                            backgroundColor: name ? 'red' : 'transparent',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingHorizontal: 5,
                            borderRadius: 30,
                        }}>
                        <Text
                            style={{
                                color: name ? 'white' : '#7F7C80',
                                fontSize: 16,
                                fontWeight: 'bold',
                                paddingHorizontal: 10,
                                paddingVertical: 10,
                            }}>
                            만들기
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{marginVertical: 20, paddingHorizontal: 15, gap: 10}}>
                <Text style={{color: '#D1CDD0', fontSize: 16}}>보드 이름</Text>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    placeholder="추가"
                    placeholderTextColor={'#7F7C80'}
                    cursorColor={'red'}
                    style={{
                        color: '#7F7C80',
                        fontSize: 20,
                    }}
                />
            </View>

            <View style={{marginVertical: 20, paddingHorizontal: 15, gap: 15}}>
                <Text style={{color: '#D1CDD0', fontSize: 16}}>참여자</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            backgroundColor: '#434043',
                            borderRadius: 100,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{
                                fontSize: 24,
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: 'white',
                            }}>
                            {userName[0]}
                        </Text>
                    </View>

                    <View
                        style={{
                            width: 50,
                            height: 50,
                            backgroundColor: '#434043',
                            borderRadius: 100,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Ionicons
                            name="person-add-sharp"
                            color={'white'}
                            size={20}
                        />
                    </View>
                </View>
            </View>

            <View style={{marginVertical: 20, paddingHorizontal: 15, gap: 10}}>
                <Text style={{color: '#D1CDD0', fontSize: 16}}>개인 정보</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}>
                        이 보드를 비밀 보드로 설정하기
                    </Text>

                    <Switch
                        value={switchValue}
                        onValueChange={setSwitchValue}
                        thumbColor={'black'}
                        trackColor={{
                            false: '#767479',
                            true: 'whitesmoke',
                        }}
                        ios_backgroundColor={'#767479'}
                    />
                </View>
                <Text style={{color: '#979497', fontSize: 16}}>
                    회원님과 참여자만 이 보드를 볼 수 있습니다
                </Text>
            </View>
        </SafeAreaView>
    );
}
