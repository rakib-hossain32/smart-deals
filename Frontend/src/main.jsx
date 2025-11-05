import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import ProviderContext from "./context/ProviderContext.jsx";
import { RouterProvider } from "react-router";
import { router } from "./routes/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProviderContext>
      {" "}
      <RouterProvider router={router} />
    </ProviderContext>
  </StrictMode>
);
