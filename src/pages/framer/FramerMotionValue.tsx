import React, { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from 'framer-motion';
import styled from 'styled-components';

/**
 * ✨ useTransform 훅을 통해 MotionValues를 연결
 *  - useTransform()는 한 값 범위에서 다른 값 범위로 매핑하여 다른 MotionValue의 output을 변환하는 MotionValue를 만듦
 *  - x(Motion Value)값을 다른 output값으로 변환해준다. ex) x: -400 => 1
 *
      const x = useMotionValue(0)
      const input = [-200, 0, 200]
      const output = [0, 1, 0]
      const opacity = useTransform(x, input, output)
      useMotionValueEvent(opacity, 'change', el => console.log('opacity --->', el));
      return <motion.div drag="x" style={{ x, opacity }} />
 *
 */

export const FramerMotionValue = () => {
  const constraintsRef = useRef(null);

  const x = useMotionValue(0);
  // const scale = useTransform(x, [-800, 0, 800], [0.1, 1, 2]);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      'linear-gradient(to left,#9f5de5,#5FC3E4)',
      'linear-gradient(to left,#5FC3E4,#E55D87)',
      'linear-gradient(to left,#e8e357,#a8f79a)',
    ],
  );
  const shadow = useTransform(
    x,
    [-800, 0, 800],
    [
      '0 0rem 1rem rgba(10,10,10,1)',
      '0 0.2rem 0.4rem rgba(10,10,10,0.3)',
      '0 0rem 1rem rgba(10,10,10,1)',
    ],
  );

  // useMotionValueEvent(scale, 'change', el => console.log('transform --->', el));
  // useMotionValueEvent(rotateZ, 'change', el => console.log('rotateZ --->', el));

  return (
    <>
      <button onClick={() => x.set(100)}>이동</button>
      <Box
        ref={constraintsRef}
        drag="x"
        dragSnapToOrigin
        style={{
          x,
          // scale,
          rotateZ,
          background: gradient,
          boxShadow: shadow,
        }}
      ></Box>
    </>
  );
};

const Box = styled(motion.div)`
  width: 12.5rem;
  height: 12.5rem;
  background-color: black;
  border-radius: 0.9375rem;
  box-shadow: 0 0.125rem 0.1875rem rgba(0, 0, 0, 0.1),
    0 0.625rem 1.25rem rgba(0, 0, 0, 0.06);
`;
