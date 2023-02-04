import Item from './item';

function ItemList ({productos, categoryItem}) {
   return (
        <>
            {productos.map((p, index) => ( <Item key={'producto_'+index} item={p} url={categoryItem} /> ))}
        </>
    );
};

export default ItemList;