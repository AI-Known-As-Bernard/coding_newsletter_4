import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css'
import Index from './pages/Index'
import Blog from './pages/Blog'
import Students from './pages/Students'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
  {path: '/', element:<Index/>},
  {path:'/blog', element:<Blog/>},
  {path: '/students', element:<Students/>},
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


