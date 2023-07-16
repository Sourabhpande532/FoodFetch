import React, { lazy, Suspense } from "react";
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
import ShimmerUi from "../src/component/ShimmerUi";
// import Instamart from "./component/Instamart";

// CHUNKING,ON DEMAND LOADING,DYANAMIC IMPORT,LAZY IMPORT
const Instamart = lazy(() => import("./component/Instamart"));

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
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<ShimmerUi />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const roots = ReactDOM.createRoot(document.getElementById("root"));
// roots.render(<HeaderComponent />);
roots.render(<RouterProvider router={appRouter} />);
