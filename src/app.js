import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "../src/component/Footer";
import Error from "../src/component/Error";
import Contact from "../src/component/Contact";
import Cart from "../src/component/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestrauntMenu from "./component/RestrauntMenu";
import { Provider } from "react-redux";
import Profile from "../src/component/Profile";
import ShimmerUi from "../src/component/ShimmerUi";
import UserContext from "./utils/UserContext";
import store from "./utils/store";
// import Instamart from "./component/Instamart";

// CHUNKING,ON DEMAND LOADING,DYANAMIC IMPORT,LAZY IMPORT
const Instamart = lazy(() => import("./component/Instamart"));
const About = lazy(() => import("../src/component/About.js"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Saurabh Pande",
    email: "suport@pande.com",
  });
  return (
    <>
      <Provider store={store}>
        {/* <Header /> OPTIONAL CHECK*/}
        <UserContext.Provider
          value={{
            user: user,
            setUser: setUser,
          }}>
          <Header />
          <Outlet />
          {/* Footer() */}
          {<Footer />}
        </UserContext.Provider>
      </Provider>
    </>
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
        element: (
          <Body
            user={{
              name: "Namaste React",
              email: "sp4343@gmail.com",
            }}
          />
        ),
      },
      {
        path:"/resmenu/:id",
        element: <RestrauntMenu/>,
       },
      {
        path: "/about",
        element: (
          <Suspense fallback={<ShimmerUi />}>
            <About />
          </Suspense>
        ),
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
