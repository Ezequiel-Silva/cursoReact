<h1 align="center"> Entendendo o JSX </h1>

<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
<img src="https://img.shields.io/static/v1?label=Linguagem de programação&message=React&color=d3d523&style=for-the-badge&logo=React"/>
</p>

* O JSX é como um HTML, porém dentro do código Javascript;

* É a principal maneira de escrever HTML com o React;

* Podemos interpolar variáveis, inserindo ela entre {};

* É possível também executar funções em JSX;

* Inserir valores em atributos de tags também é valido em JSX:</p>

<hr/>

<p>

* <b>npm start</b>: Inicia (ou reinicia) o servidor do react;

* <b>CTRL + C no terminal</b>: para o servidor do react (que inicializou com npm start);

OBS: antes de executar estes comandos verifique se está dentro da pasta do projeto! (cd pasta)
</p>
<hr/>

<p>
<p>meu-projeto > src > App.js</p>
<b>import './App.css';</b>
<p style="color='#CCC">No canto superior (antes da função) será usado para importar componentes</p>

<b>function App() {</b>
<p>return (</p>
<p style="color='#CCC">Aqui ficará o código</p>
<p>)}</p>
<br/>
<b>export default App;</b>
<p style="color='#CCC">No canto inferior, (depois da função) será usado para exportar o componente</p>
</p>
<hr/>

<p>meu-projeto > src > App.js</p>

>import logo from './logo.svg';
>import './App.css';
>
>function App() {
>  const name = 'Ezequiel';
>  const newName = name.toUpperCase();
>  function sum(a,b){
>    return a+b;
>  }
>  return (
>    <div className="App">
>      <h2>Alterando o JSX</h2>
>      <p>Olá, {name}</p>
>      <p>Olá, {newName}</p>
>      <p>Soma: {2 + 2}</p>
>      <p>Soma: {sum(1,2)}</p>
>    </div>
>  );
>}
>
>export default App;

<hr/>
<p>meu-projeto > src > App.js</p>
<p>Atributo dinâmico</p>

>import logo from './logo.svg';
>import './App.css';
>
>function App() {
>  const url = "http://via.placeholder.com/150";
>  return (
>    <div className="App">
>      <img src={url} alt="Minha Imagem"/>
>    </div>
>  );
>}
>
>export default App;

<hr/>
<p>Os elementos JSX adjacentes devem ser agrupados em uma tag delimitadora. Ex: <>...</></p>
<p>Para adicionar CSS no JSX não é class (palavra reservada do react) e sim clasddName</p>
<hr/>