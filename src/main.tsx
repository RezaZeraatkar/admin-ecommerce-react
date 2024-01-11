import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { Provider } from 'react-redux';

// router dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// tailwind gloabls
import '@/globals.css';

// css baseline
import CssBaseline from '@mui/material/CssBaseline';

// fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// layout and pages
import RootLayout from '@/pages/layout';
import Product from '@/pages/product/page';
import ProductsList from '@/pages/products-list/page';
import Feature from '@/pages/feature/page';
import EditProduct from './pages/editProduct/page';

import store from '@/store';

const cache = createCache({
  key: 'css',
  prepend: true,
});

// routes / pages
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'products',
        element: <ProductsList />,
      },
      {
        path: 'product/add',
        element: <Product />,
      },
      {
        path: 'product/edit/:id',
        element: <EditProduct />,
      },
      {
        path: 'feature/:action/:fid?',
        element: <Feature />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <CacheProvider value={cache}>
          <RouterProvider router={router} />
        </CacheProvider>
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>
);
