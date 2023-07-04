import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import About from "../src/component/About.js";
import Error from "../src/component/Error";
import Contact from "../src/component/Contact";
import Cart from "../src/component/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      {Footer()}
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const roots = ReactDOM.createRoot(document.getElementById("root"));
// roots.render(<HeaderComponent />);
roots.render(<RouterProvider router={appRouter} />);
