import {
    createBrowserRouter,
    
  } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../Page/Home";
import CategoryNews from "../Page/CategoryNews";
import Login from "../Page/Login";
import Register from "../Page/Register";
import AuthLayout from "../layout/AuthLayout";
import NewsDetails from "../Page/NewsDetails";
import PrivetRoute from "../Provider/PrivetRoute";
import Loading from "../Page/Loading";
 export const router = createBrowserRouter([
    {
      path: "/",
      Component: HomeLayout,
      children:[
        {
            path:"/",
            Component:Home
        },
        {
            path:"/category/:id",
            Component:CategoryNews,
            loader:()=>fetch("/news.json"),
            hydrateFallbackElement:<Loading></Loading>
           
        }
      ]
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children:[
          {
            path:"/auth/login",
            Component:Login
          },
          {
            path:"/auth/register",
            Component:Register
          }]
      },
      {
        path: "/news-details/:id",
        element:<PrivetRoute>
          <NewsDetails></NewsDetails>
        </PrivetRoute> ,
        loader:()=>fetch("/news.json"),
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path: "/*",
        element: <div>Error404</div>,
      },
  ]);