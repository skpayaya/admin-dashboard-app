import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ContextProvider } from "./contexts/ContextProvider";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <ContextProvider>
        <App tab="home" />
    </ContextProvider>
);
