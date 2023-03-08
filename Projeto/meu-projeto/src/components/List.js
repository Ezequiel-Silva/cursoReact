import Item from "./Item";
function List(){
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="ferrari" ano_lancamento={1985}/>
                <Item marca="fiat" ano_lancamento={1985}/>
                <Item marca="renault"/>
            </ul>
        </>
    )
}
export default List;