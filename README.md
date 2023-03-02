<h1 align="center"> Adicionando CSS </h1>

<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
<img src="https://img.shields.io/static/v1?label=Linguagem de programação&message=React&color=d3d523&style=for-the-badge&logo=React"/>
</p>

<p>

* O CSS pode ser adicionado de forma global na aplicação, por meio do arquivo index.css por exemplo;
* Porém é possível estilizar a nível de componentes;
* Utilizamos o CSS modules para isso;
* Basta criar um arquivo como: Componente.module.css;
* E chamar este CSS no componente;

</p>

<hr/>

<p>

* O index.css seria o CSS global que afeta todos os componentes que estejam enquadrados nas regras de estilo
* Para separar as palavras use camelCase ou underline
> fraseContainer{}
> frase_Container{} 
* OBS: traco (-) não funciona!, pois no react na hora de utiliza-lo ele trata como uma subtração e da erro
</p>
<hr/>
<p>
Para utilizar o CSS em um componente

* Crie o arquivo CSS (Frase.module.css)
* No arquivo do componente (Frase.js) import o CSS
> import styles from './Frase.module.css';
* E ao utiliza-lo, colocar como se fosse um objeto:
>function Frase(){
>    return(
>        <div className={styles.fraseContainer}>
>            <p className={styles.fraseContent}>Este é um componente com uma frase!</p>
>        </div>
>    )
>}
>export default Frase; 
</p>
<hr/>