import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import Login from './pages/login';
import AppLayout from './AppLayout';
import Home from './pages/home';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Login/>}/>
            <Route element={<AppLayout />}>
                <Route path='/' element={<Home />}/>
            </Route>
        </Route>
    )
)

export default function AppRouter() {
  return <RouterProvider router={router}/>
}
