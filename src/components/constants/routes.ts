import { Home, Overlay, Slider, SharedLayout, Modal } from 'pages';

export interface RouteConfig {
  COMPONENT: () => JSX.Element;
  NAV: boolean;
  TITLE: string;
}

type RouteMap = Record<string, Readonly<RouteConfig>>;

export const ROUTE_MAP: RouteMap = Object.freeze({
  '/': {
    COMPONENT: Home,
    NAV: true,
    TITLE: '홈',
  },
  '/overlay': {
    COMPONENT: Overlay,
    TITLE: 'Overlay',
    NAV: true,
  },
  '/slider': {
    COMPONENT: Slider,
    TITLE: 'Slider',
    NAV: true,
  },
  '/sharedLayout': {
    COMPONENT: SharedLayout,
    TITLE: 'SharedLayout',
    NAV: true,
  },
  '/modal': {
    COMPONENT: Modal,
    TITLE: 'Modal',
    NAV: true,
  },
});

export const ROUTER_LIST = Object.entries(ROUTE_MAP);
