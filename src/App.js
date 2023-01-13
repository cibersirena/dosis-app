import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navBar/navBar";
import Header from "./components/header/header";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer mensaje="Conocé todos nuestros productos" />
          }
        />
        <Route
          path="/productos/:categoryItem"
          element={
            <ItemListContainer mensaje="Estas viendo los productos de la categoría: " />
          }
        />
        <Route
          path="/about"
          element={
            <About mensaje="Página en construcción, disculpá las molestias" />
          }
        />
        <Route
          path="/detail/:productId"
          element={
            <ItemDetailContainer />
          }
        />
        <Route
          path="*"
          element={
            <div className="container px-4 px-lg-5 mt-5">
              <h5 className="fw-lighter mb-5" id="error">Error 404. La página que está buscando no existe</h5>
            </div>
          } 
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
