import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { AboutPage } from './pages';
import reportWebVitals from './reportWebVitals';
import './index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AboutPage />
  }
]);

  // {
  //   path: '/portfolio',
  //   element: <PortfolioPage />
  // },
  // {
  //   path: '/contact',
  //   element: <ContactPage />
  // }

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
