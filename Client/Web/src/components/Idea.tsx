import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const IdeaMain = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #ffff80;
    display: flex;
    flex-direction: row;
`;

const IdeaHalfMain = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const ChickenImage = styled.img<{ $scale: number }>`
    position: absolute;
    transform: scale(${(props) => props.$scale});
    transform: translateX();
`;

const ChickenTextBox = styled.div`
    width: 50%;
    height: 120px;
    z-index: 10;
    background-color: white;
    border-radius: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

function Idea() {
    return (
        <IdeaMain>
            <IdeaHalfMain>
                <ChickenImage src="https://s.pinimg.com/webapp/topRight-d0230035.png" alt="사진1" $scale={0.7} style={{ top: 0, right: 10 }} />
                <ChickenImage src="https://s.pinimg.com/webapp/left-511a9304.png" alt="사진2" $scale={0.65} style={{ top: 170, left: 0 }} />
                <ChickenImage src="https://s.pinimg.com/webapp/right-88044782.png" alt="사진3" $scale={0.7} style={{ bottom: 0, right: 0 }} />
                <ChickenImage src="https://s.pinimg.com/webapp/center-77497603.png" alt="사진4" $scale={0.6} style={{ right: 50, top: 50 }} />
                <ChickenTextBox>
                    <FontAwesomeIcon icon={faMagnifyingGlass} color="black" size="xl" />
                    <div style={{ flex: 1, textAlign: 'center', color: '#5A022E', fontSize: 24, fontWeight: 'bold' }}>닭고기로 만드는 손쉬운 저녁 메뉴</div>
                </ChickenTextBox>
            </IdeaHalfMain>
            <IdeaHalfMain style={{ backgroundColor: 'lightgreen' }}></IdeaHalfMain>
        </IdeaMain>
    );
}
export default Idea;
