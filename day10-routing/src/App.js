import "./App.css";
import { HomePage } from "./Components/HomePage";
import { Navbar } from "./Components/Navbar";
import { NotFoundPage } from "./Components/NotFoundPage";
import { ProductsDetailsPage } from "./Components/ProductsDetailsPage";
import { ProductsPage } from "./Components/ProductsPage";
import { Routes } from "./Components/Routes";

function App() {
  return (
    <div className="App">
      <Routes />
      {/* <HomePage />
      <Navbar />
      <NotFoundPage />
      <ProductsDetailsPage />
      <ProductsPage /> */}
    </div>
  );
}

export default App;
