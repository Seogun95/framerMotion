import styled from 'styled-components';
import { animate, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * framer-motion
 *
 * ✨ <motion. 으로 옵션 확인 가능
 *  - <motion.div></motion.div>
 *  - <motion.span></motion.span>

 * ✨ styled(motion.div) 처럼 스타일드에 모션 적용 가능
 *  - animate={{ key: value }} 으로 애니메이션 프롭 사용 가능
 *  - transition={{ key: value }} 으로 transition 프롭 사용 가능
 *  - initial={{ key: value }} 으로 초기값 지정 가능
 *
 * ✨ Variants은 컴포넌트가 가질 수 있는 미리 정의된 시각적 state
 * const variants = {
     visible: { opacity: 1 },
     hidden: { opacity: 0 },
   }
   motion.div initial="hidden" animate="visible" variants={variants}
 *
 */

const animateVars = {
  start: { opacity: 0, scale: 0.9 },
  end: (index: number) => ({
    opacity: 1,
    scale: 1,
    rotateZ: 360,
    transition: {
      delay: 0.3 + index * 0.1,
      duration: 0.3,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: 'spring',
        damping: 6,
        stiffness: 100,
        restDelta: 0.001,
      },
    },
  }),
};

export function Home() {
  return (
    <>
      <Wrapper>
        <BoxContainer>
          {Array.from({ length: 20 }).map((_, index) => (
            <Box
              key={index}
              variants={animateVars}
              initial="start"
              animate="end"
              custom={index}
            />
          ))}
        </BoxContainer>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.article`
  ${({ theme }) => theme.FlexRow};
  ${({ theme }) => theme.FlexCenter};
  padding-top: 2rem;
`;

const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, max-content));
  grid-gap: 16px;
  justify-content: center;
  width: 1200px;
  height: 100%;

  ${({ theme }) => theme.media.max.tablet`
    grid-template-columns: repeat(2,minmax(0,1fr));
  `}

  ${({ theme }) => theme.media.max.mobile`
    grid-template-columns: repeat(1,minmax(0,1fr));
  `}
`;

const Box = styled(motion.div)`
  width: 100%;
  height: 12.5rem;
  background-color: ${({ theme }) => theme.bgColorDeep};
  border-radius: 2rem;
  box-shadow: ${({ theme }) => theme.shadow.box};
  ${({ theme }) => theme.CursorActive};
  transition: 0.2s linear background;
  &:hover {
    background-color: ${({ theme }) => theme.bgColor};
  }
`;
