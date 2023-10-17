import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import StarRating from "./components/StartRating.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={10} color="#fcc419" size={48} /> */}
  </React.StrictMode>
);
