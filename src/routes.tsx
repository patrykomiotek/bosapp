import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RegistrationPage } from "./features/registration/components/RegistrationPage";
import { Layout } from "@/components/Layout/Layout";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ProductsListPage } from "./features/products/pages/ProductsListPage";
import { ProductsDetailsPage } from "./features/products/pages/ProductsDetailsPage";
import { CreateProductPage } from "./features/products/pages/CreateProductPage";

// dev: createBrowserRouter
// prod: createMemoryRouter

const routerFunction =
  process.env.NODE_ENV === "development"
    ? createBrowserRouter
    : createMemoryRouter;

export const ROUTE: Record<string, { path: string; title: string }> = {
  HOME: {
    path: "/",
    title: "Home",
  },
  PRODUCTS: {
    path: "/products",
    title: "Products",
  },
};

// export const routes = createBrowserRouter([
export const routes = routerFunction([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTE.HOME.path,
        element: <HomePage />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/products/:id", // :productId -> useParams
        element: <ProductsDetailsPage />,
      },
      {
        path: "/products/create",
        element: <CreateProductPage />,
      },
      {
        path: "/products",
        element: <ProductsListPage />,
      },
    ],
  },

  // {
  //   path: '/products',
  //   element: <ProductsListPage />
  // }
  // {
  //   path: '/products/create',
  //   element: <CreateProductPage />
  // }
]);
