import { createRoot } from "react-dom/client";
import "./i18n";
import "@style/index.css";

import { ReactQueryDevtools, Router, Toaster } from "@config";
import { QueryClientProvider } from "@store";

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider>
    <ReactQueryDevtools />
    <Toaster />
    <Router />
  </QueryClientProvider>,
);
