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

    return {attemptingLogin};
}
