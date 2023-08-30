import {
    View,
    Animated,
    useWindowDimensions,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FirstSeq from './FirstSeq';
import SecondSeq from './SecondSeq';
import ThirdSeq from './ThirdSeq';
import FourthSeq from './FourthSeq';
import FifthSeq from './FifthSeq';
import SixthSeq from './SixthSeq';
import axiosInstance from '../../utils/axios';

export default function JoinPopup({
    joinPopupYAnim,
}: {
    joinPopupYAnim: Animated.Value;
}) {
    const {height} = useWindowDimensions();
    const [sequenceDot, setSequenceDot] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [birthDate, setBirthDate] = useState(new Date());

    function onPressBack() {
        if (sequenceDot === 0) {
            Animated.timing(joinPopupYAnim, {
                toValue: 1000,
                duration: 400,
                useNativeDriver: false,
            }).start(({finished}) => {
                if (finished) {
                    setSequenceDot(0);
                }
            });
        } else {
            setSequenceDot(prev => prev - 1);
        }
    }

    async function onPressNext() {
        if (sequenceDot === 5) {
            Animated.timing(joinPopupYAnim, {
                toValue: 1000,
                duration: 400,
                useNativeDriver: false,
            }).start(async ({finished}) => {
                if (finished) {
                    const formattingDate = `${birthDate.getFullYear()}-${
                        birthDate.getMonth() + 1
                    }-${birthDate.getDate()}`;
                    const request = {
                        username: name,
                        password: password,
                        email: email,
                        birth_date: formattingDate,
                        gender: gender,
                    };

                    const token = await axiosInstance.post(
                        'account/signup/',
                        request,
                    );

                    console.log(token.data);
                }
            });
        } else {
            setSequenceDot(prev => prev + 1);
        }
    }

    return (
        <Animated.View
            style={{
                width: '100%',
                height: height,
                position: 'absolute',
                top: 0,
                zIndex: 3,
                backgroundColor: 'black',
                transform: [
                    {
                        translateY: joinPopupYAnim,
                    },
                ],
            }}>
            <SafeAreaView
                style={{
                    flex: 1,
                    alignItems: 'center',
                }}>
                <View
                    style={{
                        width: '100%',
                        height: 50,
                        justifyContent: 'center',
                        marginBottom: 15,
                    }}>
                    <TouchableOpacity
                        onPress={onPressBack}
                        style={{
                            paddingHorizontal: 10,
                            position: 'absolute',
                            width: '100%',
                            height: 50,
                            justifyContent: 'center',
                        }}>
                        <MaterialIcons
                            name="arrow-back-ios"
                            color={'white'}
                            size={24}
                            style={{margin: 5}}
                        />
                    </TouchableOpacity>

                    <View
                        style={{
                            position: 'absolute',
                            width: '60%',
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                            gap: 10,
                            flexDirection: 'row',
                        }}>
                        {/* #252425 */}
                        {[...Array(6)].map((_, index) => {
                            return (
                                <View
                                    key={index}
                                    style={{
                                        width: 10,
                                        height: 10,
                                        backgroundColor: '#252525',
                                        borderRadius: 10,
                                        borderWidth:
                                            sequenceDot === index ? 1.5 : 0,
                                        borderColor:
                                            sequenceDot === index
                                                ? 'white'
                                                : undefined,
                                    }}
                                />
                            );
                        })}
                    </View>
                </View>

                {sequenceDot === 0 && (
                    <FirstSeq
                        email={email}
                        setEmail={setEmail}
                        onPressNext={onPressNext}
                    />
                )}

                {sequenceDot === 1 && (
                    <SecondSeq
                        password={password}
                        setPassword={setPassword}
                        onPressNext={onPressNext}
                    />
                )}

                {sequenceDot === 2 && (
                    <ThirdSeq
                        name={name}
                        setName={setName}
                        birthDate={birthDate}
                        setBirthDate={setBirthDate}
                        onPressNext={onPressNext}
                    />
                )}

                {sequenceDot === 3 && (
                    <FourthSeq
                        setGender={setGender}
                        onPressNext={onPressNext}
                    />
                )}

                {sequenceDot === 4 && <FifthSeq onPressNext={onPressNext} />}

                {sequenceDot === 5 && <SixthSeq onPressNext={onPressNext} />}
            </SafeAreaView>
        </Animated.View>
    );
}
