import Item from "./Item";
function List(){
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="ferrari"/>
                <Item marca="fiat"/>
                <Item marca="renault"/>
            </ul>
        </>
    )
}
export default List;