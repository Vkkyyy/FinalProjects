import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


import Bof from "./bof.js"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    
    <Bof />
  </StrictMode>
);
