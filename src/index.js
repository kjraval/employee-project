import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Form from './Form';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
   },{
    path: "/create-new-employee",
    element: <Form />,
   },



]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

