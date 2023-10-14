import React from 'react';
import {RootRoute, Router, RouterProvider} from "@tanstack/react-router";
import MainLayout from "./layouts/mainLayout/MainLayout";
import Home from "./pages/Home";

const rootRoute = new RootRoute({
    component: () =>
    (
    <MainLayout>
        <Home/>
    </MainLayout>
    ),
})

const routeTree = rootRoute.addChildren([])
const router = new Router({ routeTree })

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
