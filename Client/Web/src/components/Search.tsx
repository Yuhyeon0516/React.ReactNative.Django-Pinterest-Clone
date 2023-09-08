import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

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

const ImageZip = styled(motion.div)`
    display: flex;
    flex-direction: column;

    gap: 20px;
`;

const Image = styled.img`
    width: 250px;
    height: 350px;

    border-radius: 20px;
`;

const DownButton = styled(motion.div)<{ $color: string }>`
    display: flex;
    position: absolute;
    bottom: 80px;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 60px;
    height: 60px;
    border-radius: 30px;

    cursor: pointer;

    background-color: ${(props) => props.$color};
`;

// #B47904 -> #507A67 -> #0B5FC8 -> #336845

export default function Search() {
    const [dotNum, setDotNum] = useState(1);
    const [imageNum, setImageNum] = useState(dotNum - 1);
    const searchText = [
        { color: '#B47904', text: '저녁 식사 메뉴 아이디어를 찾아보세요' },
        { color: '#507A67', text: '집안 꾸미기 아이디어를 찾아보세요' },
        { color: '#0B5FC8', text: '새로운 패션을 찾아보세요' },
        { color: '#336845', text: '정원 가꾸기 아이디어를 찾아보세요' },
    ];

    const textVariants = {
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

    const imageZipVariants = {
        initial: {
            opacity: 0,
            y: 2000,
        },
        visiable: (custom: number) => ({
            opacity: 1,
            y: 135 * (custom > 4 ? custom - (custom - 4) * 2 : custom),
            transitionDelay: `${0.3 * custom}s`,
            transitionDuration: '1s',
        }),
        exit: {
            opacity: 0,
            y: 0,
        },
    };

    const imagePath = [
        // 저녁
        [
            'https://i.pinimg.com/236x/3b/42/b0/3b42b02bf047097582b26401df90cdb3.jpg',
            'https://i.pinimg.com/564x/4f/df/82/4fdf820192314371138c0f4f999cdddc.jpg',
            'https://i.pinimg.com/236x/6a/77/ed/6a77ed2962aa7e66bac8ff727d939e96.jpg',
            'https://i.pinimg.com/236x/06/e8/14/06e814c8c5c82b9bf794add896616e12.jpg',
            'https://i.pinimg.com/564x/8b/21/b0/8b21b0133442afd03d2c5e9a998c96b3.jpg',
            'https://i.pinimg.com/236x/15/bf/41/15bf41a80a0ffb41cc9d0fd98abed34b.jpg',
            'https://i.pinimg.com/236x/18/dc/f7/18dcf759aa96740f8d335dc6231a9cf9.jpg',
            'https://i.pinimg.com/236x/62/bb/97/62bb9727b2e09751d43c32589c503b39.jpg',
            'https://i.pinimg.com/564x/64/cf/21/64cf2184d33446c4cf1cc8c3c585b9f4.jpg',
            'https://i.pinimg.com/236x/65/df/cd/65dfcdd2fc433d45baedb3666cacfd82.jpg',
            'https://i.pinimg.com/236x/95/f3/73/95f373590dad79bcf3202ce6edad5bcd.jpg',
            'https://i.pinimg.com/236x/48/9c/d9/489cd9ae5fec17977c73677866202d59.jpg',
            'https://i.pinimg.com/564x/63/3e/c1/633ec1128e0b7ed911c462cb89620c64.jpg',
            'https://i.pinimg.com/236x/78/6e/00/786e00eab219eca59803d118fbe0feb3.jpg',
        ],
        // 집안
        [
            'https://i.pinimg.com/236x/2c/e0/6d/2ce06d9926b65f60dc4ae9eff1a13c7f.jpg',
            'https://i.pinimg.com/564x/3f/47/95/3f479578058904cca0a0e8d693045459.jpg',
            'https://i.pinimg.com/564x/6f/25/cc/6f25cc5393793930bf9b7106f55c89cf.jpg',
            'https://i.pinimg.com/564x/28/ab/82/28ab8205553272aa751e237165ea897a.jpg',
            'https://i.pinimg.com/236x/18/8a/6f/188a6f3c7c25901023cd7c564281a40c.jpg',
            'https://i.pinimg.com/236x/22/3a/40/223a4015ad7e274eb928024d4aa59f95.jpg',
            'https://i.pinimg.com/564x/49/2d/ef/492def5c84b3fbf6a7a0292e712ae007.jpg',
            'https://i.pinimg.com/236x/62/6c/70/626c70231c0ef5f21a54737a928c65b0.jpg',
            'https://i.pinimg.com/564x/87/79/c6/8779c6f5ccdff8cbdedef7851b7d3682.jpg',
            'https://i.pinimg.com/236x/28/85/8c/28858cedb11e772b00edd867009c5e88.jpg',
            'https://i.pinimg.com/564x/51/74/59/5174594f50a3e50880fb5c32394e45e3.jpg',
            'https://i.pinimg.com/564x/66/90/98/6690982410d9194543c1ffbf13fbb60b.jpg',
            'https://i.pinimg.com/236x/a3/b6/5f/a3b65f745a80671af4312b275c06c27e.jpg',
            'https://i.pinimg.com/564x/a7/f2/61/a7f2614d15753b9c1385ae34391510df.jpg',
        ],
        // 패션
        [
            'https://i.pinimg.com/564x/1b/8b/52/1b8b52de400ad51e36af7217d2347a83.jpg',
            'https://i.pinimg.com/564x/1c/4e/22/1c4e22bc826843b92969d00d3bec53b9.jpg',
            'https://i.pinimg.com/236x/3d/40/c9/3d40c99ac6cbb6cd441a1b5fb20cd459.jpg',
            'https://i.pinimg.com/236x/3f/05/2c/3f052c9b0f402d3373b9e0916c53bac7.jpg',
            'https://i.pinimg.com/236x/7a/e3/37/7ae3370edba908ba0df9469d5d6133b0.jpg',
            'https://i.pinimg.com/236x/7c/4f/39/7c4f3961236c4914b25a7ec06f8e08e2.jpg',
            'https://i.pinimg.com/550x/8c/2b/a8/8c2ba8d19852209a6ab8f69e097ff278.jpg',
            'https://i.pinimg.com/564x/8c/a8/5f/8ca85fd7930a2d8e180f9b229341d2c6.jpg',
            'https://i.pinimg.com/236x/28/cc/1f/28cc1f5464d7ba55a56e05ee85707dbc.jpg',
            'https://i.pinimg.com/564x/83/ac/64/83ac64291afee7c00c3b2d3bec6c79e0.jpg',
            'https://i.pinimg.com/564x/85/a2/1a/85a21aea41cdecdb2de94e16f50db7d0.jpg',
            'https://i.pinimg.com/564x/85/c5/62/85c562e7f72b6cccaa3f09399077bc22.jpg',
            'https://i.pinimg.com/564x/98/fd/d7/98fdd7f1ecc1c8935ccf39d2aac81f09.jpg',
            'https://i.pinimg.com/236x/67/2f/71/672f7160ee2b9130ac177fb3ed975213.jpg',
        ],
        // 정원
        [
            'https://i.pinimg.com/236x/4a/bf/51/4abf5134ee423d583ce03707a166c16e.jpg',
            'https://i.pinimg.com/564x/6a/ea/1c/6aea1c0bc96840a03644ed7b460fac9e.jpg',
            'https://i.pinimg.com/564x/6a/f6/71/6af67110eb902f81523fae20e7220179.jpg',
            'https://i.pinimg.com/236x/7f/c8/1e/7fc81ec2166365721b8fd0d2f875671d.jpg',
            'https://i.pinimg.com/236x/9b/52/9d/9b529dd5d75523e9a6bf29dbf09f404a.jpg',
            'https://i.pinimg.com/564x/9e/42/22/9e422240981aebcbe435c05c26f4bec3.jpg',
            'https://i.pinimg.com/564x/22/ab/69/22ab69682a7e4b2915e747b711bcc4fc.jpg',
            'https://i.pinimg.com/564x/31/fc/43/31fc438686df6b34e2544865d0c111a3.jpg',
            'https://i.pinimg.com/236x/47/f4/3e/47f43e7f2b1bd7e6596e47cc781c7799.jpg',
            'https://i.pinimg.com/236x/52/a3/d1/52a3d167e25b31783c49d629294a3c35.jpg',
            'https://i.pinimg.com/236x/61/be/0f/61be0fd258626af4deab36336b9abd94.jpg',
            'https://i.pinimg.com/236x/50/9e/3a/509e3ac9af5c305e83eddc25b748214b.jpg',
            'https://i.pinimg.com/564x/57/70/c6/5770c654b38898b9a2aaf27973576f35.jpg',
            'https://i.pinimg.com/564x/79/97/d8/7997d893274f6359839d6fe72b1892d6.jpg',
        ],
    ];

    function onPressDot(dot: number) {
        setDotNum(0);

        setTimeout(() => {
            setDotNum(dot);
            setImageNum(dot - 1);
        }, 300);
    }

    useEffect(() => {
        setInterval(() => {
            const tempDotNum = dotNum;

            onPressDot((tempDotNum % 4) + 1);
        }, 10000);
    }, [dotNum]);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100vw',
                height: '100vh',
                position: 'relative',
            }}
        >
            <div style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                <Text style={{ textAlign: 'center' }}>다음</Text>

                <AnimatePresence>
                    {dotNum && (
                        <ColorText
                            key={'text'}
                            $textColor={searchText[dotNum - 1].color}
                            transition={{ duration: 1, type: 'spring' }}
                            initial="initial"
                            animate="visiable"
                            exit="exit"
                            variants={textVariants}
                        >
                            {searchText[dotNum - 1].text}
                        </ColorText>
                    )}
                </AnimatePresence>

                <div style={{ display: 'flex', flexDirection: 'row', gap: 15, alignItems: 'center', justifyContent: 'center' }}>
                    <Dot $color="#B47904" $myNum={1} $selectNum={dotNum} onClick={() => onPressDot(1)} />
                    <Dot $color="#507A67" $myNum={2} $selectNum={dotNum} onClick={() => onPressDot(2)} />
                    <Dot $color="#0B5FC8" $myNum={3} $selectNum={dotNum} onClick={() => onPressDot(3)} />
                    <Dot $color="#336845" $myNum={4} $selectNum={dotNum} onClick={() => onPressDot(4)} />
                </div>
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 20,
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    overflow: 'hidden',
                }}
            >
                <AnimatePresence custom={1}>
                    {dotNum && (
                        <ImageZip key={'zip'} custom={1} initial="initial" animate="visiable" exit="exit" variants={imageZipVariants}>
                            <Image src={imagePath[imageNum][0]} />
                            <Image src={imagePath[imageNum][1]} />
                        </ImageZip>
                    )}
                </AnimatePresence>

                <AnimatePresence custom={2}>
                    {dotNum && (
                        <ImageZip key={'zip'} custom={2} initial="initial" animate="visiable" exit="exit" variants={imageZipVariants}>
                            <Image src={imagePath[imageNum][2]} />
                            <Image src={imagePath[imageNum][3]} />
                        </ImageZip>
                    )}
                </AnimatePresence>

                <AnimatePresence custom={3}>
                    {dotNum && (
                        <ImageZip key={'zip'} custom={3} initial="initial" animate="visiable" exit="exit" variants={imageZipVariants}>
                            <Image src={imagePath[imageNum][4]} />
                            <Image src={imagePath[imageNum][5]} />
                        </ImageZip>
                    )}
                </AnimatePresence>

                <AnimatePresence custom={4}>
                    {dotNum && (
                        <ImageZip key={'zip'} custom={4} initial="initial" animate="visiable" exit="exit" variants={imageZipVariants}>
                            <Image src={imagePath[imageNum][6]} />
                            <Image src={imagePath[imageNum][7]} />
                        </ImageZip>
                    )}
                </AnimatePresence>

                <AnimatePresence custom={5}>
                    {dotNum && (
                        <ImageZip key={'zip'} custom={5} initial="initial" animate="visiable" exit="exit" variants={imageZipVariants}>
                            <Image src={imagePath[imageNum][8]} />
                            <Image src={imagePath[imageNum][9]} />
                        </ImageZip>
                    )}
                </AnimatePresence>

                <AnimatePresence custom={6}>
                    {dotNum && (
                        <ImageZip key={'zip'} custom={6} initial="initial" animate="visiable" exit="exit" variants={imageZipVariants}>
                            <Image src={imagePath[imageNum][10]} />
                            <Image src={imagePath[imageNum][11]} />
                        </ImageZip>
                    )}
                </AnimatePresence>

                <AnimatePresence custom={7}>
                    {dotNum && (
                        <ImageZip key={'zip'} custom={7} initial="initial" animate="visiable" exit="exit" variants={imageZipVariants}>
                            <Image src={imagePath[imageNum][12]} />
                            <Image src={imagePath[imageNum][13]} />
                        </ImageZip>
                    )}
                </AnimatePresence>
            </div>

            <div style={{ position: 'absolute', background: 'linear-gradient(#ffffff10, #ffffff)', bottom: 0, width: '100%', height: 200 }}></div>

            <div
                style={{
                    width: '100vw',
                    height: 70,
                    backgroundColor: '#FFFF80',
                    position: 'absolute',
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                }}
            >
                <p style={{ fontSize: 18, fontWeight: '600' }}>방식은 다음과 같습니다</p>
                <FontAwesomeIcon style={{ alignSelf: 'flex-start', marginTop: 22 }} icon={faChevronDown} color="black" size="lg" />
            </div>

            <DownButton $color={searchText[imageNum].color} animate={{ translateY: -30 }} transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}>
                <FontAwesomeIcon icon={faChevronDown} color="white" size="xl" />
            </DownButton>
        </div>
    );
}
