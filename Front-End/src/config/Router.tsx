import { App, HomePage, NotePage } from "@pages";
import type { JSX } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="note" element={<NotePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
