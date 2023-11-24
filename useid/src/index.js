import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./index.css";

const root1 = createRoot(document.getElementById("root1"), {
  identifierPrefix: "my-first-app-",
});
root1.render(<App />);

const root2 = createRoot(document.getElementById("root2"), {
  identifierPrefix: "my-second-app-",
});
root2.render(<App />);
