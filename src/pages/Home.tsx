import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';

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
 *  - delayChildren: 딜레이 시간(초) 후에 하위 애니메이션이 시작
 *  - staggerChildren: 하위 컴포넌트의 애니메이션에 지속 시간(초)만큼 시차를 둠
 *  - inherit={boolean}: 부모로부터 variant 변경 사항을 상속하지 않도록 하려면 false로 설정
 *  - custom={any}: 각 애니메이션 컴포넌트에 대해 dynamic variants을 다르게 사용할 사용자 지정 데이터
 */

const firstVars: Variants = {
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

const secondVars: Variants = {
  start: { opacity: 0, scale: 0.6 },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      delay: 0.4,
      delayChildren: 0.6,
      staggerChildren: 0.1,
      duration: 0.5,
      bounce: 0.5,
    },
  },
};

const sectionCircleVars: Variants = {
  start: {
    opacity: 0,
    y: -10,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.5,
    },
  },
};

export function Home() {
  return (
    <>
      <Wrapper>
        <BoxContainer>
          {Array.from({ length: 4 }).map((_, index) => (
            <FirstBox
              key={index}
              variants={firstVars}
              initial="start"
              animate="end"
              custom={index}
            />
          ))}

          {Array.from({ length: 4 }).map((_, index) => (
            <SecondBox
              key={index}
              variants={secondVars}
              initial="start"
              animate="end"
            >
              <BoxInCircle variants={sectionCircleVars} custom={0} />
              <BoxInCircle variants={sectionCircleVars} custom={1} />
              <BoxInCircle variants={sectionCircleVars} custom={2} />
              <BoxInCircle variants={sectionCircleVars} custom={3} />
            </SecondBox>
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

const FirstBox = styled(motion.div)`
  width: 100%;
  height: 12.5rem;
  background-color: ${({ theme }) => theme.bgColorDeep}aa;
  border-radius: 2rem;
  box-shadow: ${({ theme }) => theme.shadow.box};
  ${({ theme }) => theme.CursorActive};
  transition: 0.2s linear background;
  &:hover {
    background-color: ${({ theme }) => theme.bgColorDeep}db;
  }
`;

const SecondBox = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: 100%;
  height: 12.5rem;
  background-color: ${({ theme }) => theme.bgColorDeep}4a;
  border-radius: 2rem;
  box-shadow: ${({ theme }) => theme.shadow.box};
  ${({ theme }) => theme.CursorActive};
  transition: 0.2s linear background;
  &:hover {
    background-color: ${({ theme }) => theme.bgColorDeep}7a;
  }
  ${({ theme }) => theme.media.max.mobile`
    grid-template-columns: repeat(4,minmax(0,1fr));
  `}
`;

const BoxInCircle = styled(motion.div)`
  place-self: center;
  width: 4.375rem;
  height: 4.375rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bgColor};
  box-shadow: ${({ theme }) => theme.shadow.box1};
`;
