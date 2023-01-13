import MenuItem from './menuItem';

function MenuDesplegable({items}) {
    return (
        <>
            {items.map((p, index) => (
                <MenuItem key={"item_"+index} producto={p} />
            ))}
        </>
    )
};

export default MenuDesplegable;