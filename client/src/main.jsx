import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import getProfil from "./services/profils";

import App from "./App";
import Accueil from "./pages/Accueil"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: getProfil,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
