import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./assets/scss/utils/index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/main.scss";
import ReactDOM from "react-dom/client";

//Import swiper styles
import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/effect-fade";
import reportWebVitals from "./reportWebVitals.jsx";
import { BrowserRouter } from "react-router";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
reportWebVitals();
