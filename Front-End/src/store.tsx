import {
  QueryClient,
  QueryClientProvider as Provider,
} from "@tanstack/react-query";
import type { JSX, ReactNode } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
    },
  },
});

const QueryClientProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return <Provider client={queryClient}>{children}</Provider>;
};

export default QueryClientProvider;
