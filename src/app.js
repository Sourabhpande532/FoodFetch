import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import About from "../src/component/About.js"
import Error from "../src/component/Error"
import { createBrowserRouter,RouterProvider } from "react-router-dom";


const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      {/* Footer() */}
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement: <Error/>
  },
  {
    path: "/about",
    element:<About/>,
  },
])

const roots = ReactDOM.createRoot(document.getElementById("root"));
// roots.render(<HeaderComponent />);
roots.render(<RouterProvider router={appRouter}/>);

