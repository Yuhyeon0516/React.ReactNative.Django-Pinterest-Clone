import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { styled } from 'styled-components';

const Text = styled.div`
    font-size: 60px;
    font-weight: 600;
`;

const ColorText = styled(motion.div)<{ $textColor: string }>`
    font-size: 60px;
    font-weight: 600;

    margin-bottom: 40px;

    color: ${(props) => props.$textColor};
`;

const Dot = styled.div<{ $color: string; $myNum: number; $selectNum: number }>`
    width: 13px;
    height: 13px;
    border-radius: 50px;

    cursor: pointer;

    background-color: ${(props) => (props.$myNum === props.$selectNum ? props.$color : '#DADADA')};
`;

// #B47904 -> #507A67 -> #0B5FC8 -> #336845

export default function Search() {
    const [dotNum, setDotNum] = useState(1);
    const searchText = [
        { color: '#B47904', text: '저녁 식사 메뉴 아이디어를 찾아보세요' },
        { color: '#507A67', text: '집안 꾸미기 아이디어를 찾아보세요' },
        { color: '#0B5FC8', text: '새로운 패션을 찾아보세요' },
        { color: '#336845', text: '정원 가꾸기 아이디어를 찾아보세요' },
    ];

    const TextVariants = {
        initial: {
            opacity: 0,
            y: 80,
        },
        visiable: {
            opacity: 1,
            y: 0,
        },
        exit: {
            opacity: 0,
            y: -80,
        },
    };

    function onPressDot(dot: number) {
        setDotNum(0);

        setTimeout(() => {
            setDotNum(dot);
        }, 500);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', position: 'relative' }}>
            <Text>다음</Text>
            <AnimatePresence>
                {dotNum && (
                    <ColorText
                        key={'text'}
                        $textColor={searchText[dotNum - 1].color}
                        transition={{ duration: 1, type: 'spring' }}
                        initial="initial"
                        animate="visiable"
                        exit="exit"
                        variants={TextVariants}
                    >
                        {searchText[dotNum - 1].text}
                    </ColorText>
                )}
            </AnimatePresence>
            <div style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
                <Dot $color="#B47904" $myNum={1} $selectNum={dotNum} onClick={() => onPressDot(1)} />
                <Dot $color="#507A67" $myNum={2} $selectNum={dotNum} onClick={() => onPressDot(2)} />
                <Dot $color="#0B5FC8" $myNum={3} $selectNum={dotNum} onClick={() => onPressDot(3)} />
                <Dot $color="#336845" $myNum={4} $selectNum={dotNum} onClick={() => onPressDot(4)} />
            </div>
        </div>
    );
}
