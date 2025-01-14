import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import "swiper/css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// fonts and icons
import "././assets/css/icofont.min.css";
import "././assets/css/animate.css";
import "././assets/css/style.min.css";
import Home from "./home/Home";
import Blog from "./blog/Blog";
import Shop from "./shop/Shop";
import SingleProduct from "./shop/SingleProduct";
import CartPage from "./shop/CartPage";
import SingleBlog from "./blog/SingleBlog";
import About from "./about/About";
import Contact from "./contact/Contact";
import Login from "./components/Login";
import AuthProvider from "./context/AuthProvider";
import SignUp from "./components/SignUp";
import ErrorPage from "./components/ErrorPage";
// import ScrollToTop from "./components/ScrollToTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/blog",
        element: <Blog />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/blog/:id",
        element: <SingleBlog />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/shop",
        element: <Shop />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/shop/:id",
        element: <SingleProduct />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/cartPage",
        element: <CartPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
