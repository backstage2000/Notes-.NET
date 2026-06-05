import { createRoot } from "react-dom/client";
import "./i18n";
import "@style/index.css";

import QueryClientProvider from "@store";
import { ReactQueryDevtools, Router, Toaster } from "@config";

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider>
    <ReactQueryDevtools />
    <Toaster />
    <Router />
  </QueryClientProvider>,
);
