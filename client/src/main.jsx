import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import getProfil from "./services/profils";

import App from "./App";
import Accueil from "./pages/Accueil";
import Chat from "./pages/Chat";
import Cart from "./pages/Cart";
import { CartProvider } from "./contexts/CartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
        loader: getProfil,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
