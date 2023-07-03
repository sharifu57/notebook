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
import Notes from './pages/notes';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Login/>}/>
            <Route element={<AppLayout />}>
                <Route path='/home' element={<Home />}/>
                <Route path='/notes' element={<Notes />}/>
            </Route>
        </Route>
    )
)

export default function AppRouter() {
  return <RouterProvider router={router}/>
}
