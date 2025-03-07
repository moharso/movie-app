import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRouterProvider } from "./pages/index.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { FiltersProvider } from "./context/FiltersContext.tsx";
import { FavoritesProvider } from "./context/FavoritesContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <FiltersProvider>
          <FavoritesProvider>
            <AppRouterProvider />
          </FavoritesProvider>
        </FiltersProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
