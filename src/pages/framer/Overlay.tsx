import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

/**
* ✨AnimatePresence
*  - AnimatePresence를 사용하면 React 트리에서 컴포넌트가 제거될 때
    제거되는 컴포넌트에 애니메이션 효과를 줄 수 있다.
    React에는 다음과 같은 수명 주기 메서드가 없기 때문에 종료 애니메이션을 활성화해야 한다.
*/

export const Overlay = () => {
  const [show, setShow] = useState(false);
  const handleShowPress = () => setShow(prev => !prev);
  const handleMouseEnter = () => setShow(true);
  const handleMouseLeave = () => setShow(false);

  const boxVariants: Variants = {
    start: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
      },
    },
    hidden: {
      opacity: 0,
      y: -5,
    },
  };

  return (
    <>
      <Wrapper>
        <button
          onClick={handleShowPress}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {show ? '마우스 떼서 숨기기' : '마우스 올려서 보기'}
        </button>
        <AnimatePresence>
          {show ? (
            <Box
              animate="visible"
              exit="hidden"
              initial="start"
              variants={boxVariants}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ) : null}
        </AnimatePresence>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.FlexCol};
  align-items: center;
  min-width: 18.75rem;
  min-height: 18.75rem;
`;

const Box = styled(motion.div)`
  ${({ theme }) => theme.FlexRow};
  align-items: flex-start;
  width: 12.5rem;
  height: 12.5rem;
  background-color: ${({ theme }) => theme.bgColor};
  border-radius: 0.9375rem;
  box-shadow: 0 0.125rem 0.1875rem rgba(0, 0, 0, 0.1),
    0 0.625rem 1.25rem rgba(0, 0, 0, 0.06);
`;
