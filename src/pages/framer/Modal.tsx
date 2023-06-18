import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useState } from 'react';
import styled, { useTheme } from 'styled-components';

const vars: Variants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.1,
    },
  },
  hidden: {
    opacity: 0.1,
  },
};

const getXValue = (index: number) => {
  if (index === 0 || index === 2) {
    return -10;
  } else if (index === 1 || index === 3) {
    return 10;
  }
};

const getYValue = (index: number) => {
  if (index === 0 || index === 1) {
    return -5;
  } else if (index === 2 || index === 3) {
    return 5;
  }
};

const boxHoverVars: Variants = {
  hover: (index: number) => ({
    scale: 1.04,
    x: getXValue(index),
    y: getYValue(index),
  }),
};
export function Modal() {
  const [id, setId] = useState<null | string>(null);
  const [circle, setCircle] = useState<boolean>(false);
  const handleSwitch = () => {
    setCircle(prev => !prev);
  };

  const theme = useTheme();
  return (
    <Wrapper>
      <Grid variants={vars} initial="initial" animate="visible">
        {['1', '2', '3', '4'].map((value, index) => {
          const value1 = value === '1';
          const value4 = value === '4';
          return value1 || value4 ? (
            <Box
              key={value}
              layoutId={value}
              onClick={() => setId(value)}
              whileHover="hover"
              variants={boxHoverVars}
              custom={index}
            >
              {value1 && !circle ? <Circle layoutId="circle" /> : null}
              {value4 && circle ? <Circle layoutId="circle" /> : null}
            </Box>
          ) : (
            <Box
              key={value}
              onClick={() => setId(value)}
              layoutId={value}
              whileHover="hover"
              variants={boxHoverVars}
              custom={index}
            />
          );
        })}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            variants={vars}
            initial="initial"
            animate="visible"
            exit="hidden"
          >
            <Box
              onClick={() => setId(null)}
              style={{
                width: '25rem',
                height: '12.5rem',
                backgroundColor: theme.bgColor2,
              }}
              layoutId={id}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
      <SwitchBtn onClick={handleSwitch}>SWITCH</SwitchBtn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.FlexCol};
  ${({ theme }) => theme.FlexCenter};
`;

const Box = styled(motion.div)`
  width: 100%;
  min-height: 12.5rem;
  border-radius: 2.5rem;
  background-color: ${({ theme }) => theme.bgColor2}14;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 0.625rem;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 9999999;
  background-color: ${({ theme }) => theme.bgColor}db;
`;

const Circle = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  height: 3.125rem;
  width: 3.125rem;
  border-radius: 1.5625rem;
  box-shadow: ${({ theme }) => theme.shadow.box};
`;

const SwitchBtn = styled.button`
  margin-top: 1rem;
`;
