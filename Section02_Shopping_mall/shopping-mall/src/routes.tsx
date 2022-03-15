
import React from 'react';
import GlobalLayout from './pages/_layout'

const DynamicIndex = React.lazy(() => import('./pages/index'));
const DynamicProductsIndex = React.lazy(() => import('./pages/products/index'));
const DynamicQueryClient = React.lazy(() => import('./pages/queryClient'));
const DynamicProductsId = React.lazy(() => import('./pages/products/[id]'));


export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <DynamicIndex />, index: true},
      { path: '/products', element: <DynamicProductsIndex />, index: true},
      { path: '/queryClient', element: <DynamicQueryClient />, },
      { path: '/products/:id', element: <DynamicProductsId />, },
    ]
  }
]

export const pages = [
  { route: '/' },
  { route: '/products' },
  { route: '/queryClient' },
  { route: '/products/:id' },
]