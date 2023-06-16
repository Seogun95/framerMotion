import { useState, useEffect, useCallback } from 'react';
import { ScrollDown } from 'assets/svg';
import styled from 'styled-components';
import { throttle } from 'lodash';

export const ScrollToBottom = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToBottom = throttle(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }, 500);

  const handleScroll = useCallback(() => {
    if (
      window.pageYOffset <
      document.documentElement.scrollHeight - window.innerHeight
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <ScrollToBottomContainer visible={isVisible} onClick={handleScrollToBottom}>
      <ScrollToBottomIcon />
    </ScrollToBottomContainer>
  );
};

const ScrollToBottomContainer = styled.button<{ visible: boolean }>`
  position: fixed;
  z-index: 99999;
  margin: 0.8rem 0.5rem;
  padding: 0;
  bottom: 2.8rem;
  right: 3rem;
  background-color: transparent;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) =>
    visible ? 'translateY(0)' : 'translateY(2rem)'};
  ${({ theme, visible }) => theme.media.max.mobile`
    margin: 0.4rem 0;
    bottom: 0;
    opacity: .8;
    transform: ${visible ? 'translateY(0)' : 'translateY(4rem)'};
    &:hover { opacity: 1 }
  `}
`;

const ScrollToBottomIcon = styled(ScrollDown)`
  width: 2.425rem;
  height: 2.425rem;
  transition: 0.2s ease;
  filter: ${({ theme }) => theme.shadow.drop};
  &:hover {
    filter: ${({ theme }) => theme.shadow.drop_Hover};
  }
  &:active {
    filter: ${({ theme }) => theme.shadow.drop} grayscale(0.3);
  }
  * {
    fill: ${({ theme }) => theme.scrollbar.iconBg};
    stroke: ${({ theme }) => theme.scrollbar.iconStroke};
  }
  ${({ theme }) => theme.media.max.mobile`
    &:hover, &:active {
      filter: ${theme.shadow.drop};
    }
  `}
`;
