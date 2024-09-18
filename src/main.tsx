import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Acasa from "./pages/Acasa.tsx";
import Contact from "./pages/Contact.tsx";
import DespreMine from "./pages/DespreMine.tsx";
import Tarife from "./pages/Tarife.tsx";
// import Terapii from "./pages/Terapii.tsx";
import TerapieTemplate from "./pages/TerapieTemplate.tsx";
import Error from "./pages/Error.tsx";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Acasa />} />
      <Route path="/despreMine" element={<DespreMine />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/tarife" element={<Tarife />} />
      {/* <Route path="/terapii" element={<Terapii />} /> */}
      <Route path="/terapii/:id" element={<TerapieTemplate />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
