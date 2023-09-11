import styled from 'styled-components';

const IdeaMain = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #d2fff4;
    display: flex;
    flex-direction: row;
`;

const IdeaHalfMain = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const ImageBox = styled.div`
    position: absolute;
`;

function Save() {
    const width = window.screen.width;

    return (
        <IdeaMain>
            <IdeaHalfMain style={{ alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: 60, fontWeight: 'bold', textAlign: 'center', color: '#155959', margin: 10 }}>좋아하는 아이디어를 저장하세요.</div>
                <div style={{ fontSize: 24, textAlign: 'center', color: '#155959', margin: 10, marginLeft: 130, marginRight: 130 }}>
                    나중에 다시 볼 수 있도록 좋아하는 콘텐츠를 수집하세요.
                </div>
                <div
                    style={{
                        backgroundColor: '#155959',
                        color: '#d2fff4',
                        margin: 10,
                        height: 50,
                        width: 100,
                        borderRadius: 50,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: 16,
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                >
                    탐색
                </div>
            </IdeaHalfMain>

            <IdeaHalfMain>
                <ImageBox
                    style={{
                        width: width / 3.5,
                        height: width / 3.5,
                        top: 50,
                        left: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 45,
                        boxSizing: 'border-box',
                    }}
                >
                    <img
                        src="https://s.pinimg.com/webapp/future-home-vibes-55a673b9.png"
                        alt="양치식물"
                        style={{ width: '100%', height: '100%', position: 'absolute' }}
                    />
                    <div style={{ zIndex: 10, color: 'white', fontWeight: 500, fontSize: 56 }}>집 분위기 바꾸기: 양치식물</div>
                    <div
                        style={{
                            zIndex: 10,
                            position: 'absolute',
                            width: '100%',
                            height: '35%',
                            bottom: 0,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingLeft: (width / 3.5) * 0.1,
                            paddingRight: (width / 3.5) * 0.1,
                            boxSizing: 'border-box',
                        }}
                    >
                        <img src="https://s.pinimg.com/webapp/future-home1-f4037b6b.png" alt="양치식물1" style={{ width: '30%', height: '80%' }} />
                        <img src="https://s.pinimg.com/webapp/future-home2-c70a8738.png" alt="양치식물1" style={{ width: '30%', height: '80%' }} />
                        <img src="https://s.pinimg.com/webapp/future-home3-ac09e50f.png" alt="양치식물1" style={{ width: '30%', height: '80%' }} />
                    </div>
                </ImageBox>

                <ImageBox style={{ width: width / 3.5 / 1.7, height: width / 3.5 / 1.7, top: 50, right: 0 }}>
                    <img
                        src="https://s.pinimg.com/webapp/scandinavian-bedroom-917ad89c.png"
                        alt="스칸디나비아풍"
                        style={{ width: '100%', height: '100%', position: 'absolute' }}
                    />
                    <div style={{ margin: 40, zIndex: 10, color: 'white', position: 'absolute', bottom: 0, fontSize: 30, fontWeight: 500 }}>
                        스칸디나비아풍 침실
                    </div>
                </ImageBox>

                <ImageBox
                    style={{
                        width: width / 3.5 / 2.5,
                        height: width / 3.5 / 2.5,
                        top: 50 + width / 3.5 / 1.7 + 50,
                        right: 110,
                    }}
                >
                    <img src="https://s.pinimg.com/webapp/deck-of-dreams-fb527bf1.png" alt="꿈의 테크" style={{ width: '100%', height: '100%' }} />
                    <div style={{ margin: 25, zIndex: 10, color: 'white', position: 'absolute', bottom: 0, fontSize: 22, fontWeight: 500 }}>꿈의 테크</div>
                </ImageBox>

                <ImageBox style={{ width: width / 3.5 / 2, height: width / 3.5 / 2, top: 50 + width / 3.5 + 50, left: 180 }}>
                    <img src="https://s.pinimg.com/webapp/serve-my-drinks-263547ea.png" alt="멋진 음료 서빙" style={{ width: '100%', height: '100%' }} />
                    <div style={{ margin: 30, zIndex: 10, color: 'white', position: 'absolute', bottom: 0, fontSize: 30, fontWeight: 500 }}>멋진 음료 서빙</div>
                </ImageBox>

                <ImageBox
                    style={{
                        width: width / 3.5 / 1.7,
                        height: width / 3.5 / 1.7,
                        top: 50 + width / 3.5 / 1.7 + 50 + width / 3.5 / 2.5 + 50,
                        right: 40,
                    }}
                >
                    <img src="https://s.pinimg.com/webapp/bathroom-upgrade-48ebb8fc.png" alt="화장실 업그레이드" style={{ width: '100%', height: '100%' }} />
                    <div style={{ margin: 40, zIndex: 10, color: 'white', position: 'absolute', bottom: 0, fontSize: 30, fontWeight: 500 }}>
                        화장실 업그레이드
                    </div>
                </ImageBox>
            </IdeaHalfMain>
        </IdeaMain>
    );
}
export default Save;
