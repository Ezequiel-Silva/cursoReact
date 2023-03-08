import PropType from 'prop-types';
function Item({marca,ano_lancamento}){
    return(
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    );
}
Item.propType = {
    marca: PropType.string.isRequired,
}
export default Item;