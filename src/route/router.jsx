import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SingleProduct from "../components/SingleProduct";
import EditProduct from "../components/EditProduct";
import AddProduct from "../components/AddProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products/:productId",
    element: <SingleProduct />,
  },
  {
    path: "/edit/:productId",
    element: <EditProduct />,
  },
  {
    path: "/addItem",
    element: <AddProduct />,
  },
]);
