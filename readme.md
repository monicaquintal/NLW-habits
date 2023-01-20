<h1 align="center">Habits 📅</h1>

<p align="center">
Desenvolvimento de Tracker Habits - NLW (evento promovido pela Rocketseat). <br/>
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a> | <a href="#-projeto">Projeto</a> | 
  <a href="#-layout">Layout</a> | <a href="#-aulas">Aulas</a>
</p>

<br>

<p align="center">
  <img alt="projeto Habits" src="./assets/capa.jpg" style="border-radius: 40px" width="80%">
</p>

## 🚀 Tecnologias

- HTML e CSS
- JavaScript
- Git e Github
- Figma

## 💻 Projeto

O Habits é um app para ajudar a rastrear os hábitos!

## 🔖 Layout

[Link para o Figma do Projeto!](https://www.figma.com/community/file/1195327109778210238)

## 📚 Aulas

### Aula 01: Primeiros passos
Preparação do setup, conhecendo o projeto e entendendo fundamentos para dar os primeiros passos em HTML e CSS.

1. Introdução à Programação Web

**O que é programar?**

- Codar, Desenvolver, Programar: resolver problemas do mundo real através das linhas de código!
- Falar com o computador: aprender linguagens para dar ordens ao computador

**Mercado:**

- Vagas: [mais de 790 mil até 2025 - Brasscom](https://brasscom.org.br/estudo-da-brasscom-aponta-demanda-de-797-mil-profissionais-de-tecnologia-ate-2025/)!
- Global (trabalhar em qualquer lugar do mundo.
- Tempo de Experiência: cerca de 2 anos.

**Áreas de atuação:**

Podemos aprender programação em diversas áreas de atuação, como WEB, Mobile, Dados, Inteligência artificial (A.I), Negócios, Analista, Internet das coisas (IoT) e outras!

**Programação WEB:**

- Front-end: parte visual das coisas, a interação com o usuário.
- Back-end: parte lógica das coisas, as regras de negócio.
- Fullstack: Front e Back juntos!

**Habilidades:**

- Hard skills: habilidades técnicas e conceitos da área.
- Soft skills: habilidades comportamentais (comunicação, resolução de problemas, gerenciamento de tempo e tarefas, trabalho em equipe e etc).

**Internet:**

- Rede mundial de computadores.
- O computadores estão conectados entre si.
- Transferência de dados.

**Programas e Arquivos:**

- Programa e aplicativos (apps)
    - Navegadores
    - Mensagens
    - Redes sociais
- Arquivos
    - Foto, vídeo, textos, etc.
    - São interpretados por programas ou apps

**Cliente x Servidor:**

- Cliente: navegador (Browser).
- Servidor: computador em algum lugar do mundo que tem os códigos.
- Troca de dados (arquivos):
  - Cliente faz o pedido e Servidor escuta e responde ao pedido
  - Cliente é o front-end, servidor é o back-end!

**Tecnologias Front-end:**

- HTML: linguagem de marcação de texto para estrutura os textos, criar links, imagens, etc.
- CSS: linguagem de estilo.
- JavaScript: linguagem de programação que funciona no Navegador.

**Tecnologias Back-end:**

- NodeJS: rodar o JavaScript no computador.
- SQL: banco de dados para proteger os dados do seu programa.

2. O Projeto:

<a href="https://www.figma.com/community/file/1195327109778210238" target="_blank">Link para o Figma!</a>

3. Instalação dos programas no computador:
VSCode, Git Bash, Node e NPM, e  utilização de Github e Figma!

---

### Aula 02: Descomplicando o código
Trabalhando com HTML e CSS: contexto de box-model, criando header, utilizando form e inputs, aplicando classes no CSS, importando fontes.

1. HTML:

**O que é HTML?**

- Estruturar textos, criar links, imagens, vídeo, etc.
- Hypertext Markup Language (Linguagem de marcação de texto).
  - Hypertext: Hipertexto, texto que contém links.
  - Markup: marcação do texto, elemento HTML ou **tag** (há inúmeras tags e cada uma deles irá servir para um determinado propósito).

**Sintaxe de uma tag:**

~~~html
<p>conteúdo</p>
<!-- Aqui vem um comentário -->
~~~

**Atributos:**

Adicionam informações e/ou configurações à uma tag.

~~~html
<a href="https://rocketseat.com.br">Ver site</a>
<img src="image.jpg" />
~~~

2. CSS:

**O que é CSS?**

- Estilos para o HTML
- Cascading Style Sheets (Folha de Estilo em Cascata).
- Apresentação visual para o cliente

**Declaração:**

Trecho de código que irá ditar as propriedades e valores a serem aplicadas a um elemento HTML!
    
~~~css
body {
  background: black;
	/* color: green; Essa linha será ignorada */
}
~~~

**Cascata**

Quando há 2 (ou mais) declarações a última será mais relevante!
    
~~~css
body {
  background: red;
}

body {
  background: blue;
}
~~~

**Especificidade:**

Cada seletor tem um peso, e a soma dos pesos será levada em conta para que determinada declaração seja mais específica.
    
~~~css
#id {
  /* peso 100 */
}

.class {
  /* peso 10 */
}

element {
  /* peso 1 */
}
~~~

> A cascata perde prioridade e é priorizada a especificidade da declaração!

**Box Model:** Tudo são caixas!

Todos os elementos HTML serão considerados uma caixa, assim como uma caixa de papelão!
As Caixas possuem determinadas propriedades: Conteúdo, Largura, Altura, Borda, Preenchimento (espaço interno), Espaçamento (espaço externo)!
    
![http://espezua.github.io/blog/imgs/boxmodel.png](http://espezua.github.io/blog/imgs/boxmodel.png)

---

### Aula 03: O poder do JavaScript
Apresentação dos conceitos de Algoritmo e Lógica de Programação, conhecendo JS.

1. Algoritmos e Lógica de programação

**O que é programar?**

Nada mais é do que ensinar o computador!
- Algoritmos: Sequência de passos, conjunto de regras.
- Lógica de programação: Maneira de pensar.
- Sintaxe: Maneira correta de escrever!
    
2. JavaScript - A linguagem da WEB

**O que é?**

- Linguagem de programação, interpretada e executada pelos navegadores.
- A inteligência da tríade: HTML é a estrutura, CSS é beleza e JS é a inteligência!
- Não é JAVA - apesar do nome ser semelhante, são linguagens diferentes.
    
**Por que JS?**

- Aplicativos: para WEB, Desktop (Electron) e Mobile (React Native).
- Empresas: Instagram, Google, Netflix, TikTok.
- Moderna e Viva: comunidade e linguagem que crescem cada vez mais.

**Instruções e sintaxe:**

Toda linguagem é escrita com esses 2 princípios
- Instruções (declarações): Ordens ao computador  
- Sintaxe: Maneira correta de escrever
  
~~~javascript
const mensagem = "Bom te ver aqui! "
alert(mensagem + (10 * 100) + " abraços")
// Bom te ver aqui! 1000 abraços
~~~

Existem `palavras reservadas` da linguagem. 
Elas são responsáveis em dar significado a diversas instruções.

**Executando JavaScript**

Podemos executar diretamente no Navegador.
- Ferramenta `DevTools`, apertando o atalho `F12` no seu teclado.
- Plataformas online:
    - [fronteditor.dev](https://fronteditor.dev)
    - [codepen.io](https://codepen.io)
- Projeto no computador
    
**Projeto no computador:**

~~~html
<!-- em um arquivo index.html -->
<!-- importamos um arquivo .js no .html -->
<script src="./script.js"></script>
~~~

**Variáveis e Tipos de dados:**

- Variáveis: uma caixinha onde guardamos um tipo de dado para usar mais tarde.
- Tipos de dados: informações que podem ser em `textos`, `números`, `booleanos` (valores lógicos: verdadeiro ou falso) ou dados mais `estruturados`!

~~~javascript
// declaro e atribuo valor
let boasVindas = 'Fala, Dev!';

// reatribuo valor
boasVindas = `Fala, Dev! Tudo beleza?!`;

// constante não pode mudar o valor
const serHumano = true;
serHumano = false // Erro!
~~~

**Funções:**

- Agrupamento de código
- Reuso de código
- Mini programas dentro do programa maior
- Toda linguagem oferece muitas opções

~~~javascript
// usando uma função
alert('Fala, Dev!')

// criando uma função
function alert(text) {
	return text
}
~~~

**Objetos:**

Tudo é objeto!
- Atributos: são as propriedades de um objeto.
- Métodos: são as funcionalidades de um objeto.
    
~~~javascript
// criando um objeto
const celular = {
	cor: 'preto',
	ligar: function() {}
}

// usando um objeto
celular.cor // preto
celular.ligar() // executa função
~~~

**DOM:**

Document Object Model
É a modelagem dos nossos elementos HTML em Objeto JavaScript!

a) Document:
Posso controlar minha página, meu documento HTML, pelo JavaScript, através do objeto document.

~~~javascript
 // objeto que existe em todo navegador
.querySelector('a') // seleciona a tag a
.click() // dá a ordem de clicar na tag a
~~~

***Biblioteca***

[Documentação da Biblioteca utilizada neste projeto.](https://maykbrito.github.io/libs/NLWSetup/documentation/NLWSetup.html)
~~~html
<script src="https://cdn.jsdelivr.net/gh/maykbrito/libs/NLWSetup/source/NLWSetup.js"></script>
~~~

--- 

### Aula 04: Profissionalizando o projeto

1. Método addDay(date)

Adiciona um dia aos dias registrados e renderiza o layout depois disso!

Exemplo:

~~~javascript
nlwSetup.addDay('31/12')
~~~

Name |	Type	| Description
-----|--------|------------
date	| string	| DD/MM (DD e MM com 02 dígitos)

2. Função dayExists(date) → {boolean}

Verifica se o dia já existe no conjunto de dias.

Exemplo:

~~~javascript
nlwSetup.dayExists('31/12') // true or false
~~~

3. new Date().toLocaleDateString('pt-br').slice(0, -5)

a) new Date(): gera a data.

b) .toLocaleDateString('pt-br'): converte para o padrão pt-br.

c) .slice(): define, de trás pra frente, quais caracteres serão recortados (por isso o negativo no 5).

4. localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))

a) localStorage: guarda informações na memória do browser.

b) setItem(): funcionalidade que guarda a informação. Adicionar nome da funcionalidade e valor que queremos guardar.

c) JSON.stringify(nlwSetup.data): função que converte os dados em string para armazenar.

5. JSON.parse(localStorage.getItem('NLWSetup@habits')):

- converte a data novamente para valor, localiza no localStorage se há informações registradas na chave (que está entre parênteses).
- nlwSetup.setData(data) e nlwSetup.load() finalizam essa etapa.

[Documentação da Biblioteca utilizada neste projeto.](https://maykbrito.github.io/libs/NLWSetup/documentation/NLWSetup.html)

--- 

### Aula 05: 