import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

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
import EditProduct from './pages/editProduct/page';
import Dashboard from './pages/dashboard/page';

// redux store
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
        path: '/',
        element: <Dashboard />,
      },
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
