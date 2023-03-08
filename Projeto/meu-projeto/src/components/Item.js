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
    ano_lancamento: PropType.number,
}
export default Item;