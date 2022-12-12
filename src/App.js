import './App.css';

// crea el header de la pagina. props es un objeto
function Header(props) {
  // desestructuaracion del objeto props y le asigno alias a las propiedades. La desestructuracion se puede pasar directamente como parametro de la funcion (solo lo que está entre {})
  // const {numberOfProducts : numero, prop2, prop3 = 'DEFAULT'} = props;
  // consolea el objeto props (que contiene el header declarado en la funcion app) y la propiedad numberOfProductos
  //console.log(props, numero, prop2, prop3)

  // spread del objeto, funciona como un atajo para crear un nuevo objeto con las propiedades de props. es otra forma de desestructurar 
  const newProps = {...props}

  return (
    //<header> This is my header number of products {numero} {prop2} {prop3}</header>
    <header> This is my header number of products {newProps.numberOfProducts}</header>
  );
}

// la funcion product crea un div con el id, nombre y precio del producto. recibe como parametro el objeto product desestructado
function Product({ product }) {
  return (
    <div key={product.id}>
      {product.name}
      {product.price}
    </div>
  );
}

// crea un array de objetos product y crea la etiqueta main.
function Store() {
  const products = [
    {
      id: 1,
      name: "Mani",
      price: "$1US"
    }
  ];
  // con el metodo map crea el componente product por cada objeto del array products
  return (
    <main>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </main>
  );
}

// componente APP header y store son otros componentes, numberOfProduct es la propiedad que queremos pasarle a header
// busca la funcion Header (tiene el objeto props declarado en la funcion) y Store
export default function App() {
  const numberOfProducts = 0;
  return (
    <div className="App">
      <Header numberOfProducts={numberOfProducts} prop2 = 'foo'></Header> 
      <h1>Hello CodeSandbox {numberOfProducts}</h1>
      <Store />
    </div>
  );
}