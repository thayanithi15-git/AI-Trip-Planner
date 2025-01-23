import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainTrip from './pages/trip/page';
import Header from './components/custom/header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/trip-plan',
    element: <MainTrip />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="bg-gradient-to-b from-gray-700 via-gray-900 to-black min-h-screen">
      <Header />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
);
