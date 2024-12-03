import { RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import { appRouter } from "./components/appRouter";

const App = () => {
  return (
    <>
      <Navbar />
      <RouterProvider router={appRouter} />
    </>
  );
};

export default App;
