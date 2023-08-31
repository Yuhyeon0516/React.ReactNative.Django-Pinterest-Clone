import {atom} from 'recoil';

export const nameState = atom({
    key: 'nameState',
    default: '',
});

export const emailState = atom({
    key: 'emailState',
    default: '',
});

export const myBoardState = atom({
    key: 'myBoardState',
    default: [],
});
