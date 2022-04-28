import { Navbar } from "./Navbar";
import { HomePage } from "./HomePage";
import { NotFoundPage } from "./NotFoundPage";
import { ProductsDetailsPage } from "./ProductsDetailsPage";
import { ProductsPage } from "./ProductsPage";
import { Routes as R, Route } from "react-router-dom";


export const Routes = () => {
  return (
    <>
      <Navbar />
      <R>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductsDetailsPage />} />
        <Route path="/NotFound" element={<NotFoundPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </R>

      {/* Add Routes here */}
    </>
  );
};
