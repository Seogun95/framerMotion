import styled from 'styled-components';
import { Framer } from './framer/Framer';

export function Home() {
  return (
    <>
      <Wrapper>
        <Framer />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.article`
  ${({ theme }) => theme.FlexRow};
  ${({ theme }) => theme.FlexCenter};
  width: 100%;
`;
