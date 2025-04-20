import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./app/routes/LandingPage";
import UnderConstructionPage from "./app/routes/UnderConstruction";
import SigninPage from "./app/routes/SigninPage";
import SignupPage from "./app/routes/SignupPage";
import { AppProvider } from "./stores/UserContext.tsx";
import HomePage from "./app/routes/HomePage.tsx";
import Campaign from "./app/routes/Campaign.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/under-construction",
    element: <UnderConstructionPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/signin",
    element: <SigninPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/campaign",
    element: <Campaign />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);
