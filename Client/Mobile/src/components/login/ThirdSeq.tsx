import {View, Text, TextInput, TouchableWithoutFeedback} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';
import LoginBtn from './LoginBtn';

export default function ThirdSeq({
    name,
    setName,
    birthDate,
    setBirthDate,
    onPressNext,
}: {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    birthDate: Date;
    setBirthDate: React.Dispatch<React.SetStateAction<Date>>;
    onPressNext: () => void;
}) {
    const [isName, setIsName] = useState(false);

    function onPressUpdate() {
        setIsName(true);
    }

    return (
        <View
            style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
            }}>
            {isName ? (
                <View style={{alignItems: 'center'}}>
                    <View
                        style={{
                            flexDirection: 'row',
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 24,
                                fontWeight: 'bold',
                                marginRight: 5,
                            }}>
                            안녕하세요, {name}님
                        </Text>

                        <Ionicons name="pencil" size={25} color={'#656266'} />
                    </View>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 24,
                            fontWeight: 'bold',
                        }}>
                        생년월일을 입력하세요
                    </Text>
                </View>
            ) : (
                <View style={{alignItems: 'center', gap: 15}}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 24,
                            fontWeight: 'bold',
                        }}>
                        안녕하세요
                    </Text>

                    <View style={{width: '100%', flexDirection: 'row'}}>
                        <View
                            style={{
                                marginHorizontal: 10,
                                width: '75%',
                                height: 50,
                                borderRadius: 20,
                                borderColor: 'white',
                                borderWidth: 1,
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                            }}>
                            <TextInput
                                value={name}
                                onChangeText={setName}
                                placeholder="이름을 입력하세요"
                                placeholderTextColor={'#585658'}
                                style={{
                                    fontSize: 20,
                                    marginLeft: 12,
                                    color: 'white',
                                }}
                            />

                            <Ionicons
                                name="close"
                                size={37}
                                color={'white'}
                                style={{marginRight: 12}}
                            />
                        </View>

                        <TouchableWithoutFeedback onPress={onPressUpdate}>
                            <View
                                style={{
                                    backgroundColor: '#211F20',
                                    width: '20%',
                                    height: 50,
                                    borderRadius: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontSize: 16,
                                    }}>
                                    업데이트
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                    <Text
                        style={{
                            color: 'white',
                            fontSize: 24,
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}>
                        생년월일을 입력하세요
                    </Text>
                </View>
            )}

            <View style={{marginTop: 10}}>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 18,
                        textAlign: 'center',
                    }}>
                    Pinterest의 안전을 유지하기 위해 생년월일을 입력해 주세요.
                    Pinterest는 생년월일을 통해 보다 맞춤화된 추천과 관련성 있는
                    광고도 제공할 수 있습니다. 이러한 정보는 공유되지 않으며
                    프로필에 표시되지 않습니다.
                </Text>
            </View>

            <DatePicker
                date={birthDate}
                onDateChange={setBirthDate}
                fadeToColor="black"
                textColor="white"
                mode="date"
            />

            <Text style={{color: '#656266', marginBottom: 40}}>
                Business 계정이더라도 본인 생일을 사용하세요.
            </Text>

            <View
                style={{
                    width: '100%',
                    alignItems: 'center',
                }}>
                <LoginBtn
                    bgColor="red"
                    title="다음"
                    textColor="white"
                    onPress={onPressNext}
                />
            </View>
        </View>
    );
}
