import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "../pages/Homepage";
import Product from "../pages/Product";
import Pricing from "../pages/Pricing";
import PageNotFound from "../pages/PageNotFound";
import AppLayout from "../pages/AppLayout";
import Login from "../pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/app" element={<AppLayout />}>
            <Route path="cities" element={<p>List of Cities</p>} />
            <Route path="countries" element={<p>List of Countries</p>} />
            <Route path="form" element={<p>Form</p>} />
            <Route index element={<p>List</p>} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
