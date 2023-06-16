import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import { DarkModeToggle, ScrollToBottom, ScrollToTop } from 'components';

export function Layout() {
  return (
    <>
      <Suspense fallback={null}>
        <Wrapper>
          <Outlet />
          <ScrollToTop />
          <ScrollToBottom />
          <DarkModeToggle />
        </Wrapper>
      </Suspense>
    </>
  );
}

const Wrapper = styled.main`
  display: inline-block;
  width: 100%;
  height: 100%;
  min-height: calc(100vh);
  padding: 4.125rem 0.5rem 2rem;
  overflow: hidden;
`;
