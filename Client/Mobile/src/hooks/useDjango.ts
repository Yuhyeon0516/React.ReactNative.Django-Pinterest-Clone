import axiosInstance from '../utils/axios';

async function attemptingLogin(email: string, password: string) {
    const request = {
        email: email,
        password: password,
    };
    const result = await axiosInstance.post('account/login', request);

    console.log(result);
}

export {attemptingLogin};
