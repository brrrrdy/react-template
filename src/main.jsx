import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Greeting from "./components/Greeting.jsx";
import Greeting2 from "./components/Greeting2.jsx";
import TextBox from "./components/TextBox.jsx";
import AnimalsList from "./components/List.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Greeting />
    <Greeting2 />
    <TextBox />
    <AnimalsList />
  </StrictMode>
);
