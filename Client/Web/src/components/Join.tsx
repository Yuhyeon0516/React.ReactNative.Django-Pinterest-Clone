import styled from 'styled-components';

const JoinMain = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
`;

const HyperText = styled.span`
    color: black;
    font-weight: 600;
    font-size: 14px;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

function Join() {
    return (
        <JoinMain>
            <div
                style={{
                    width: '100%',
                    height: 50,
                    position: 'absolute',
                    bottom: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 15,
                    flexDirection: 'row',
                }}
            >
                <HyperText>서비스 약관</HyperText>
                <HyperText>개인정보 보호정책</HyperText>
                <HyperText>도움말</HyperText>
                <HyperText>iPhone 앱</HyperText>
                <HyperText>Android 앱</HyperText>
                <HyperText>사용자</HyperText>
                <HyperText>컬렉션</HyperText>
                <HyperText>쇼핑</HyperText>
                <HyperText>오늘</HyperText>
                <HyperText>탐색</HyperText>
            </div>
        </JoinMain>
    );
}
export default Join;
