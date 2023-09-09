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
    align-items: center;
    justify-content: center;
    position: relative;
`;

function Save() {
    return (
        <IdeaMain>
            <IdeaHalfMain>
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
                    }}
                >
                    탐색
                </div>
            </IdeaHalfMain>
            <IdeaHalfMain></IdeaHalfMain>
        </IdeaMain>
    );
}
export default Save;
