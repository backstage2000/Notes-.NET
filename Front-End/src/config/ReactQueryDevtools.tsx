import { ReactQueryDevtools as Devtools } from "@tanstack/react-query-devtools";
import type { JSX } from "react";

const ReactQueryDevtools = (): JSX.Element => (
  <Devtools initialIsOpen={false} />
);

export default ReactQueryDevtools;
