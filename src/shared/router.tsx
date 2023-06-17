import { createBrowserRouter } from 'react-router-dom';
import { Suspense, createElement } from 'react';

import App from 'App';

import { Home, Overlay, SharedLayout, Slider } from 'pages';
import { Layout, NotFound } from 'shared';
import { Modal } from 'pages/framer/Modal';
import { ROUTE_MAP } from 'components/constants/routes';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: (
        <Suspense fallback={null}>
          <NotFound />
        </Suspense>
      ),
      children: [
        {
          element: <Layout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            ...Object.entries(ROUTE_MAP).map(([PATH, DATA]) => {
              return {
                path: PATH,
                element: createElement(DATA.COMPONENT),
              };
            }),
          ],
        },
      ],
    },
  ],
  { basename: process.env.PUBLIC_URL },
);

export default router;
