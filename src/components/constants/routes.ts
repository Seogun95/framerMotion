import {
  Home,
  Overlay,
  Slider,
  SharedLayout,
  Modal,
  SvgAnimation,
} from 'pages';

export interface RouteConfig {
  COMPONENT: () => JSX.Element;
  TITLE: string;
  NAV: boolean;
  ROUTE: boolean;
}

type RouteMap = Record<string, Readonly<RouteConfig>>;

export const ROUTE_MAP: RouteMap = Object.freeze({
  '/': {
    COMPONENT: Home,
    TITLE: '홈',
    NAV: true,
    ROUTE: true,
  },
  '/svg-animate': {
    COMPONENT: SvgAnimation,
    TITLE: 'Svg',
    NAV: true,
    ROUTE: true,
  },
  '/overlay': {
    COMPONENT: Overlay,
    TITLE: 'Overlay',
    NAV: true,
    ROUTE: true,
  },
  '/slider': {
    COMPONENT: Slider,
    TITLE: 'Slider',
    NAV: true,
    ROUTE: true,
  },
  '/shared-layout': {
    COMPONENT: SharedLayout,
    TITLE: 'Shared Layout',
    NAV: true,
    ROUTE: true,
  },
  '/modal': {
    COMPONENT: Modal,
    TITLE: 'Modal',
    NAV: true,
    ROUTE: true,
  },
});

export const ROUTER_LIST = Object.entries(ROUTE_MAP);
