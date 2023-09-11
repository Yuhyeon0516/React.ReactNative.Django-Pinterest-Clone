import styled from 'styled-components';

const RunMain = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const RunHalfMain = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
`;

function Run() {
    return (
        <RunMain>
            <RunHalfMain>
                <img src="https://s.pinimg.com/webapp/shop-bd0c8a04.png" alt="left" style={{ width: '100%', height: '100%' }} />
                <div
                    style={{
                        width: '50%',
                        height: '50%',
                        position: 'absolute',
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <div style={{ width: '70%', height: '90%', position: 'absolute', right: 50, top: -70 }}>
                        <img
                            src="https://s.pinimg.com/webapp/creator-pin-img-491ebb56.png"
                            alt="사진1"
                            style={{ width: '90%', height: '100%', position: 'absolute', right: 0, borderRadius: 20 }}
                        />
                        <img
                            src="https://s.pinimg.com/webapp/creator-avatar-d7a05622.png"
                            alt="사진2"
                            style={{ width: 100, height: 100, position: 'absolute', bottom: -40, left: -20 }}
                        />
                        <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', bottom: -50, left: 100 }}>
                            <span style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Scout the City</span>
                            <span style={{ color: 'white' }}>팔로워 56,700명</span>
                        </div>
                    </div>
                </div>
            </RunHalfMain>

            <RunHalfMain style={{ backgroundColor: '#FCDAE6' }}>
                <div style={{ fontSize: 60, fontWeight: 'bold', textAlign: 'center', color: '#B41D03', marginLeft: 200, marginRight: 200 }}>
                    구매하고, 만들고, 시도하고, 실행하세요.
                </div>
                <div style={{ fontSize: 24, textAlign: 'center', color: '#B41D03', margin: 10, marginLeft: 180, marginRight: 180 }}>
                    무엇보다도 Pinterest에서는 전 세계 사람들의 아이디어와 새로운 것을 발견할 수 있습니다.
                </div>
                <div
                    style={{
                        backgroundColor: '#B41D03',
                        color: '#FCDAE6',
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
            </RunHalfMain>
        </RunMain>
    );
}
export default Run;
