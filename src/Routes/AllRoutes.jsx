import { Route, Routes } from "react-router-dom";
import About from "./About";
import AllProducts from "./AllProducts";
import Home from "./Home";
import ProductDetails from "./ProductDetail";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route to="/" element={<Home />} />
        <Route to="/allproducts" element={<AllProducts />} />
        <Route to="/allproducts/:user_id" element={<ProductDetails />} />
        <Route to="/about" element={<About />} />
      </Routes>
      <AllProducts />
      <ProductDetails />
    </div>
  );
}
