import React from 'react';
import { styled } from 'styled-components';

const Main = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Text = styled.p`
    font-size: 20px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const Button = styled.div<{ $backgroundColor: string; $textColor: string }>`
    padding-left: 13px;
    padding-right: 13px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 30px;

    align-items: center;
    justify-content: center;
    display: flex;

    cursor: pointer;

    background-color: ${(props) => props.$backgroundColor};
    color: ${(props) => props.$textColor};
`;

export default function Header() {
    return (
        <Main>
            <img src={require('../assets/Logo.png')} alt="Logo" width={150} />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ display: 'flex', flexDirection: 'row', gap: 30, marginRight: 30 }}>
                    <Text>소개</Text>
                    <Text>비즈니스</Text>
                    <Text>언론</Text>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                    <Button $backgroundColor="red" $textColor="white">
                        로그인
                    </Button>

                    <Button $backgroundColor="#EBEBEB" $textColor="black">
                        가입하기
                    </Button>
                </div>
            </div>
        </Main>
    );
}
