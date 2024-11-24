import App from "@/App";
import ProtectedRequirdAuth from "@/components/Auth/ProtectedRequirdAuth";
import ProtectedRequiredUnAuth from "@/components/Auth/ProtectedRequiredUnAuth";
import AuthLayout from "@/layouts/AuthLayout/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout/DashboardLayout";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import NotFoundLayout from "@/layouts/NotFoundLayout/NotFoundLayout";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import AddEditProduct from "@/pages/Dashboard/AddEditProduct";
import ProdcutDetails from "@/pages/Dashboard/ProdcutDetails";
import Products from "@/pages/Dashboard/Products";
import Home from "@/pages/Home";
import PaySuccess from "@/pages/PaySuccess";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import { NuqsAdapter } from 'nuqs/adapters/react-router'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
        <ProtectedRequirdAuth>
          <MainLayout />
          </ProtectedRequirdAuth>
          ),
        children: [
          {
            index:true,
            element: <Home/>,
          },
          {
            path:"cart",
            element: <Cart/>,
          },
          {
            path:"checkout",
            element:<Checkout/>
          },
          {
            path:"pay-success",
            element:<PaySuccess/>
          }
        ],
      },
      {
        path: "auth",
        element: (
        <ProtectedRequiredUnAuth>
          <AuthLayout />
          </ProtectedRequiredUnAuth>
          ),
        children: [
          {
            index:true,
            element: <SignIn/>,
          },
          {
            path:"signup",
            element: <SignUp/>,
          },
        ],
      },
      {
        path: "dashboard",
        element:(
          <ProtectedRequirdAuth>
          <DashboardLayout />
          </ProtectedRequirdAuth>
          ),
        children: [
          {
            index:true,
            element: <Products/>,
          },
          {
            path:"product-details/:id",
            element: <ProdcutDetails/>,
          },
          {
            path:"create-product",
            element: <AddEditProduct/>,
          },

          //by Id can seperate between : create or edit form 
          {
            path:"edit-product/:id",
            element: <AddEditProduct/>,
          },

          {
            path:"favorites",
            element: <h1>This page is under development</h1>,
          },

          {
            path:"order-list",
            element: <h1>This page is under development</h1>,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundLayout />,
  },
]);

const AppRouter = () => {
  return <NuqsAdapter><RouterProvider router={router} /></NuqsAdapter>;
};

export default AppRouter;
