import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import FoxyProvider from "./components/foxy-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FoxyProvider>
      <App />
    </FoxyProvider>
  </StrictMode>,
);
