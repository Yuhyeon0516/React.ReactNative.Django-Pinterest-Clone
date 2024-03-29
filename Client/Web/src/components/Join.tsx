import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const JoinMain = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
`;

const JoinHalfMain = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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

const Background = styled.div`
    gap: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const ImageVerticalLine = styled.div<{ $transY: number }>`
    display: flex;
    flex-direction: column;
    gap: 20px;
    transform: translateY(${(props) => props.$transY}px);
`;

const Image = styled.img`
    width: 250px;
    height: 350px;

    border-radius: 20px;
`;

const Input = styled.input`
    border-color: #c2c2c2;
    border-width: 0.7px;
    border-radius: 15px;
    width: 100%;
    height: 50px;
    padding: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    box-sizing: border-box;
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 18px;

    ::placeholder {
        color: #c2c2c2;
    }
`;

const Button = styled.div`
    border-radius: 20px;
    width: 100%;
    height: 45px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`;

function Join() {
    const imagePath = [
        [
            'https://i.pinimg.com/564x/4f/df/82/4fdf820192314371138c0f4f999cdddc.jpg',
            'https://i.pinimg.com/236x/6a/77/ed/6a77ed2962aa7e66bac8ff727d939e96.jpg',
            'https://i.pinimg.com/236x/06/e8/14/06e814c8c5c82b9bf794add896616e12.jpg',
            'https://i.pinimg.com/564x/8b/21/b0/8b21b0133442afd03d2c5e9a998c96b3.jpg',
        ],
        [
            'https://i.pinimg.com/236x/15/bf/41/15bf41a80a0ffb41cc9d0fd98abed34b.jpg',
            'https://i.pinimg.com/236x/18/dc/f7/18dcf759aa96740f8d335dc6231a9cf9.jpg',
            'https://i.pinimg.com/236x/62/bb/97/62bb9727b2e09751d43c32589c503b39.jpg',
            'https://i.pinimg.com/564x/64/cf/21/64cf2184d33446c4cf1cc8c3c585b9f4.jpg',
        ],
        [
            'https://i.pinimg.com/236x/65/df/cd/65dfcdd2fc433d45baedb3666cacfd82.jpg',
            'https://i.pinimg.com/236x/48/9c/d9/489cd9ae5fec17977c73677866202d59.jpg',
            'https://i.pinimg.com/564x/63/3e/c1/633ec1128e0b7ed911c462cb89620c64.jpg',
            'https://i.pinimg.com/236x/78/6e/00/786e00eab219eca59803d118fbe0feb3.jpg',
        ],
        [
            'https://i.pinimg.com/564x/96/2c/ce/962cce1d513d665ecca6eb733a90a160.jpg',
            'https://i.pinimg.com/236x/16/36/dd/1636dd650e6289cd0ec4f4f06dea7835--british-recipes-the-great-british-bake-off-recipes.jpg',
            'https://i.pinimg.com/236x/22/45/e2/2245e261944f1eae080423f6ff7805e1--romantic-picnics-romantic-ideas.jpg',
            'https://i.pinimg.com/564x/28/77/f4/2877f4e254c0bd27ac4f4c5d8a43404f.jpg',
        ],
        [
            'https://i.pinimg.com/564x/94/43/b9/9443b93bd8773fec91bc1837e8424e8e.jpg',
            'https://i.pinimg.com/236x/14/73/0a/14730af41a58e05384b86b0bacf9d57b.jpg',
            'https://i.pinimg.com/236x/05/65/20/05652045e57af33599557db9f23188c0.jpg',
            'https://i.pinimg.com/564x/a9/f9/09/a9f90926afdfbff79f6d2a017c8e19dd.jpg',
        ],
        [
            'https://i.pinimg.com/564x/af/60/9e/af609e357a691876ac58d02e27af316e.jpg',
            'https://i.pinimg.com/236x/c5/83/53/c58353e15f32f3cbfc7cdcbcf0dc2f34--mango-coulis-m-sorry.jpg',
            'https://i.pinimg.com/236x/d5/5f/97/d55f97078c0d7b60b758cac3b34114c9.jpg',
            'https://i.pinimg.com/236x/d4/32/cd/d432cdc35cf6cc5c7ec07a5036a87bca.jpg',
        ],
        [
            'https://i.pinimg.com/236x/de/13/6b/de136b0fa0037d3453a430895d8a5c27.jpg',
            'https://i.pinimg.com/236x/e7/c6/c6/e7c6c65c6e38f43d4b979d3cb1e46bf7.jpg',
            'https://i.pinimg.com/236x/e3/41/4b/e3414b2fcf00375a199ba6964be551af.jpg',
            'https://i.pinimg.com/236x/fb/18/de/fb18deb4959e9a0678e1bf99105ea775.jpg',
        ],
    ];

    return (
        <JoinMain>
            <Background>
                <ImageVerticalLine $transY={-100}>
                    <Image src={imagePath[0][0]} />
                    <Image src={imagePath[0][1]} />
                    <Image src={imagePath[0][2]} />
                    <Image src={imagePath[0][3]} />
                </ImageVerticalLine>
                <ImageVerticalLine $transY={50}>
                    <Image src={imagePath[1][0]} />
                    <Image src={imagePath[1][1]} />
                    <Image src={imagePath[1][2]} />
                    <Image src={imagePath[1][3]} />
                </ImageVerticalLine>
                <ImageVerticalLine $transY={0}>
                    <Image src={imagePath[2][0]} />
                    <Image src={imagePath[2][1]} />
                    <Image src={imagePath[2][2]} />
                    <Image src={imagePath[2][3]} />
                </ImageVerticalLine>
                <ImageVerticalLine $transY={-50}>
                    <Image src={imagePath[3][0]} />
                    <Image src={imagePath[3][1]} />
                    <Image src={imagePath[3][2]} />
                    <Image src={imagePath[3][3]} />
                </ImageVerticalLine>
                <ImageVerticalLine $transY={30}>
                    <Image src={imagePath[4][0]} />
                    <Image src={imagePath[4][1]} />
                    <Image src={imagePath[4][2]} />
                    <Image src={imagePath[4][3]} />
                </ImageVerticalLine>
                <ImageVerticalLine $transY={150}>
                    <Image src={imagePath[5][0]} />
                    <Image src={imagePath[5][1]} />
                    <Image src={imagePath[5][2]} />
                    <Image src={imagePath[5][3]} />
                </ImageVerticalLine>
                <ImageVerticalLine $transY={80}>
                    <Image src={imagePath[6][0]} />
                    <Image src={imagePath[6][1]} />
                    <Image src={imagePath[6][2]} />
                    <Image src={imagePath[6][3]} />
                </ImageVerticalLine>
                <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: '#00000060' }}></div>
            </Background>

            <JoinHalfMain style={{ zIndex: 10 }}>
                <span style={{ fontSize: 70, fontWeight: 600, color: 'white', margin: 170 }}>가입하여 더 많은 아이디어를 만나보세요</span>
            </JoinHalfMain>

            <JoinHalfMain style={{ zIndex: 10 }}>
                <div
                    style={{
                        height: '85%',
                        width: '65%',
                        backgroundColor: 'white',
                        borderRadius: 30,
                        position: 'relative',
                        overflow: 'hidden',
                        paddingLeft: 120,
                        paddingRight: 120,
                        paddingTop: 30,
                        paddingBottom: 80,
                        boxSizing: 'border-box',
                    }}
                >
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 0,
                        }}
                    >
                        <img src={require('../assets/Icon.png')} alt="아이콘" style={{ width: 50, height: 50, marginBottom: 20 }} />
                        <h1 style={{ fontSize: 32, fontWeight: 600, textAlign: 'center', margin: 0 }}>Pinterest에 오신 것을 환영합니다</h1>
                        <span style={{ marginBottom: 20 }}>시도해 볼 만한 새로운 아이디어 찾기</span>

                        <span style={{ textAlign: 'left', alignSelf: 'flex-start' }}>이메일</span>
                        <Input placeholder="이메일" />

                        <span style={{ textAlign: 'left', alignSelf: 'flex-start' }}>비밀번호</span>
                        <Input placeholder="비밀번호를 입력하세요" />

                        <span style={{ textAlign: 'left', alignSelf: 'flex-start' }}>생년월일</span>
                        <Input placeholder="2023. 09. 11" />

                        <Button style={{ backgroundColor: 'red' }}>
                            <span style={{ color: 'white' }}>계속하기</span>
                        </Button>

                        <span style={{ fontWeight: 'bold', marginBottom: 10 }}>또는</span>

                        <Button style={{ backgroundColor: '#165DEE' }}>
                            <FontAwesomeIcon icon={faFacebook} size="xl" style={{ color: 'white', marginLeft: 20 }} />
                            <span style={{ color: 'white', fontSize: 18, fontWeight: 'bold', flex: 1, textAlign: 'center' }}>Facebook으로 계속하기</span>
                        </Button>

                        <Button style={{ backgroundColor: 'white', border: '1px solid #D1D4D9' }}>
                            <img
                                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                                alt="Google"
                                style={{ width: 35, height: 35, marginLeft: 15 }}
                            />
                            <span style={{ fontSize: 18, flex: 1, textAlign: 'center' }}>Google 계정으로 계속하기</span>
                        </Button>

                        <span style={{ color: '#5C5C5C', fontSize: 12 }}>
                            계속 진행하면 Pinterest <strong style={{ color: 'black' }}>서비스 약관</strong>에 동의하고
                        </span>

                        <span style={{ color: '#5C5C5C', fontSize: 12 }}>
                            <strong style={{ color: 'black' }}>개인정보 보호정책</strong>을 읽었음을 인정하는 것으로 간주됩니다.
                        </span>

                        <strong style={{ fontSize: 12, marginBottom: 10 }}>컬렉션 알림.</strong>

                        <span style={{ color: '#5C5C5C', fontSize: 12 }}>
                            이미 회원이신가요? <strong>로그인</strong>
                        </span>
                    </div>
                    <div
                        style={{
                            height: 50,
                            width: '100%',
                            backgroundColor: '#E4E4E4',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <span style={{ color: 'black', fontSize: 18, fontWeight: 500 }}>무료 Business 계정 만들기</span>
                    </div>
                </div>
            </JoinHalfMain>

            <div style={{ position: 'absolute', width: '100%', height: 60, alignItems: 'center', justifyContent: 'center', display: 'flex', top: 80 }}>
                <div
                    style={{
                        backgroundColor: '#880034',
                        width: 60,
                        height: 60,
                        borderRadius: 60,
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                    }}
                >
                    <FontAwesomeIcon icon={faChevronUp} color="white" size="xl" />
                </div>
            </div>

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
                    zIndex: 10,
                    backgroundColor: 'white',
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
