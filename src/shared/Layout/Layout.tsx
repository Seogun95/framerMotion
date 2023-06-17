import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import { ProgressBar, ScrollToggle } from 'components';
import { RouterScrollTop } from 'shared/RouterScrollTop';

export function Layout() {
  return (
    <>
      <Suspense fallback={null}>
        <ProgressBar />
        <RouterScrollTop />
        <Wrapper>
          <Outlet />
          <ScrollToggle />
        </Wrapper>
      </Suspense>
    </>
  );
}

const Wrapper = styled.main`
  ${({ theme }) => theme.FlexRow};
  ${({ theme }) => theme.FlexCenter};
  min-height: 100vh;
  height: 100%;
  width: 100vw;
  padding: 4rem 1rem 1rem;
`;
