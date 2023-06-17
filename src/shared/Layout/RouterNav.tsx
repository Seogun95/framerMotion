import { ROUTER_LIST } from 'components/constants/routes';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export function RouterNav() {
  const { pathname } = useLocation();
  return (
    <Wrapper>
      <Nav>
        {ROUTER_LIST.map(([PATH, DATA]) => {
          if (DATA.NAV) {
            const isActive = PATH === pathname;
            return (
              <NavLink to={PATH} key={DATA.TITLE} active={`${isActive}`}>
                {isActive && <Highlight key={DATA.TITLE} layoutId="nav" />}
                <NavTitle>{DATA.TITLE}</NavTitle>
              </NavLink>
            );
          }
          return null;
        })}
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
  display: none;
  ${({ theme }) => theme.media.min.tablet`
    display: flex;
  `}
`;

const NavLink = styled(Link)<{ active: string }>`
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: 3.75rem;
  font-size: 0.8rem;
  transition: 0.5s ease;
  opacity: ${({ active }) => (active === 'true' ? 1 : 0.7)};
  position: relative;
  ::after {
    content: '';
    position: absolute;
    width: 1px;
    height: 24px;
    background-color: ${({ theme }) => theme.bgColorDeep};
    right: 0;
  }
  :hover {
    opacity: 1;
  }
`;

const NavTitle = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0.5rem;
`;

const Highlight = styled(motion.div)`
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 0.125rem;
  border-radius: 0.5rem;
  background: linear-gradient(90deg, rgb(245, 112, 112), rgb(240, 41, 41));
`;
