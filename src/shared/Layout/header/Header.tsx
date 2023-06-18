import { logoActive, logoHover, logo } from 'assets/svg';
import { isDarkAtom } from 'atom';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';
import _ from 'lodash';
import { ROUTER_LIST } from 'components/constants/routes';
import { RouterNav } from '../nav/RouterNav';
import { DarkModeToggle } from 'components';
import { SocialLink } from '../nav/SocialLink';
import { SocialSidebar } from '../nav/SocialSidebar';
import { Hamburger } from '../nav/Hamburger';

interface IHeader {
  isScrolled: boolean;
  isScrollTop: boolean;
}
export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isDark = useRecoilValue(isDarkAtom);

  const [scroll, setScroll] = useState<IHeader>({
    isScrolled: false,
    isScrollTop: true,
  });
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);
  const homeCheck = location.pathname === '/';
  const scrollTop = window.pageYOffset;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setScroll(prevState => {
        if (scrollTop > lastScrollTop && scrollTop > 0) {
          return { ...prevState, isScrolled: true };
        } else {
          return { isScrollTop: false, isScrolled: false };
        }
      });
      setLastScrollTop(scrollTop);
    };

    const handleResize = _.debounce(() => {
      if (scrollTop === 0) {
        setScroll({ isScrollTop: true, isScrolled: false });
      }
      setLastScrollTop(scrollTop);
    }, 200);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollTop, scrollTop]);

  useEffect(() => {
    if (scrollTop === 0) {
      setScroll({ isScrollTop: true, isScrolled: false });
    }
    setLastScrollTop(scrollTop);
  }, [location, scrollTop]);

  const scrollToTop = () => {
    if (homeCheck && scrollTop === 0) return;
    if (!homeCheck && scrollTop === 0) {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <HeaderStyles
      className={scroll.isScrolled ? 'isHidden' : ''}
      scrollTop={`${scroll.isScrollTop}`}
    >
      <HeaderContainer>
        <HeaderLogoContainer>
          <HeaderLink
            onClick={scrollToTop}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={isHovered ? 'active' : ''}
          >
            <LogoImg src={logo} isDark={isDark} />
            <LogoText>Framer</LogoText>
          </HeaderLink>
          {ROUTER_LIST.map(([PATH, DATA]) => {
            return PATH === location.pathname
              ? DATA.NAV && <RouterNav key={PATH} />
              : null;
          })}
          <DarkModeToggle side={false} />
          <SocialLink side={false} />
          <SocialSidebar />
          <Hamburger />
        </HeaderLogoContainer>
      </HeaderContainer>
    </HeaderStyles>
  );
}

const HeaderStyles = styled.header<{ scrollTop: string }>`
  width: 100%;
  height: 3.75rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  z-index: 99999;
  ${({ scrollTop }) =>
    scrollTop === 'true'
      ? css`
          background-color: transparent;
        `
      : css`
          ${props => props.theme.DarkBlur}
        `}
  &.isHidden {
    transform: translateY(-100%);
    border: none;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 0.75rem 0 1.5rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.bgColorDeep};
  ${({ theme }) => theme.media.min.tablet`
    padding: 0 .75rem 0 2rem;
  `}

  ${({ theme }) => theme.media.min.laptop`
    padding: 0 2rem
  `}
`;

const HeaderLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 86rem;
  height: 100%;
`;

const LogoImg = styled.img<{ isDark: boolean }>`
  content: url(${logo});
  width: 2rem;
  height: 100%;
  padding: 0.2rem;
  filter: ${({ isDark }) => isDark && 'invert(1)'};
`;

const LogoText = styled.span`
  padding-left: 0.5rem;
  font-weight: 500;
  transition: 0.3s ease opacity;
`;
const HeaderLink = styled.a`
  display: flex;
  align-items: center;
  padding-top: 0.0625rem;
  margin-right: auto;
  height: 3.125rem;
  &.active {
    &:hover ${LogoImg} {
      content: url(${logoHover});
    }
    &:active ${LogoImg} {
      content: url(${logoActive});
    }
    &:hover ${LogoText} {
      opacity: 0.6;
    }
  }
`;
