import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

/**
*Layout animation
layout: boolean | "position" | "size"
true인 경우 이 컴포넌트는 레이아웃이 변경될 때 새 위치에 자동으로 애니메이션을 적용합니다. 크기나 위치가 변경될 때 모션 컴포넌트의 레이아웃에 자동으로 애니메이션을 적용하려면 레이아웃 prop을 제공합니다. 부모 플렉스박스 방향, 너비, 상단/오른쪽 등 레이아웃 변경의 원인이 무엇이든 상관없이 애니메이션 자체는 최대 성능을 위해 변환으로 수행됩니다.
ex) < motion.div layout>< /motion.div>

Syncing layout animations
모션 컴포넌트의 layout prop은 레이아웃이 변할 때마다, 자동으로 애니메이션을 적용합니다.

Animate between components
AnimateSharedLayout은 동일한 layoutId prop을 가진 모션 컴포넌트들 간에 애니메이션을 적용할 수 있습니다. layoutId가 있는 새 컴포넌트가 추가되고 다른 컴포넌트가 제거되면 이전 컴포넌트에서 새 컴포넌트로 레이아웃 애니메이션을 수행합니다. 새 컴포넌트는 이전 컴포넌트의 애니메이션 값도 초기 상태로 상속합니다. 따라서 시각적으로 하나의 연속 컴포넌트로 처리됩니다.
*/

export const SharedLayout = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(prev => !prev);

  return (
    <>
      <Wrapper onClick={handleClick}>
        <Box>{!click ? <Circle layoutId="circle" /> : null}</Box>
        <Box>{click ? <Circle layoutId="circle" /> : null}</Box>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.FlexRow};
  ${({ theme }) => theme.FlexCenter};
  height: calc(100vh - 7rem);
  gap: 1rem;
`;

const Box = styled(motion.div)`
  ${({ theme }) => theme.FlexRow};
  ${({ theme }) => theme.FlexCenter};
  width: 12.5rem;
  height: 12.5rem;
  background-color: ${({ theme }) => theme.bgColor};
  border-radius: 0.9375rem;
  box-shadow: 0 0.125rem 0.1875rem rgba(0, 0, 0, 0.1),
    0 0.625rem 1.25rem rgba(0, 0, 0, 0.06);
  margin-bottom: 1rem;
`;

const Circle = styled(motion.span)`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.blue};
`;
