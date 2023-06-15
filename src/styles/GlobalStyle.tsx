import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html, body {
overflow: overlay;
width: 100%;
}

body {
  margin: 0;
  overflow-x: hidden;
  background: ${props => props.theme.bgColor};
  color: ${props => props.theme.color};
  font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  font-weight: 500;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

code {
    color: ${props => props.theme.color};
    border: .0625rem solid #e96900;
    padding: .0625rem .3125rem;
    margin: 0 .3125rem 0 .1875rem;
    border-radius: .3125rem;
    font-family: menlo !important;
    word-break: break-all
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

button {
  display: inline-block;
  text-align: center;
  transition: .2s ease;
  background-color: ${({ theme }) => theme.bgColorDeep};
  color: ${({ theme }) => theme.color};
  border: none;
  padding: .5rem;
  border-radius: .625rem;
  white-space: pre;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: .7;
  }

}

input {
  background-color: ${({ theme }) => theme.bgColorDeep};
  border: none;
  border-radius: .625rem;
  padding: .5rem 1rem;
  color: ${({ theme }) => theme.color};
  overflow: hidden;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active,
input:autofill,
input:autofill:hover,
input:autofill:focus,
input:autofill:active  {
	-webkit-text-fill-color: ${({ theme }) => theme.color};
  -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.bgColorDeep} inset;
  box-shadow: 0 0 0px 1000px ${({ theme }) => theme.bgColorDeep} inset;
  caret-color: ${({ theme }) => theme.color} !important;
  transition: background-color 5000s ease-in-out 0s;
}

button, a, span, p {
  line-height: 1.13;
}

h1 { font-size: 2.5rem }
h2 { font-size: 2.1rem }
h3 { font-size: 1.5rem }
h4 { font-size: 1.2rem;}

h1,h2,h3,h4,h5,h6{
  vertical-align: baseline;
  margin: 0;
  padding: 0;
  font-weight: bold;
}

mark {
  color: black;
  font-weight: bold;
  padding: .2rem .2rem;
  border-radius: .3125rem;
  margin: 0 .3125rem;
}

/* Prevent Drag */
img {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}

textarea {
  border: none;
  padding: .5rem;
  resize: none;
  white-space: pre-wrap;
}

* {
  box-sizing: border-box;
  text-decoration-line: none;
  color: inherit;
}

/* HashRoute smooth motion */
* {
  scroll-behavior: smooth;
}

*:focus {
    outline: none !important;
  }

code {
  font-family: 'Menlo', 'Monaco', 'Consolas', 'Courier New',
    monospace;
}

::-webkit-scrollbar {
    height: 1rem;
    width: .5rem;
    background: transparent;
}

::-webkit-scrollbar:horizontal {
    height: .5rem;
    width: 1rem
}

::-webkit-scrollbar-corner, ::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.scrollbar.bg};
  background-clip: padding-box;
  border: 0 solid transparent;
  border-radius: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.scrollbar.hover};
  }
}

${({ theme }) => theme.media.tablet`
    .scrollbar-trigger ::-webkit-scrollbar-thumb {
        visibility:hidden;
      &:hover {
        visibility: visible;
      }
    }
`}


/* Reset */
html, body, div, span, applet, object, iframe,
p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
ol, ul {
  list-style: decimal;
  margin: 0;
  padding: 0 20px;
 li {
  margin: .2rem 0
 }
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

html {
  font-size: 16px;
}

`;
