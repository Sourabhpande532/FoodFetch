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
import RestrauntMenu from "./component/RestrauntMenu";
import Profile from "../src/component/Profile";

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
          // parentPath/{path} = localhost:1244/about
        children: [
          {
            path: "profile",
            element: <Profile />,
            // parentPath/{path} = localhost:1244/about/profile
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestrauntMenu />,
      },
    ],
  },
]);

const roots = ReactDOM.createRoot(document.getElementById("root"));
// roots.render(<HeaderComponent />);
roots.render(<RouterProvider router={appRouter} />);
