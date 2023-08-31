import {NavigationProp, useNavigation} from '@react-navigation/native';
import axiosInstance from '../utils/axios';
import {StackNavigationType} from '../components/Stack';

export default function useDjango() {
    const navigation = useNavigation<NavigationProp<StackNavigationType>>();

    async function attemptingLogin(email: string, password: string) {
        const request = {
            email: email,
            password: password,
        };
        const result = await axiosInstance.post('account/login/', request);

        console.log(result.data); // Token 확인(추후 상태관리 예정)
        navigation.navigate('Main');
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

        const result = await axiosInstance.post('account/signup/', request);

        console.log(result.data); // Token 확인(추후 상태관리 예정)
        navigation.navigate('Main');
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

        const result = await axiosInstance.post('board/create/', request);

        console.log(result.status); // status code 확인 후 예외 처리 예정(ex: alert)
        navigation.goBack();
    }

    return {attemptingLogin, joinMembership, createBoard};
}
