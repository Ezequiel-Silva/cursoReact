<h1 align="center"> Avançando em props </h1>

<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
<img src="https://img.shields.io/static/v1?label=Linguagem de programação&message=React&color=d3d523&style=for-the-badge&logo=React"/>
</p>

<p>

* Podemos definir tipos para as props, realizando uma espécie de validação;
* Definimos em um objeto chamado propTypes no próprio componente;
* E ainda há possibilidade de definir um valor padrão;
* Neste caso utilizamos o objeto defaultProps;

</p>

<hr/>

<p>
Quando for passada string para props usasse aspas "", e número { }

>import Item from "./Item";
>function List(){
>    return (
>        <>
>            <h1>Minha Lista</h1>
>            <ul>
>                <Item marca="ferrari" ano_lancamento={1985}/>
>                <Item marca="fiat" ano_lancamento={1985}/>
>                <Item marca="renault"/>
>            </ul>
>        </>
>    )
>}
>export default List;
</p>
<hr/>
<p>
Importa o PropType e define o tipo da prop marca para string:

>import PropType from 'prop-types';
>function Item({marca,ano_lancamento}){
>    return(
>        <>
>            <li>{marca} - {ano_lancamento}</li>
>        </>
>    );
>}
>Item.propType = {
>    marca: PropType.string,
>}
>export default Item;
</p>
