import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// 17 -> 18 -> 19 (memo, useCallback, useMemo, forwardRef) + React Compiler
const rootElement = document.getElementById("root") as HTMLElement; // fetch
// const rootElement = document.getElementById('root')!;

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
