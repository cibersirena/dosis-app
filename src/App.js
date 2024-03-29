import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navBar/navBar";
import Header from "./components/header/header";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import Cart from "./components/cart/cart";
import CartCheackout from "./components/cart/cartCheackout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./components/context/cartProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Slide } from 'react-toastify';

export default function App() {
  return (
    <CartProvider>
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
            path="/cart"
            element={
              <Cart mensaje="Productos en tu carrito de compras"/>
            }
          />
          <Route
            path="/cheackout"
            element={
              <CartCheackout mensaje="Gracias por tu compra" />
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
      <ToastContainer autoClose={2000} position="top-right" transition={Slide} />
    </CartProvider>
  );
};