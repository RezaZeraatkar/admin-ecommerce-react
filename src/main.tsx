import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

// router dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
import Category from '@/pages/features/page';
import CategoriesList from '@/pages/features-list/page';

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
        path: 'products/:action/:pid?',
        element: <Product />,
      },
      {
        path: 'features',
        element: <Category />,
      },
      {
        path: 'features/:action/:fid?',
        element: <CategoriesList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <StyledEngineProvider injectFirst>
      <CacheProvider value={cache}>
        <RouterProvider router={router} />
      </CacheProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
