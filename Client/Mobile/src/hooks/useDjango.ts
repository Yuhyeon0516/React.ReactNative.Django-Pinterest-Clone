import {NavigationProp, useNavigation} from '@react-navigation/native';
import axiosInstance from '../utils/axios';
import {StackNavigationType} from '../components/Stack';
import {Alert} from 'react-native';
import {getToken, setToken} from '../utils/storage';
import {useRecoilState} from 'recoil';
import {emailState, myBoardState, nameState} from '../utils/recoil';

export default function useDjango() {
    const navigation = useNavigation<NavigationProp<StackNavigationType>>();
    const [_, setUserEmail] = useRecoilState(emailState);
    const [__, setUserName] = useRecoilState(nameState);
    const [___, setMyBoard] = useRecoilState(myBoardState);

    async function getUserInfo() {
        const user = await axiosInstance.get('account/signup/', {
            headers: {
                Authorization: 'Token ' + (await getToken()),
            },
        });

        setUserEmail(user.data.email);
        setUserName(user.data.username);
    }

    async function getMyBoard() {
        const board = await axiosInstance.get('board/check/', {
            headers: {
                Authorization: 'Token ' + (await getToken()),
            },
        });

        setMyBoard(board.data);
    }

    async function attemptingLogin(email: string, password: string) {
        const request = {
            email: email,
            password: password,
        };

        try {
            const result = await axiosInstance.post('account/login/', request);

            await setToken(result.data.Token);
            await getUserInfo();
            await getMyBoard();
            navigation.navigate('Main');
        } catch {
            Alert.alert(
                '로그인에 실패하였습니다.',
                '이메일 또는 패스워드를 다시 확인해주세요.',
            );
        }
    }

    async function joinMembership(
        name: string,
        password: string,
        email: string,
        birthDate: Date,
        gender: string,
    ) {
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

        try {
            const result = await axiosInstance.post('account/signup/', request);

            await setToken(result.data.Token);
            await getUserInfo();
            await getMyBoard();
            navigation.navigate('Main');
        } catch {
            Alert.alert('회원가입에 실패하였습니다.', '문의 부탁드립니다.');
            navigation.goBack();
        }
    }

    async function createBoard(
        token: string,
        boardName: string,
        isSecret: boolean,
    ) {
        const request = {
            token: token,
            board_name: boardName,
            is_secret: isSecret,
        };

        try {
            if (token === 'empty') Error('empty');

            await axiosInstance.post('board/create/', request);
            await getMyBoard();
            navigation.goBack();

            Alert.alert('보드 만들기에 성공하였습니다.');
        } catch {
            navigation.goBack();

            Alert.alert('보드 만들기에 실패하였습니다.', '문의 부탁드립니다.');
        }
    }

    return {attemptingLogin, joinMembership, createBoard};
}
