import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BarraNavegacion from './components/navBar/navBar';
import Header from './components/header/header';
import Greeting from './components/itemListContainer/itemListContainer';
import Footer from './components/footer/footer';

export default function App() {
  return (
    <>
      <BarraNavegacion />
      <Header />
      <Greeting mensaje="Hola, aquí se verán todos los productos de la tienda" />
      <Footer />
    </>
  );
};
