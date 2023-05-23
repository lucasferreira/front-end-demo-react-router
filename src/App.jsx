import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Home from "./routes/Home";
import ListaCompras from "./routes/ListaCompras";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "lista-compras",
        element: <ListaCompras />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
