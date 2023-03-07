<h1 align="center"> Utilizando React Fragments </h1>

<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
<img src="https://img.shields.io/static/v1?label=Linguagem de programação&message=React&color=d3d523&style=for-the-badge&logo=React"/>
</p>

<p>

* Os reacts fragments permite a criação de um componente sem elemento pai;
* O propósito é descomplicar os nós do DOM
* A sintaxe é <> e </>, não há um nome para a tag;
* Criamos no próprio JSX;

</p>

<hr/>

<p>
No caso utiliza-se de um elemento vazio (fragment) como pai para entregar um unico JSX

>function List(){
>    return (
>        <>
>            <h1>Minha Lista</h1>
>            <ul>
>                <li>Item 1</li>
>                <li>Item 2</li>
>            </ul>
>        </>
>    )
>}
> export default List;

</p>
<hr/>