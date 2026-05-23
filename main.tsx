import { createRoot } from "react-dom/client";

// Named export
export const config = {};

export let fullName = "";

export function addNumber() {}

// Root render
createRoot(document.getElementById("root")!).render(
  <h1>Hello World</h1>
);