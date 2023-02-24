<h1 align="center"> Componentes React </h1>

<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
<img src="https://img.shields.io/static/v1?label=Linguagem de programação&message=React&color=d3d523&style=for-the-badge&logo=React"/>
</p>

<p>

* Permite dividir a aplicação em partes;

* Os componentes renderizam JSX, assim como App.js (que é um componente);

* Precisamos criar um arquivo de componente;

* E importá-lo onde precisamos utilizar;

* Normalmente ficam em uma pasta chamada components;</p>

<hr/>

<p>Na pasta src crie a pasta components, e nela estará contida todos os arquivos de componentes (HelloWorld.js)</p>
<p>O nome HelloWorld é uma convenção (PascalCase) muito utilizado </p>

<hr/>

<p>Função do componente é o mesmo nome do arquivo</p>
<p>NO caso o componente se chama HelloWorld.js logo...</p>

> function HelloWorld(){}

<p>No final use <b>export default HelloWorld;</b> para dar a possibilidade de ser usado este componente</p>
<hr/>

<p>O retorno desta função seria um JSX</p>

>function HelloWorld(){
>    return (
>        <div>
>            <h1>Meu primeiro componente</h1>
>        </div>
>    );
>}
>export default HelloWorld;

<hr/>
<p>Com o componente criado, temos que importa-lo</p>
<p>No arquivo App.js é feito o import</p>

* definimos o nome e a origem do componente

> import HelloWorld from './components/HelloWorld';

* depois para renderizar na tela, usamos como uma tag em HTML:

> <HelloWorld/>
<hr/>
<p>Componente pode ser reutilizado!</p>
<p>Podemos criar um componente dentro de outro componente</p>

>import Frase from "./Frase";
>
>function HelloWorld(){
>    return (
>        <div>
>            <h1>Meu primeiro componente</h1>
>            <Frase/>
>        </div>
>    );
>}
>export default HelloWorld;

<p>Foi criado um componente Frase que foi utilizado pelo componente HelloWorld, que por sua vez foi renderizado pelo App.js </p>
<hr/>
