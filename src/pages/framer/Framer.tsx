import React, { useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import { motion } from 'framer-motion';
import { framerOptions } from './framerOptions';
import { FramerMotionValue } from './FramerMotionValue';

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
 *
 * ✨ dragConstraints - 허용된 드래그 가능 영역에 제약 조건을 적용
 *  - dragConstraints에는 드래그 가능한 컴포넌트의 가장자리 거리를 정의 (드래그 가능한 영역에 가장자리에서 얼마만큼까지 허용할 것인지 지정)
 *  - 픽셀 : < motion.div drag="x" dragConstraints={{ left: 0, right: 300 }}/ >
 *  - Ref : const MyComponent = () => {
             const constraintsRef = useRef(null)
              return (
                < motion.div ref={constraintsRef}>
                < motion.div drag dragConstraints={constraintsRef} />
                < /motion.div>
              )
            }

 * ✨ dragSnapToOrigin={boolean}: true인 경우 드래그 가능한 요소는 드래그를 놓을 때, 원점으로 다시 애니메이션
 * ✨ dragElastic={0.2}: DragElastic - 외부 제약 조건에서 허용되는 이동 정도. 0 = 움직임 없음, 1 = 전체 움직임. 기본적으로 0.5로 설정. 움직임을 비활성화하기 위해 false로 설정할 수 있음

 */

export const Framer = () => {
  const theme = useTheme();
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <BoxContainer>
        {Array.from({ length: 2 }).map((_, index) => (
          <DefaultBox
            key={index}
            variants={framerOptions.firstVars}
            initial="start"
            animate="end"
            custom={index}
            first={`${true}`}
          />
        ))}

        {Array.from({ length: 4 }).map((_, index) => (
          <SecondBox
            key={index}
            variants={framerOptions.secondVars}
            initial="start"
            animate="end"
          >
            <BoxInCircle
              variants={framerOptions.sectionCircleVars}
              custom={0}
            />
            <BoxInCircle
              variants={framerOptions.sectionCircleVars}
              custom={1}
            />
            <BoxInCircle
              variants={framerOptions.sectionCircleVars}
              custom={2}
            />
            <BoxInCircle
              variants={framerOptions.sectionCircleVars}
              custom={3}
            />
          </SecondBox>
        ))}

        <DefaultBoxContainer ref={divRef}>
          <DefaultBox
            variants={framerOptions.thirdVars(theme)}
            whileHover="hover"
            whileTap="click"
            whileDrag="drag"
            initial="start"
            animate="end"
            drag
            dragSnapToOrigin
            dragConstraints={divRef}
            dragElastic={0.1}
          />
        </DefaultBoxContainer>
        <FramerMotionValue />
      </BoxContainer>
    </>
  );
};

const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13.125rem, max-content));
  grid-gap: 1rem;
  justify-content: center;
  width: 75rem;
  ${({ theme }) => theme.media.max.tablet`
    grid-template-columns: repeat(2,minmax(0,1fr));
  `}

  ${({ theme }) => theme.media.max.mobile`
    grid-template-columns: repeat(1,minmax(0,1fr));
  `}
`;

const DefaultBoxContainer = styled.div`
  ${({ theme }) => theme.FlexRow};
  ${({ theme }) => theme.FlexCenter};
  width: 12.5rem;
  height: 12.5rem;
  background-color: ${({ theme }) => theme.bgColor}41;
  border-radius: 1rem;
  overflow: hidden;
`;

const DefaultBox = styled(motion.div)<{ first?: string }>`
  width: ${({ first }) => (first ? '100%' : '6rem')};
  height: ${({ first }) => (first ? '12.5rem' : '6rem')};
  background-color: ${({ theme, first }) =>
    first ? `${theme.bgColorDeep}aa` : `${theme.colors.brand}aa`};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadow.box};
  ${({ theme }) => theme.CursorActive};
  transition: 0.2s linear background;
  &:hover {
    background-color: ${({ theme, first }) =>
      first ? `${theme.bgColorDeep}db` : `${theme.colors.brand}db`};
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
