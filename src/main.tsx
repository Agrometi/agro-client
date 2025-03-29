import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "react-loading-skeleton/dist/skeleton.css";
import AppProvider from "@/Providers/AppProvider.tsx";
import AppUIProvider from "./Providers/AppUIProvider.tsx";
import ThemeProvider from "@/Providers/ThemeProvider.tsx";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <BrowserRouter>
      <ThemeProvider>
        <AppProvider>
          <AppUIProvider>
            <App />
          </AppUIProvider>
        </AppProvider>
      </ThemeProvider>
    </BrowserRouter>
  </HelmetProvider>
);
