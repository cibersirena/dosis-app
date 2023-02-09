# Dosis Sublimación Web APP 💻
Primer proyecto con React.
Proyecto desarrollado como parte del curso de React Js en Coderhouse.
e-commerce del emprendimiento Dosis Sublimación
Link a la página del proyecto: [https://dosis-sublimacion-app.vercel.app/](https://dosis-sublimacion-app.vercel.app/)

---
## Para hacer funcionar este proyecto, se instalaron estas dependencias. Tenés que instalarlas para que el proyecto funcione 🚀

* npm modules: 9.2.0
* bootstrap: 5.2.3
* firebase: 9.16.0
* react-bootstrap: 2.7.0
* react-dom: 18.2.0
* react-router-dom: 6.6.1
* react-toastify: 9.1.1

---
## Recorrido inicial del proyecto 📝
En la Home, o Página de inicio, vas a poder visualizar los productos que están a la venta, aquellos que no tengan stock se identifican con un badge.

Desde la barra de navegación vas a poder acceder a la sección *"Quiénes somos"* (about) -en construcción-, botón de *"Registro"* -no desarrollado en este proyecto- y la pestaña *"Productos"*, que contiene todos los productos a la venta. En la barra de navegación también, está disponible el acceso al carrito de compras haciendo click en el icono, donde, además se indica el número de productos que contiene.

Desde la pestaña *"Productos"* podés filtrar los productos por categoría.

Para acceder al detalle de cada producto basta con hacer click en el botón *"Ver detalle"* debajo de cada uno.

![Image](https://cibersirenadesign.000webhostapp.com/images/preview-dosis/Dosis-home.png)
![Image](https://cibersirenadesign.000webhostapp.com/images/preview-dosis/Dosis-home-filtro.png)

### Detalle del producto
Aquí vas a encontrar: 
* Imagen del producto
* Nombre del producto
* Descripción
* Precio
* Contador que permite seleccionar la cantidad de unidades del producto (si es menor a 0 o supera el stock del producto emite una alerta al usuario). 
* Botón *"Agregar al carrito"* (si las unidades es 0 emite una alerta al usuario. Al hacer click, este cambia a "Finalizar compra" que te dirige al carrito de compras)
* Botón *"Seguir comprando"* (te dirige al inicio)

En caso que el producto se encuentre sin stock, el contador se inhabilita y el botón *"Agregar al carrito"* no se muestra.

![Image](https://cibersirenadesign.000webhostapp.com/images/preview-dosis/Dosis-detalle.png)
![Image](https://cibersirenadesign.000webhostapp.com/images/preview-dosis/Dosis-detalle-2.png)

### Carrito de compras
En el Carrito de Compras podés visualizar el listado de productos agregados. El detalle consta de: imagen, nombre del producto, unidades, precio por unidad y precio total (multiplicando unidades del producto seleccionado, por el precio unitario).
Los productos se pueden eliminar del carrito haciendo click en el icono *"tacho de basura"* o borrar la totalidad del carrito desde el botón *"Vaciar carrito"*. En ambos casos, el total que se muestra en el carrito se actualizará automáticamente.

También se muestra el total de la compra (suma de los totales de cada producto) y un botón *"Seguir comprando"* que te dirige al inicio donde están todos los productos.

Además consta de un formulario necesario para poder finalizar la compra. Los datos solicitados son Nombre completo, email y teléfono (10 números, sin espacios) todos obligatorios
Botón *"Finalizar compra"* genera la orden de compra y te dirige al cheackout. Ademas de vaciar el carrito y actualizar las unidades que se muestran en el icono de la barra de navegación.

![Image](https://cibersirenadesign.000webhostapp.com/images/preview-dosis/Dosis-carrito.png)

### Cheackout
Aquí se te agradece la compra y muestra el detalle de la misma:
* Número de orden
* Fecha
* Datos del comprador
* Productos comprados
* Total pagado

Además del botón *"Volver"* que te regresa al inicio del sitio.

![Image](https://cibersirenadesign.000webhostapp.com/images/preview-dosis/Dosis-cheackout.png)

---
## Firebase 📁
Para la estructura backend de este proyecto se utilizó Firebase.
Se crearon tres Colecciones:
* Productos: contiene los datos de los productos que se muestran en la página (tipo, precio, imagen, descripción, stock, item)
* Categorias: contiene las categorías utilizadas para armar el menú de filtros
* Ventas: contiene todas las órdenes generadas por los usuarios al finalizar compra.

---
## React-Router ✒️
Para poder crear las rutas de la página web, se usó *React-router-dom*.

---
## Context 🔄
Este proyecto contiene un gran Contexto: *cartProvider*, el cual contiene las funcionalidades de la sección del Carrito de Compras.

---
## Sobre mí 🙋
Mi nombre es Gabriela Monteforte pero muchos me conocen como Cibersirena. Vivo en Buenos Aires. Soy diseñadora gráfica y desarrolladora web. A mediados del 2022 empecé a incursionar en la programación front end, realicé el curso de JS y React.JS en Coder House. 
