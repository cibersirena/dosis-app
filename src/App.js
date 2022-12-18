import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BarraNavegacion from './components/navBar/navBar'; 
import Header from './components/header/header';
import Greeting from './components/itemListContainer/itemListContainer';

export default function App() {
  return (
    <>
      <BarraNavegacion/>
      <Header/>
      <Greeting/>
    </>
  );
};
