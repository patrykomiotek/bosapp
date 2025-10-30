import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import { routes } from "./routes";
import { AuthProvider } from "./features/auth/components/AuthContext";

const client = new QueryClient();

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={client}>
        <AuthProvider>
          <RouterProvider router={routes} />
          <ToastContainer />
        </AuthProvider>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
