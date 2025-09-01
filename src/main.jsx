import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//store
import { store } from "./store/store.js";
import { Provider } from "react-redux";
//route
import { RouterProvider } from "react-router-dom";
import { router } from "./route/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
