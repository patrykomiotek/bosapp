import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import { routes } from "./routes";

const client = new QueryClient();

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={client}>
        <RouterProvider router={routes} />
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
