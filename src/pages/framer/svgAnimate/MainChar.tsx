import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Variants, motion } from 'framer-motion';

export const MainChar = () => {
  const theme = useTheme();

  const logoVariant: Variants = {
    start: {
      fill: `${theme.bgColor2}00`,
      pathLength: 0,
    },
    end: {
      fill: `${theme.bgColor2}`,
      pathLength: 1,
    },
  };

  return (
    <>
      <SVG x="0px" y="0px" viewBox="0 0 28.7 31.4">
        <motion.path
          initial={'start'}
          animate={'end'}
          variants={logoVariant}
          transition={{
            delay: 0.4,
            default: { duration: 2, delay: 0.6 },
            fill: { duration: 2, delay: 1.7 },
          }}
          d="M26.3,5.9c0.1-1.3-0.1-2.8-1.1-3.7c-0.5-0.4-1.2-0.6-1.8-0.3c-0.8,0.3-1.3,1.1-1.2,2c0.1,0.7,0.1,1.4,0,2.1
		c-2.1-1.9-4.9-3-7.9-3S8.5,4.1,6.4,6c-0.1-0.7-0.1-1.5,0-2.1C6.5,3,6,2.2,5.2,1.9C4.6,1.6,3.9,1.8,3.4,2.2c-1,0.9-1.2,2.4-1.1,3.7
		C2.4,7,2.8,8.5,3.9,9.1c-1,1.8-1.6,3.8-1.6,6c0,2,0.6,3.8,1.3,5.3c0.1,0.2-0.3,1.1-0.3,1.4c-0.1,0.6,0,1.2,0.1,1.7
		c0.7,3.1,3.6,4.9,6.5,5.7c3.6,1.1,7.5,1,10.9-0.6c2.6-1.2,4.8-3.7,4.5-6.7c0-0.2-0.4-1.2-0.3-1.4c1.2-2.4,1.3-3.5,1.3-5.4
		c0-2.2-0.6-4.3-1.6-6C25.8,8.5,26.2,7,26.3,5.9z M9.7,21.9c-1.8,0-3.3-1.5-3.3-3.4c0-1.8,1.4-2.4,3.3-2.4c1.8,0,3.3,0.5,3.3,2.4
		C13,20.4,11.5,21.9,9.7,21.9z M15,22.9c-0.5,0-0.8-0.3-0.8-0.7c-0.1-0.4,1.6-0.4,1.6,0C15.8,22.6,15.4,22.9,15,22.9z M19.7,21.9
		c-1.5,0-2.7-1.2-2.7-2.7s1.2-1.7,2.7-1.7s2.7,0.2,2.7,1.7S21.2,21.9,19.7,21.9z"
        />
      </SVG>
    </>
  );
};

const SVG = styled.svg`
  height: 12.5rem;
  path:last-child {
    stroke: ${({ theme }) => theme.bgColor2};
    stroke-width: 0.2;
  }
`;
