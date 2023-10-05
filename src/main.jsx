import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root';
import Home from './Pages/Home/Home';
// import About from './Pages/anything/About';
import Carrer from './Pages/Carrer';
import About from './Pages/About';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path:"/",
        element: <Home></Home>
      },
      {
       path:'/about',
       element:<About></About>
      },
      {
      path:'/carrer',
      element:<Carrer></Carrer>
    },
    {
     path:'/login',
     element:<Login></Login>
    },
    {
     path:'register',
     element:<Register></Register>
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
