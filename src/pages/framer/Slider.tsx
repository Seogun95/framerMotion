import { AnimatePresence, Variants, motion } from 'framer-motion';
import { includes } from 'lodash';
import React, { useState } from 'react';
import styled from 'styled-components';

/**
 * ✨<AnimatePresence mode="wait">
 *  - wait으로 설정하면 AnimatePresence는 한 번에 하나의 컴포넌트만 랜더링한다.
 *  - exiting중인 컴포넌트는 entering하는 컴포넌트가 렌더링되기 전에 exit 애니메이션을 완료한다.
 */

export const Slider = () => {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState<boolean | null>(null);

  const handlePrevCard = async () => {
    await setBack(true);
    setVisible(prev => (prev !== 1 ? prev - 1 : prev));
  };

  const handleNextCard = async () => {
    await setBack(false);
    setVisible(prev => (prev !== 10 ? prev + 1 : prev));
  };

  const slideVariants: Variants = {
    entry: (back: boolean) => {
      if (back === null) {
        return {
          x: 0,
          opacity: 0,
        };
      } else {
        return {
          x: back ? -500 : 500,
          opacity: 0,
          scale: 0,
        };
      }
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    hidden: (back: boolean) => ({
      x: back ? 200 : -200,
      opacity: 0,
      scale: 0,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <>
      <Wrapper>
        <Container>
          <AnimatePresence>
            <Box
              variants={slideVariants}
              initial="entry"
              animate="center"
              exit="hidden"
              key={visible}
              custom={back}
            >
              {visible}
            </Box>
            )
          </AnimatePresence>
          <ButtonContainer>
            {visible > 1 && <button onClick={handlePrevCard}>이전</button>}
            {visible < 10 && <button onClick={handleNextCard}>다음</button>}
          </ButtonContainer>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.FlexCol};
  ${({ theme }) => theme.FlexCenter};
`;

const Container = styled.div`
  position: relative;
  width: 12.5rem;
  height: 12.5rem;
`;
const Box = styled(motion.div)`
  //absolute 아니면 박스가 튄다
  position: absolute;
  top: 0;
  ${({ theme }) => theme.FlexRow};
  ${({ theme }) => theme.FlexCenter};
  width: 12.5rem;
  height: 12.5rem;
  background-color: ${({ theme }) => theme.bgColor};
  border-radius: 0.9375rem;
  box-shadow: 0 0.125rem 0.1875rem rgba(0, 0, 0, 0.1),
    0 0.625rem 1.25rem rgba(0, 0, 0, 0.06);
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: -3.125rem;
  left: 50%;
  transform: translateX(-50%);
  ${({ theme }) => theme.FlexRow};
  padding-top: 1rem;
  gap: 1rem;
`;
