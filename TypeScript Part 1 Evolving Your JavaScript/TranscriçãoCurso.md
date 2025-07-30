# Curso Alura TypeScript Part 1: Evolving Your JavaScript

## Aula 1 - Porque usar TypeCript

### Aula 1 - Apresentação - Vídeo 1

Transcrição  
[00:00] Olá pessoal! Boas-vindas ao curso de TypeScript parte 1: Evoluindo seu JavaScript da Alura. Eu sou Flávio Almeida e tenho uma aplicação de negociações em bolsa de valores. É uma aplicação web que permite que cadastremos uma data, uma quantidade, um valor de uma negociação e que possamos exibir no futuro em uma lista e que o usuário possa verificar o que foi cadastrado.

[00:19] Olhando essa aplicação a primeira coisa que passa na nossa cabeça é que é uma aplicação web, ela foi escrita em HTML, CSS e Java Script. Bom, é quase verdade, vem comigo. Se olhamos o código fonte da nossa aplicação, vemos que claramente não foi escrito essa aplicação em Java Script, essa aplicação foi escrita na linguagem TypeScript, uma linguagem criada pela Microsoft que é um Superset do ECMAScript.

[00:47] Um Superset significa que tudo, total conhecimento que você tenha de Java Script é utilizado pela linguagem TypeScript, porém a linguagem TypeScript adiciona tipagem estática e outros recursos da linguagem para tornar o nosso código menos sujeito a defeitos, menos sujeito a bugs e tornar a experiência do desenvolvedor uma experiência mais primorosa.

[01:14] Neste treinamento que vamos ver são os fundamentos da linguagem em TypeScript, vamos começar do básico e vai avançando, vamos comparar um código escrito em JavaScript comparado com o código escrito em TypeScript para entender as vantagens que O TypeScript nos traz em uma aplicação real que se evoluída através de módulos.

[01:38] Temos este primeiro de fundamento, temos o segundo módulo, vai ter o terceiro módulo e vamos evoluindo gradativamente, criando novos problemas, trabalhando com novas complexidades para que você domine ainda mais, sinta-se seguro, melhor dizendo, na linguagem de TypeScript e verificar se você pode trazê-lo ou não para dentro dos seus projetos pessoais.

[02:01] Uma coisa importante destacar é que frameworks do mercado, como angular, utilizam o TypeScript como padrão, como linguagem padrão do desenvolvimento. Inclusive, você pode integrar o TypeScript com o React, até mesmo o Vue Js.

[02:16] O TypeScript está no coletivo imaginário dos desenvolvedores e este curso visa desmistificar essa linguagem mostrando os benefícios de maneira gradativa. Vamos para o próximo vídeo onde vou falar sobre os requisitos de infraestrutura para que possamos concluir este curso sem problema nenhum. Vejo vocês no próximo vídeo.

### Aula 1 - Infraestrutura do projeto - Vídeo 2

Transcrição
[00:00] Pessoal, vamos falar um pouco sobre infraestrutura. Qual é a infraestrutura mínima que você precisa ter para conseguir realizar esse curso sem problema nenhum? A primeira coisa, Visual Studio Code. Se você usa o Windows tem versão para Windows, se você usa Linux tem versão para Linux e se usa Mac tem versão para Mac.

[00:18] Por que vou usar o Visual Studio Code? Uma coisa importante para você lembrar é que o TypeScript foi criado pela Microsoft, Visual Studio Code foi criado pela Microsoft. Você já espera logo de cara uma integração perfeita entre Visual Studio Code e o TypeScript, a linguagem TypeScript e o compilador do TypeScript que vamos ver mais à frente do treinamento. É esse que eu sugiro, é esse que você provavelmente vai ganhar o suporte no Fórum.

[00:48] Segundo, você precisa ter o Node.js instalado na sua máquina. Na minha máquina eu uso o Node.js versão 10210, eu só atualizo a versão do Node quando é necessário, se tem alguma feature que me interessa. O Node tem a versão 12 e a versão 14. A homologada para este curso é a versão 10, mas não há problema nenhum para você com a versão 12 e se você for para versão 14 é só testar e ver se está tudo ok.

[01:20] Isso aqui é bem importante porque sem o Node.js o compilador do TypeScript que vamos precisar utilizar não funciona, o servidor web que vou disponibilizar no projeto inicial deste curso não vai funcionar, essa aqui é condição sine qua non para que possamos continuar o treinamento, a instalação no Node.

[01:43] E outra coisa é o Chrome. Eu vou utilizar o Chrome, sinta-se à vontade para usar outro navegador, mas se você utilizar o Chrome você terá uma paridade visual comigo. Se você usa o Visual Studio Code, se você usa o Chrome, se você está usando a mesma versão no Node que a minha vamos ter uma paridade em tudo, as chances de acontecer algum problema com a infraestrutura são muito reduzidas.

[02:08] É isso que precisamos, não precisamos de mais nada. Precisamos de um navegador Chrome, Node.js e o Visual Studio Code. No próximo vídeo vamos fazer o download do projeto inicial do curso e vou mostrar para vocês como esse projeto inicial é organizado e porquê temos um projeto inicial.

### Aula 1 - Preparando o ambiente

Você pode ir acompanhando o passo a passo do desenvolvimento do nosso projeto e, caso deseje, você pode [baixar o projeto](https://github.com/alura-cursos/typescript-curso-1/archive/refs/heads/arquivos-iniciais.zip) do curso ou [acessar os arquivos do GitHub.](https://github.com/alura-cursos/typescript-curso-1/tree/arquivos-iniciais)

Bons estudos!

### Aula 1 - Visão geral do projeto - Vídeo 3

Transcrição  
[00:00] Vamos começar os trabalhos. Eu tenho o projeto baixado descompactado na pasta "typescript-curso1", eu vou abrir o Visual Studio Code que é o editor de texto que eu recomendo a vocês utilizarem porque tem uma integração perfeita com o TypeScript.

[00:16] Eu vou clicar em "Open", se você usa o Windows vai ter a opção "Open Folder", clicando aqui eu vou na pasta do curso e clico "Open". Antes de eu falar sobre a pasta, sobre a estrutura dos arquivos, a primeira coisa que você vai fazer é o seguinte: você vai no seu Visual Studio Code, vai abrir o "Terminal", esse terminal é aberto dentro da pasta do projeto da raiz e precisamos baixar os módulos da nossa aplicação.

[00:48] "Flávio, eu não escrevi código nenhum. Que aplicação é essa?" É que esse projeto traz com ele um servidor http para que possamos compartilhar nossos projetos feitos em JavaScript, em TypeScript com o navegador. É utilizado o sistema de modos vigentes dos navegadores que é do sistema de modos ECMAScript 6.

[01:10] Não tem nada de TypeScript aqui só vamos passar aqui pela questão de infraestrutura. Você vai está dentro da pasta e vai escrever o comando: npm install tendo a certeza que você tem o Node.js da parte de infraestrutura da versão necessitada, necessária.

[01:28] Eu baixei o projeto e os módulos. A primeira coisa que você vai olhar é o seguinte: existe uma pasta dentro do nosso projeto que é "dist", de distribution, de distribuição. Se você olhar dentro dessa pasta "dist" vemos um arquivo html com uma única página que vamos trabalhar durante todo o projeto de negociação.

[01:53] Uma coisa importante para entendermos é que é esta pasta "dist" que vai ser compartilhada com o nosso navegador. Tudo que estiver dentro dessa pasta "dist" será acessível através do nosso navegador por meio de um servidor web.

[02:11] Como eu faço para compartilhar essa pasta "dist" como o meu navegador? Eu vou chegar dentro aqui do meu "package.json", vocês verão que há um script chamado server. Vou escrever aqui no meu terminal npm run server. Quando eu executo esse comando o navegador padrão do meu sistema operacional já é aberto automaticamente e os arquivos da pasta "dist" estão sendo compartilhados.

[02:40] Podemos até olhar pelo terminal que o Index, o Bootstrap, o Favicon estão todos sendo compartilhados com o meu navegador, todos na porta 3000. Uma grande sacada desta estrutura é que qualquer alteração que você fizer nos arquivos do projeto vai se refletir automaticamente no navegador.

[03:03] Por exemplo, se eu diminuo aqui a minha tela, tudo isso foi pensado para ter a comodidade de que você só se preocupe em escrever o código TypeScript e não se preocupe com a infraestrutura nenhuma.

[03:16] Eu vou dar um exemplo. Vou abrir o meu Index, onde está aqui Negociações eu vou colocar um XYZNegociações e vou salvar. Quando eu salvo automaticamente, vemos que o browser tem refresh, ou seja, podemos trabalhar, se você tem dois monitores, tranquilamente com dois monitores e qualquer alteração que você fizer automaticamente o navegador vai refletir essa alteração ou se você trabalha com um monitor apenas você pode dividir a sua tela desta maneira.

[03:48] O importante aqui é: que isso é uma página html escrita com Bootstrap bem simples, tem uma data, uma quantidade, um valor, um botão incluir e toda vez que quisermos trabalhar, acessar essa página da nossa aplicação, vou para o terminal, abro o terminal, fecho meu navegador que eu parei, vou executar o npm run serverque vai automaticamente abrir aqui o meu navegador servindo o Index.html da minha aplicação.

[04:19] O importante é entender que a pasta "dist" é o conteúdo que está dentro desta pasta, acessível no servidor. Agora que já entendemos como esse projeto inicial está estruturado vamos partir para a materialização do domínio de negociação, do modelo de negociação que é o assunto do próximo vídeo.

### Aula 1 - Entendendo o carregamento de módulos - Vídeo 4

Transcrição  
[00:00] Vamos abrir o projeto de novo para revisarmos. "Open" ou "Open Folder" > "Desktop > typescript-curso1", consigo ver a pasta do meu projeto, vou abrir o terminal, "New Terminal", vou executar meu comando npm run server que agora vai automaticamente abrir meu navegador. Se por acaso não abriu no seu você digita localhost 3000 temos que enviar nossa página aqui de negociação.

[00:34] Antes de cairmos dentro da parte de negociação quero fazer aqui uma introdução rápida com vocês. Caso vocês não tenham feito outro curso na Alura sobre sistema nativo módulo ECMAScript 6, como esse funciona porque vamos usar aqui ao longo do treinamento. É bem relâmpago e bem light.

[00:51] Vamos voltar para a nossa pasta. A primeira coisa que eu quero que vocês entendam é o seguinte, quando trabalhamos com sistema de módulos nativos do navegador, vamos importar um único módulo que é um script de JavaScript, um único módulo em Index html e é o navegador que vai ler esse módulo e vai descobrir o que ele necessita para funcionar e vai baixar para nós automaticamente outros módulos.

[01:19] Removendo a responsabilidade de ter que colocar vários scripts da nossa página e ter que lembrar a ordem de dependência entre eles. Isso é muito interessante. Podemos fazer isso nativamente no navegador.

[01:34] Como vamos fazer isso? Vamos lá dentro da pasts "js", dentro dela, clicamos em js/models ele vai estar com a seta para baixo, eu vou clicar com o botão direito, "New File", eu vou criar o App app.js. Cuidado na hora de criar porque ele não pode ficar dentro da pasta models, tenha a certeza que ele é filho direto da pasta js.

[01:57] Criei este humilde módulo porque não vamos falar script, porque trabalhando no sistema de módulos todo arquivo .js chamamos de módulo. Vou colocar aqui aquele humilde alert que aprendemos no curso de lógica de programação, coloquei o alert, vou voltar para o Index html e vou fazer isso uma única vez. Vou colocar aqui a tag `<script type="module" src=></script>`, para dizer que não é um script é um módulo.

[02:28] Onde está esta função? É só lembrarmos que a pasta "dist" é compartilhada na raiz do meu navegador quando eu abro o localhost 3000. Tenho que colocar a subpasta `<script type="module" src="js/app.js"></script>`. Vou fechar a tag script, vou salvar.

[02:49] Salvei, vou voltar ao navegador e automaticamente ele já recarregou e já me mostrou o alerta provando que a função está sendo carregada pelo sistema de módulos do ECMAScript. Então importei o módulo principal da aplicação e é dentro dele que toda a aplicação vai ser inicializada e por aí vai. Agora que entendemos isso vamos partir para a modelagem da nossa negociação que é o que interessa.

### Aula 1 - Importando módulo nativo do ECMAScript

Você está trabalhando em um projeto front-end e quer utilizar os módulos ECMAScript para uma maior organização do seu projeto. Qual a forma correta de importar um módulo a partir de um arquivo HTML?

Resposta:  
`<script type="module" src="app/app.js"></script>`

> Alternativa correta! O atributo type="module" indica para o navegador que o arquivo a carregado deve ser tratado com um módulo e não um script.

### Aula 1 - Negociação, modelagem e regras - Vídeo 5

Transcrição  
[00:00] Chegou a hora de materializarmos, modelarmos a nossa classe Negociação. Quando falamos em modelagem dizemos que a negociação é um modelo, por quê? Ela é um modelo de algo que existe no mundo real.

[00:13] Se formos para o mundo real, para o mundo da bolsa de valores, sabemos que uma negociação possui regras. Por exemplo, uma negociação não pode ser modificada depois de criada, obrigatoriamente tem que ter uma data, quantidade e valor, o volume de uma negociação calculado multiplicando-se a quantidade negociada do dia pelo valor negociado.

[00:33] Todas essas regras que existem no mundo real têm que ser materializadas no meu código, no meu modelo de negociação para que ela se aproxime o mais perto no real. Inclusive, no nome de métodos de propriedade que fique escrito em alto nível para quem leia o código entenda de que domínio se trata e no nosso caso é um domínio de negociação.

[00:55] Não vamos começar a escrever em TypeScript, se você está ansioso para isto. Vamos escrever primeiro em JavaScript para ver se a linguagem JavaScript consegue atender a todas essas especificações. A primeira coisa que vou fazer, vou lá em "App", vou tirar esse alert daqui e todos os modelos que vamos criar da nossa aplicação ficarão dentro da pasta models. Aqui dentro eu vou clicar com o botão direito do mouse, "New File", vou criar negociacao.js.

[01:28] Vou modelar este arquivo usando classes do ECMAScript, vou dizer que: class Negociacao {}. Que vai ter uma quantidade, uma data e um valor.

[01:45] E eles não podem ser modificados depois que uma instância de negociação é criada. Já vou lançar um melhor da linguagem JavaScript, criando atributos privados, atributos que quando eu defina em uma classe eu só consigo definir os valores deles através do construtor ou por métodos da própria classe. Se alguém fora da classe tentar alterar essas propriedades, não vai conseguir.

[02:12] Para fazer isso eu uso tralha, ‘#’, data, vai ter uma propriedade, um atributo de classe, tralha quantidade, tralha valor, class Negociacao { #data; #quantidade; #valor; }. Eu estou escrevendo no que tem de mais moderno em JavaScript para podermos comparar depois com a linguagem em JavaScript e ver o que o JavaScript nos traz de benefício. [02:32] Agora eu preciso, no momento que estou criando uma negociação, passar a data, quantidade e valor. Sabemos que fazemos isso através de um construtor, vou receber uma data, uma quantidade e vou receber um valor constructor(data, quantidade, valor) { }.

[02:43] E aqui vou dizer constructor(data, quantidade, valor) { this.#data = data; this.#quantidade = quantidade; this.#valor = valor; }.

[03:02] Fiz isso e vamos testar se realmente essa função é possível modificar a data, a quantidade e o valor. Para isto eu preciso criar uma instância dessa negociação em "App" porque esse é o primeiro módulo da minha aplicação, que vai executar o meu código.

[03:18 ] Para que eu possa criar uma instância de negociação eu preciso importar o módulo negociação em App. Para que a negociação seja exportável eu preciso na definição da minha classe colocar este comando export class Negociacao.

[03:35] Salvei, fui lá para "App" e vou fazer: import {}. Eu quero importar a minha negociação. Vou importar essa negociação porque eu quero usar essa classe que é o módulo negociação.js. Se o App está dentro de js, eu preciso fazer: import { Negociacao } from './models/negociacao.js';.

[04:07] Vou salvar, vou voltar ao navegador para mostrar para vocês. Vou abrir o console, o navegador, você clica em "F12" ou usa o comando "Shift + C". Se eu vier na aba Network e a recarrego, você vai ver que o App foi carregado e como eu fiz o import de negociação, ele também carregou o módulo da negociação sem eu precisar explicitar dentro do Index.html. Só bastou eu colocar o App que o navegador vai resolver isso tudo para mim.

[04:40] Agora que tenho minha negociação importada eu vou criar uma instância de negociação, vou dizer: const negociacao = new Negociacao(), vou passar aqui com a ordem dos parâmetros do construtor que são data, quantidade e valor, vou passar new date(), a quantidade que eu vou passar é 10 e o valor que eu vou passar é 100. const negociacao = new Negociacao(new Date(), 10, 100);

[05:10] Passei para o meu construtor e vou fazer um console.log da negociação para vermos. console.log(negociacao);. Vou tentar negociacao.quantidade = 1000;, tentar alterar. E vou dá um outro console.log(negociacao) para podermos ver o resultado.

[05:36] Vou salvar, vou voltar no navegador, vou olhar na aba do console. Quando eu vejo aqui, olha só, ele criou com a data, com a quantidade e com o valor. A quantidade continua 10, não mudou. O que meu JavaScript fez foi adicionar dinamicamente uma propriedade quantidade de mesmo nome dinamicamente com esse valor que eu coloquei.

[06:06] Não consegui alterar o valor original, mas também eu consegui adicionar essa propriedade aqui quantidade dinamicamente na minha instância da classe negociação. Não parece que o JavaScript está nos ajudando a não alterar a propriedade da classe negociação.

[06:29] O que precisamos agora é implementar os getters para que eu possa ler cada negociação. A data, se eu quiser só ler a data, se eu ler a quantidade, se eu quiser o volume eu preciso criar esses getters para que eu possa imprimir aqui e também ver o resultado antes de fazermos uma grande revelação.

### Aula 1 - Diferenciando escopos de módulos - Exercício

Você está desenvolvendo um projeto de aplicação web onde o código é dividido em vários módulos JavaScript para melhor organização e reutilização. É importante entender como o escopo funciona dentro desses módulos para garantir que as variáveis e funções sejam corretamente isoladas e compartilhadas conforme necessário.

Considerando esse cenário, qual o comportamento do escopo em módulos ECMAScript?

Resposta:  
Variáveis e funções são restritas ao módulo, a menos que sejam exportadas.

> Em módulos ECMAScript, tudo declarado é isolado dentro do módulo até que explicitamente exportado.

### Aula 1 - Criando classes no ES2015

No paradigma da Orientação a Objetos, criamos a representação de algo do mundo real em nosso programa através de modelos, e esses modelos são definidos através de classes.

Qual dos códigos abaixo você utilizaria para criar uma classe Pessoa de acordo com o ECMAScript 2015?

Alternativa correta

```JavaScript
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
```

> Alternativa correta! A classe está definindo suas propriedades nome e idade através de um construtor.

### Aula 1 - Finalizando o modelo de negociação - Vídeo 6

Transcrição  
[00:00] Vimos que é possível, no mundo JavaScript, com a linguagem mais moderna do JavaScript, criar atributos privados de uma classe, e nela eu posso atribuir valores através do construtor ou através de métodos “acessadores”.

[00:18] Vimos que é possível alterar quantidade, mas não é aquela quantidade privada da minha instância de negociação, é que o JavaScript como é uma linguagem dinâmica adicionou a propriedade quantidade dinamicamente nesse objeto, ele não tem relação nenhuma com a quantidade que está internamente na classe.

[00:39] Isso pode te confundir um pouco. Vamos ver se depois temos alguma coisa melhor para que isso não aconteça, mas o mais importante é entendermos aqui que a quantidade que está encapsulada em negociação ainda não é modificada, não está sendo modificada.

[00:55] Para terminar vou criar getters, somente leitura para quem quiser ler a data, a quantidade e o valor individualmente. Porque se eu fizer agora assim, chegar agora e colocar negociacao.data, se eu salvo e volto no meu navegador vai dar undefined, por a data ser privada, eu não tenho acesso a ela. Preciso criar alguém que me retorne essa data. Nem se eu fizer isso: negociacao.#data, vai dar erro de sintaxe.

[01:32] Como eu crio um getter? Eu vou chegar na minha classe de JavaScript, vou criar get data() {}, essa função vai me retornar return this.#data;. Eu vou criar get quantidade() {} que vai me retornar return this.#quantidade; }. Porque o get, assim como o método tem a acesso, sabe acessar os atributos privados da minha classe. Então get valor() {} e vou retornar return this.#valor;.

[02:11] Fiz isso, vou salvar. Volto em "App", quando eu crio o get eu consigo acessar a propriedade como se o get fosse uma propriedade classe, como se não fosse o método. O get é como se fosse o método, mas ele me dá um acesso como se fosse uma propriedade de classe. Fazendo isso agora tem que ser capaz. Salvei, vou voltar no navegador, recarregar.

[02:38] Eu consigo ver, ler a data. Está legal, eu consigo criar uma negociação, essa negociação se eu tenho de mudar as propriedades privadas dela eu não consigo, eu não criei nenhum método na minha classe que me permita fazer essa alteração.

[02:55] Contudo eu consigo a ler a data, eu consigo ler a quantidade e se eu tentar fazer isso aqui também não vai rolar. Se eu tentar fazer negociacao.data = Flavio;, quando executo o meu código, não dá, porque é get, eu não posso atribuir nada a um get, só ler.

[03:20] Está faltando o nosso volume. O volume vou criar como get: get volume(] { return this.#quantidade * this.#valor; }. Quantidade vezes valor. Salvei, vou voltar em App, eu quero imprimir o volume, como é um get eu acesso como se fosse uma propriedade ele tem que imprimir para mim 1000.

[03:55] Salvei, volto para o navegador, crio meu console, dou refresh e está lá 1000. Será que conseguimos materializar tudo bonito? É isso que vou mostrar para vocês no próximo vídeo. A coisa não está 100% e vamos ver que não é por nossa culpa, é por uma questão da limitação da linguagem JavaScript.

### Aula 1 - Motivação do TypeScript - Vídeo 7

Transcrição  
[00:00] Tudo é muito bonito, tudo está rodando, mas será que conseguimos mesmo implementar essas regras das especificações de uma negociação escrevendo nosso código em JavaScript da maneira que nós fizemos?

[00:15] Vamos primeiro checar. Uma negociação não pode ser modificada depois de criada. Vimos que quando eu adiciono aqui uma propriedade privada da minha classe e eu coloco um get que tem um nome igual ao da minha propriedade eu não consigo chegar no meu código.

[00:35] Se eu fizer negociacao.quantidade = 10; este código não vai funcionar. Eu vou salvar, vou voltar para o navegador e quando olho lá ele gera essa mensagem de erro dizendo que eu não posso atribuir nada a um get. Não modifiquei a quantidade, parece que está tudo ok.

[00:57] Não está. Primeiro: na hora que estou escrevendo meu código será que nada me impede de eu chegar agora e dizer que quantidade é igual a 10 e eu só vou saber que eu cometi um erro em runtime, significa que eu só vou saber que meu código não funcionou depois que eu estou rodando.

[01:17] Mas é tarde demais. Imagina se esse código vai para a produção ou vai até para um ambiente de homologação, um ambiente de testes. Você vai rodar, vai estar com problema, você vai ter que voltar, alterar seu código, colocar de novo no ambiente de testes ou de produção.

[01:34] Segundo: nada me impede de eu adicionar agora, chegar aqui em negociação e eu colocar quantidad = 10;, comi um "e". Vocês sabem o que vai acontecer, o JavaScript vai criar dinamicamente nessa instância a propriedade quantidade. E se o programador pegar onda, se ele chamar de quantidade e ele quiser fazer console.log(negociacao.quantidad); e ele quer ver o resultado, ele vai fazer isso daqui.

[02:13] Volto lá para o navegador, vou recarregar, tem que fazer refresh nos arquivos do JavaScript. Ele vai ver que o código dele rodou, funcionou, mas ele não está considerando a quantidade lá da negociação. Ele colocou por engano essa propriedade e está considerando em todo o código essa propriedade adicionada dinamicamente.

[02:37] Isso não está legal, isso vai gerar problema. E mais ainda exige essa regra que diz que uma negociação obrigatoriamente tem uma data, uma quantidade e um valor. Vamos voltar para o nosso código e olha o que eu vou fazer, removi isso aqui.

[02:52] Agora vou colocar uma data new Date() e esqueci de colocar a quantidade. E agora vou pedir para ele calcular negociação, o volume para mim. const negociacao = new Negociacao(new Date() ); console.log(negociacao.volume);

[03:14] Salvo, vou lá no navegador, vou fazer um refresh e “NaN, not a number. Porque o meu código na hora que estou desenvolvendo está passando, não tem nenhuma indicação visual que eu cometi um erro, ninguém me obriga a passar esses parâmetros para o construtor da minha classe negociação e eu só vou saber que meu código está com problema em runtime, quando meu código está rodando no navegador.

[03:44] E isso é muito tarde, queremos falar rápido, queremos descobrir se o nosso código está com defeito no momento em que estamos desenvolvendo. É aí que entra a linguagem TypeScript.

[03:56] A linguagem TypeScript é um Superset do ECMAScript, significa que tudo que tem em JavaScript tem em TypeScript e o TypeScript nos traz mais coisas que, inclusive vamos ver no próximo vídeo, nos ajuda a capturar erro em tempo desenvolvimento e não em runtime.

[04:16] Ou seja, eu não vou ter que testar a minha aplicação: escrevo o código, vou para o navegador e recarrego para saber se ela está funcionando ou não. Eu quero saber no momento que eu estou desenvolvendo.

[04:27] "Como o TypeScript faz isso, Flávio? Como o TypeScript entra no nosso código, como eu configuro isso?" Isso vamos ver agora nos próximos vídeos.

### Aula 1 - O que aprendemos?

Nesta aula, aprendemos sobre:

- Introdução ao projeto e sua estrutura;
- Um pouco sobre módulos do ECMASCRIPT;
- Modelagem de uma Negociação em JavaScript;
- Buracos em nossa modelagem por limitações da linguagem JavaScript.

### Aula 2 - TypeScript e Compilador

### Aula 2 - Instalando o TypeScript - Vídeo 1

Transcrição
[00:00] Vimos no vídeo do último capítulo, porque estamos trazendo do TypeScript para cá, qual o tipo de problema que o TypeScript pode resolver para nós, mas antes de eu falar sobre TypeScript, começarmos a codificar utilizando a linguagem TypeScript, precisamos instalar ele na nossa máquina, mais propriamente dito o compilador TypeScript.

[00:23] Você pode pensar: "Flávio, compilador?". Segura um pouco, você vai entender, vamos só preparar a nossa infraestrutura para que eu possa avançar com vocês e vocês entenderem melhor essa relação de TypeScript, compilador e JavaScript.

[00:36] Primeira coisa que você vai para fazer: se certificar que o terminal que você está trabalhando está parado, você para ele, "Ctrl + C", e agora vamos instalar a última linguagem, a última versão da linguagem TypeScript na data de criação desse treinamento, que é a versão 4.2.2. Vamos lá.

[00:54] Eu vou fazer, como instalamos isso? Você vai escrever npm install typescript@4.2.2. Uma coisa importante é o seguinte: esse treinamento, claro, no futuro ele vai caducar, novas versões do TypeScript vão sair, mas utilize sempre a versão do estou utilizando aqui para que você não tenha nenhuma quebra de compatibilidade.

[01:21] E, após terminar o curso, nada te impede de você fazer o upgrade da linguagem TypeScript e poder correr atrás se algo mudou, se algum detalhe mudou. Vamos usar essa versão aqui.

[01:34] Eu vou colocar aqui -- save-dev. npm install typescript@4.2.2 --save-dev. Por quê? Porque essa é uma dependência do Node JS de desenvolvimento, não é algo que você vai levar para produção, por isso é --save-dev. Ao mesmo tempo, vou executar esse comando, eu vou deixar aberto o pack de JSON, que vamos ver que quando executar esse comando agora, olha, fiz esse comando.

[02:12] Ele vai adicionar o TypeScript como uma dependência minha de desenvolvimento. Atualmente temos o lite-server e o concurrently, que é da infraestrutura do projeto que eu trouxe pronto para vocês, que não vale a pena ficarmos focando agora, vamos focar no TypeScript.

[02:32] "Flávio, beleza, executei esse comando, ele está funcionando, estou maravilhado porque nenhum erro no console". Mas agora temos que começar a configurar, o TypeScript não fez Mãe de Diná para saber como você quer ele se comporte no seu projeto.

[02:48] Então precisamos criar um arquivo que vamos ver no próximo vídeo, que é o TS Config JSON, é esse arquivo que podemos fazer o tweak, pode melhorar, pode deixar o TypeScript mais rígido, mais frouxo, dependendo da necessidade do projeto, e é isso que vamos ver no próximo vídeo.

### Aula 2 - Conhecendo arquivos TS - Vídeo 2

Transcrição  
[00:00] Temos o TypeScript instalado, precisamos configurar o compilador, mas antes de configurar o compilador eu quero fazer uma coisa com você. Por favor, vá até o arquivo "app.JS" e renomeie o arquivo para "app.ts", você vai na "negociação" vai renomear para "negociação.ts". Você tem dois aqui, um arquivo "negociação.ts" e "app.ts". "Flávio, o que é TS?", de TypeScript, esse não é o objetivo do nosso curso, escrever código no TypeScript?

[00:39] Porém, no "app.ts", eu já tenho um erro que o Visual Studio Code está mostrando para mim, um erro muito interessante, porque é o seguinte: como eu renomeei de JavaScript para TS, o Visual Studio Code já tem uma integração com TypeScript e já está verificando se o seu código está correto ou não mesmo antes do compilador do TypeScript está configurado.

[01:10] Olha que bacana, se você olhar para cá ele está dizendo que "negociação" espera três argumentos e você só passou um, ou seja, já tive uma indicação de erro aqui. Se eu escrevo negociacao.quantidade = 10, você vai ver que o Visual Studio Code integrado com o TypeScript já está me dizendo que não posso atribuir 10 a propriedade quantidade porque ela é somente leitura, é um getter.

[01:46] Você já começa a ter uma informação visual de que seu código não está legal em tempo de desenvolvimento. Mas vamos fazer o seguinte: se eu tentar carregar esse código no navegador não vai funcionar, porque o navegador não entende a linguagem TypeScript, ele nem sabe o que é esse raio de ".ts".

[02:07] Olha o que vamos fazer, muita calma nessa hora. Salve o seu arquivo se você ainda não salvou, deixa ele com erro, não se preocupa. Não estamos na pasta de "dist"? "Dist" é tudo que o navegador entende, é tudo JavaScript, então, em contrapartida, temos a pasta "app", e essa pasta "app" é a pasta que contém, que vai ter todos os nossos arquivos de TypeScript.

[02:37] Olha o que vou fazer: o "negociação.ts" eu vou jogar lá para dentro de "models", o "app.js" eu vou jogar direto para "app" movi. Faz isso com calma, sem pressa nenhuma, o importante é entendermos isso aqui de maneira sólida. Se eu olho agora a minha pasta "app", ela tem "models", "negociação", e na raiz de "app", ela tem "app.ts". Ficou claro?

[03:15] Agora lá na pasta "dist", olha o que você vai fazer, está vendo o arquivo dentro da pasta "dist", a pasta "model" está vazia, não tem mais o JS aqui, então o que acontece? Se eu abro o navegador agora, eu rodo o meu servidor, npm run server. Se eu abro ele, vou à aba network, ele não conseguiu encontrar o "app.js", porque ele não existe.

[03:55] Então, você pode perguntar: "Flávio, como você resolve isso?". O que eu quero mostrar para vocês é o seguinte: todo código de TypeScript que formos escrever, vamos escrever dentro da pasta "app". Certo? Quando nosso código estiver pronto, nós vamos transformar esse código TypeScript em código JavaScript, e os arquivos que são compiladas do arquivo TypeScript cairão automaticamente dentro da pasta "dist".

[04:32] Isso significa que vamos chegar um ponto que qualquer alteração que eu fizer nos meus arquivos em TypeScript automaticamente gerarão arquivos correspondentes na pasta "dist", porque, lembre-se: navegador não entende a linguagem TypeScript, ele entende JavaScript, então tem que haver uma tradução, tem que haver uma compilação. Ficou claro?

[04:55] E de bandeja o Visual Studio Code já está nos dizendo que o nosso código não está legal. Eu não vou corrigir ainda, eu vou partir agora para a parte de compilação, porque precisamos que esses arquivos sejam compilados e apareçam dentro da pasta "dist".

[05:13] Se você trabalha com Vue JS, já Angular JS, React, quem usa TypeScript, você vai ver que a estrutura é praticamente parecida, você tem uma pasta que você tem os arquivos de TypeScript, se você usa React ou TypeScript, por exemplo, e o resultado da compilação desses arquivos fica na pasta de distribuição.

[05:34] Agora que você entendeu essa dinâmica de força, vamos como configurar o compilador para que os arquivos em TypeScript apareçam na pasta "dist" como arquivos JavaScript, para que ele passe por esse processo de compilação e é esse processo de compilação que nos permite veja erros em tempo de desenvolvimento.

[05:55] Como se você tivesse trabalhando com a linguagem como Java, C#, porque o TypeScript é uma linguagem taticamente tipada, você tem que seguir regras, você tem tipos que você não pode ferir. Ficou claro? Vamos para o próximo vídeo configurar esse tal compilador e fazer essa coisa toda funcionar porque eu quero escrever código TypeScript.

### Aula 2 - Configuração básica do compilador - Vídeo 3

Transcrição
[00:00] Você deve estar se perguntando: "Flávio, poxa, o Visual Studio Code já faz essa integração do TypeScript, para que eu preciso configurar o compilador do TypeScript?". Você precisa configurar o compilador porque o Visual Studio Code não vai gerar os arquivos, converter, compilar os arquivos TypeScript da pasta "app" e jogar dentro de "dist".

[00:23] Você precisa fazer isso e se encarregar de fazer isso manualmente. Se você vai estudar Angular, React ou você vai trabalhar com Vue, você utiliza TypeScript por debaixo dos panos, tudo isso vai ser feito de maneira transparente, você não precisa se preocupar, mas aqui temos que entender o negócio a fundo.

[00:41] Vamos lá. Primeira coisa é o seguinte: o centro nervoso lá do TypeScript é o arquivo "tsconfig.json", então dentro da pasta do seu projeto, você clicar aqui em "package.json", vai clicar aqui nesse sinal de "novo arquivo", você vai criar esse arquivo aqui, não pode errar o nome, é "tsconfig.json".

[01:49] Ele tem que estar na raiz do seu projeto, aonde você está abrindo o Visual Studio Code, para que você consiga passar algumas configurações para o seu compilador TypeScript.

[01:16] Primeira coisa que eu vou fazer é abrir essa chave, você não pode cometer nenhum nesse arquivo porque senão ele não vai funcionar, você vai saber isso de imediato, é só você voltar e verificar se você cometeu alguma gafe na hora de digitar nesse arquivo. O que vamos fazer? Isso aqui precisa estar em aspas duplas, eu já tenho o auto complete aqui, se sua ideia por acaso pifou e não estar fazendo auto complete é só você digitar o que eu vou fazer.

[01:40] Primeira coisa que eu quero fazer é passar umas configurações de compilação, opções de compilação, que é compilerOptions. Que configurações são essas? A primeira que eu quero colocar qual é o diretório que eu vou considerar depois de eu ler os seus arquivos "ts" onde que eu vou gravar os arquivos resultantes. Sabemos que tudo que estar disponível para o navegador fica dentro da pasta "dist". Vou dizer que a "outDir": "dist/js".

[02:23] Seguinte: quando você trabalha com o compilador TypeScript, você pode dizer para o TypeScript o seguinte: " TypeScript, quando você for converter os seus arquivos "ts", converte para o ECMAScript 5, porque eu tenho que dar suporte a IE8, IE9, ou transforma para o ECMAScript 6”.

[02:41] Ou “transforma para o ECMAScript mais recente", você tem como configuração para o compilador TypeScript para ver em qual versão do JavaScript ele vai gerar esse código, essa transformação.

[02:57] Eu não vou usar o mais moderno, vou usar para pegar tudo desde a versão do ECMAScript 6, que, se não me engano, é desde 2015, a versão 2015 do JavaScript. Vou dizer que o "target:, ele botou ES3, mas eu dou "Ctrl + Espaço", tem várias opções aqui, o que eu vou usar aqui é o ES6.

[03:21] Eu quero que ele converta todo o código JavaScript com a linguagem JavaScript na versão do ECMAScript 6. Posso até colocar 5, eu vou fazer um teste depois gerando é ES6, ES5 para vocês verem a diferença no final.

[03:40] Agora é o seguinte: " programador, você diz que você quer que eu gere os arquivos na pasta "dist", que converta os arquivos TypeScript para ECMAScript 6, mas qual é os arquivos, onde estão os arquivos que você quer que eu leia?" Os arquivos que eu quero que você considere estão dentro da pasta "app", então o que eu vou fazer?

[04:00] Vou chegar aqui, vou dizer: "compilador, inclui aí para mim a pasta "app", toda subpasta e qualquer arquivo, tudo que tiver dentro da "app", que for ".ts" eu quero que você converte e jogue na pasta "dist.js"". Eu poderia ter outras partes do sistema, era só colocar vírgula e colocar o nome de outra pasta, mas como eu só tenho "app", vai ficar só "app". "include": ["app/**/*"].

[04:33] Fiz o include, fiz tudo bonito, será que vai funcionar? Esse é o mínimo da configuração do teu TypeScript, do teu compilador que você deve fazer. Vou salvar aqui. Ele vai ler de "app" e vai gerar em "dist". "Mas Flávio, beleza, você fez essa configuração, mas que eu rodo esse compilador, como que eu faço ele funcionar?" Vem comigo, vamos lá para o "package.json" e vamos adicionar um novo script.

[05:00] Cuidado para não mexer em nenhum outro script que já tem o nosso projeto. Vamos colocar um script que eu vou chamar de "compile", eu podia chamar de "mãe Diná", podia chamar de "calopsita", mas eu chamei de "compile". E aqui, o que vou chamar quando chamar esse script, eu vou chamar o tsc. "compile": "tsc".

[05:20] Isso significa que toda vez que eu rodar esse script, o Node Js inteligente vai procurar o módulo do "tsc", do TypeScript Compiler, dentro da pasta no "node_modules" para fazer o trabalho sujo de transformar os arquivos ".ts" para arquivo JavaScript.

[05:40] É muita emoção nessa hora. Eu vou salvar. Meu "TS config" está bonito, olha aí, confere comigo, seu "package.json", vou parar aqui o meu servidor e vou dar npm run compile. Quando esse executo esse código no meu terminal, o TypeScript Compiler executou e deu erros.

[06:00] Se você olhar o erro que teve no meu compilador TypeScript, ele confere com o erro que está sendo exibido no Visual Studio Code, então isso significa que meu compilador não vai continuar enquanto você não resolver esse erro de compilação do seu código. E eu vou resolver agora, ou seja, se você olhar aqui para dentro da pasta "dist", ele gerou o "app" e ele gerou o "negociação.js".

[06:40] Se você olhar, mesmo com o erro que aconteceu, eles têm uma estrutura, se eu comparar o "app.js" com o "app.ts", eles são bem parecidos, mas se eu olho "negociação", você vai ver que o código que saiu aqui é um código completamente diferente do meu código "negociação" que eu escrevi em TypeScript, por quê?

[07:03] Porque o meu TypeScript teve que converter todo aquele código que escrevemos usando o que há de mais moderno em TypeScript para uma linguagem compatível com o ECMAScript 6 e não tínhamos propriedades privadas, então, você não precisa se preocupar, pode ter a certeza que vai funcionar assim que resolvermos os problemas de compilação.

[07:29] Tem uma coisa que precisamos resolver. Primeiro, precisamos resolver o problema de compilação e, segundo, não faz sentido para nós o TypeScript gerar arquivo "js" transformado de arquivo "ts" enquanto houver um problema no compilador do TypeScript. Vamos configurar isso tudo e eu vou fazer mais uma revisão para deixarmos isso bem amarrado.

### Aula 2 - Revisando uso do compilador - Exercício

Você está desenvolvendo um projeto em TypeScript e precisa configurar o compilador para que ele funcione corretamente. Para isso, você deve criar e configurar o arquivo tsconfig.json.

Qual a importância do arquivo “tsconfig.json” em um projeto TypeScript?

Resposta:  
O arquivo tsconfig.json é utilizado para configurar as opções de compilação do TypeScript, como o diretório de saída e a versão do ECMAScript.

> O tsconfig.json é essencial para configurar as opções de compilação do TypeScript, incluindo o diretório de saída e a versão do ECMAScript.

### Aula 2 - Analisando o arquivo tsconfig.json - Exercício

Você está trabalhando em um projeto com TypeScript e precisa definir as opções de compilação para o código. Para isso, você pretende usar o seguinte código no arquivo “tsconfig.json”:

```JSON
{
    "compilerOptions": {
        "target": "ES6",
        "outDir": "dist/js"
    },
    "include": [
        "app/**/*"
    ]
}
```

Com base nesse cenário, o que fazem as propriedades "target", "outDir" e "include" no arquivo “tsconfig.json”?

Resposta:  
"target" define a versão ES6 do JavaScript, "outDir" é o diretório onde os arquivos compilados serão salvos e "include" define quais arquivos TypeScript devem ser compilados.

> Muito bem. O target define a versão do JavaScript, o outDir define o local onde os arquivos compilados serão salvos e o include define os arquivos que serão compilados.

### Aula 2 - Aprimorando a configuração - Vídeo 4

Transcrição  
[00:00] Nessa parte, entenderemos como as coisas se encaixam, uma delas, que já expliquei para vocês, é que tudo que está dentro de "app" vai ser compilado de arquivo "ts" para arquivo "js".

[00:20] E ele vai respeitar a mesma estrutura de árvore, tanto isso é verdade que você vai chegar em "dist" agora, vai apagar a pasta "js", vou executar o compilador de novo, ele vai executar e ele vai gerar a pasta "js > models > app" usando a mesma estrutura de pastas que eu tenho aqui. Se "app" está dentro de "app", meu "app" vai ficar dentro de "js". Se meu "negociação" está dentro de "models" vai ficar dentro de "models".

[00:58] Vimos que o nosso código TypeScript ainda está com problema, significa que rodarmos o nosso servidor, eu parei o compilador, npm run server, se o rodar no meu servidor e carregar a aplicação o código JavaScript que foi gerado lá a partir do meu TypeScript está ferrado, porque o meu TypeScript não está passando, não está compilando, se ele não está compilando não faz sentido gerar um JavaScript a partir de um arquivo TypeScript bichado, com problema.

[01:30] Eu tenho que corrigir isso. Eu também não quero que ele gere arquivos "js" em um enquanto houver problema no meu código.

[01:38] O que vamos fazer? Eu vou parar aqui o meu servidor, vou de novo na pasta "dist > js". Cola em sua cabeça que passa "dist" de "js" até o final do curso, você pode apagar e deletar quantas vezes você quiser, só ela. Apaguei a pasta "dist". O que eu vou fazer agora?

[01:57] Vou lá no meu "tsconfig.json" e vou adicionar mais uma configuração, dentro de compilerOptions, que é noEmitOnError": true.

[02:12] Isso significa que ele não vai gerar um arquivo "js" enquanto seu TypeScript não estiver passando na compilação, isso evita que você gere um arquivo "js" com problema. Vou salvar, salvei. Vou à pasta "js", deletada, executar de novo. Executarei o meu compilador, npn run compile, ele executou.

[02:47] Olha só, falhou, você está vendo pasta "js" aqui? Não, e eu nem quero, eu só quero que gere "js" quando eu tiver certeza que meu arquivo TypeScript está passando. Vamos lá fazer ele passar. Vou clicar aqui em "app.ts", ele não está passando porque o TypeScript é inteligente, ele sabe que essa negociação precisa receber três parâmetros no construtor e você, desenvolvedor, não passou os que estão faltando.

[03:14] Vou dizer que ele está recebendo a data, passar uma quantidade "10", e o valor "100", você ver que instantaneamente o Visual Studio Code diga que o seu código passou na compilação.

[03:28] Vou salvar. Agora, no meu terminal, vou executar o compile. Vamos lá que eu quero ser feliz, TypeScript Compile executo, nenhum erro aqui e quando eu olho ele gerou o arquivo "app.js", que está imprimindo o volume da minha negociação, e dentro de "model" ele gerou esse arquivo verborrágico.

[03:56] Cheio de coisas que não escrevemos, mas que é a transformação do nosso arquivo TypeScript usando o que há de mais moderno na linguagem TypeScript e JavaScript, para torná-lo compatível com uma versão antiga do JavaScript.

[04:11] A pergunta que eu faço é a seguinte: se você vai resolver algum problema no seu código e você vai olhar o arquivo "js" ou "ts"? Você vai olhar o arquivo "ts", porque ele é o código-fonte, o "js" é gerado a partir dele, se você tem que fazer uma correção é no arquivo "ts".

[04:26] Será que está funcionando? Vou voltar lá para o meu navegador, npm run server, vou rodar, abriu, vou olhar o meu "console.log" e estar lá bonito, imprimiu o meu volume, está tudo funcionando. Vemos que o navegador que está carregando são meus arquivos "js".

[04:49] O que tem que estar na nossa cabeça é que arquivo TypeScript fica em um lugar, qualquer alteração que eu vou fazer no meu projeto eu faço nos arquivos "ts", e no final eu compilo e jogo para dentro da pasta "dist" ou qualquer pasta da sua escolha, que é essa parte de distribuição que vai ser acessada pelo navegador.

[05:15] Entre nós, fica chamando esse compilador toda hora que ficarmos alterando um arquivo no projeto não é muito legal e vamos automatizar isso no próximo vídeo.

### Aula 2 - Automatizando a compilação de arquivos - Vídeo 5

Transcrição  
[00:00] Vamos deixar nosso ambiente mais profissional, em que sentido? No sentido de toda vez que eu alterar, bulinar, modificar, mexer nos meus arquivos "ts" que automaticamente o compilador do TypeScript escuta que eu mexi no arquivo e gere o processo de compilação sempre garantindo que a pasta "dist" vai estar atualizada após salvar qualquer arquivo "ts". Como fazemos isso?

[00:25] Primeiro você vai voltar para o seu terminal, vou parar aqui o meu servidor, vamos lá para o "package.json", existe uma série de scripts aqui, temos um script compile. Eu vou criar aqui um script que eu vou chamar de watch, podia ser calopsita, tico tico, mas eu vou chamar de watch, que é de observar, de ver.

[00:48] Ele vai chamar o compilador TypeScript com parâmetro -w, esse parâmetro -w você já deve imaginar que "w", "wacth", é para o compilador TypeScript ficar monitorando os arquivos.

[01:04] Deixa eu salvar aqui. Recomendo ficar monitorando os arquivos das pastas que você adicionar dentro do include, será que isso vai funcionar? Vou chegar aqui no meu terminal, npm run watch. Quando eu executo esse comando, você vai ver que "Starting compilation in watch mode", ele primeiro dá uma compilada em tudo e depois ele fica olhando se algum arquivo mexeu para que você possa ver na sua aplicação.

[01:39] Se eu chegar agora aqui no "app", eu vou colocar aqui um alert('oi'), vou salvar, fica olhando, salvei, quando eu salvo ele falou que detectou uma mudança e que fez uma compilação incremental. Se eu olho lá agora para pasta "dist > app", o alert estar lá.

[02:02] Vou para dentro de "app.ts", apaguei, salvei, quando eu volto para "app.js", olha lá, o alert não está mais lá. Isso prova que o processo de compilação está acontecendo o tempo todo. Temos um problema aqui, qual é o problema? Nós queremos que esse processo de compilação rode o tempo todo, mas eu também quero rodar o meu servidor web, por que qual é a sacada?

[02:29] A sacada é que toda vez que eu alterar a minha pasta "app", a pasta "dist" vai ser modificada, o meu servidor web, que eu expliquei para vocês no início do curso que ele fica escutando quaisquer mudanças na pasta "dist", vai fazer o refresh no navegador.

[02:48] Eu quero que isso aconteça, eu quero modificar um arquivo "ts", ele vai gerar o arquivo na pasta "dist", quando o meu servidor, o Live Server está disputando qualquer modificação na pasta "dist" ele automaticamente vai fazer o refresh no browser.

[03:02] Olha maravilha, se alterou o arquivo "ts", esquece, o navegador vai fazer o refresh e você vai ter sempre o resultado final da compilação do arquivo TypeScript lá. Para fazer isso, eu preciso fazer o compilador TypeScript e o servidor rodarem ao mesmo tempo. Como eu faço isso?

[03:22] Se você olhar aqui no "package.json" já tem adicionado aqui esse script aqui start, que usa esse módulo que já veio com o nosso projeto que permite que o node execute dois scripts em paralelo. Se você olhar aqui, ele vai executar o npm run watch e o npm run server.

[03:45] Vamos vê-lo em ação? Vou chegar no terminal. Feche o seu navegador para que ele abra de novo, para fazer todo o processo, ficamos mais impressionados ainda. npm run start, é ele que vamos usar até o final do curso. Fiz isso, ele vai executar o compilador TypeScript e meu servidor aqui abriu.

[04:10] Você vê que ele fez duas vezes o refresh, porque ele abriu a primeira vez e depois o TypeScript gerou os arquivos, ele detectou e fez o *refresh. Vamos fazer um teste?

[04:20] Vou chegar agora, vou diminuir essa tela, eu só acredito vendo. Vou chegar lá no "app.ts". Cuidado, fecha todos os arquivos aqui, "js", só deixa aberto o arquivo "ts" porque já aconteceu, pode acontecer com vocês, se vocês forem fazer uma alteração no arquivo "ts", mas estão alterando o arquivo "js". Esquece o "js", o "js" é resultado.

[04:52] Você vai no arquivo "app", olha o que eu vou fazer aqui, alert('oi'), quando eu salvar, o TypeScript vai compilá-lo, jogar na pasta "dist", o meu browser, usando Live Server, vai detectar e fazer refresh. Salvei.

[05:10] Nós conseguimos configurar um ambiente, se você não tem experiência com Angular, React, com Vue JS, conseguimos conseguiu um ambiente bem parecido com o que eles têm dentro da ferramenta de command line deles. Só precisamos relaxar agora e escrever código TypeScript e focar no TypeScript.

[05:47] Com isso, conseguimos chegar aonde que eu queria para dominarmos essa questão do compilador do TypeScript e entendermos ao longo do curso, recursos da linguagem TypeScript.

[05:56] O que é fantástico aqui, já posso mostrar também para dar um gosto, é: se eu escrever "negociação" errado, no Javascript isso ia passar batido, salvei, erro, ele me diz aqui, se você segura o "Ctrl" e clica aqui ele vai para linha direta onde está o erro.

[06:22] Outra coisa: se você escrever o volume errado, escreveu volum, ele está dizendo, "não existe", não existe na definição da classe, tem um erro, e por aí vai.

[06:35] E outra coisa: vamos esclarecer no próximo vídeo por que o nome é TypeScript? A ideia de tipos é muito importante na linguagem TypeScript, vamos entender um pouco no próximo vídeo antes de continuarmos com o projeto, que esse projeto vai se dividir em vários cursos e em cada curso desse vamos dando saltos na linguagem TypeScript.

[07:00] Vamos lá ver essa ideia de tipos e ver como nos beneficiamos disso no próximo vídeo.

### Aula 2 - O modificador private - Vídeo 6

Transcrição  
[00:00] Outra coisa para alinharmos é: para definição de atributos privados da minha classe, eu utilizei a sintaxe mais nova do JavaScript. Só que o TypeScript tem a sua própria sintaxe para definição de atributos privados e é essa que vamos utilizar.

[00:19] Não há problema nenhum você utilizar a do JavaScript padrão, mas a própria equipe do TypeScript sugere que você utilize o modificador private da própria linguagem TypeScript por questões de compatibilidade, e por aí vai.

[00:33] O que precisamos fazer? Primeira coisa é o seguinte: precisamos remover essa tralha, porque isso daqui é sintaxe do mais moderno do JavaScript. Mas quando removemos essa tralha, temos um problema, porque um getter não pode ter o mesmo nome de uma propriedade da classe. Entendeu? Esse getter aqui não pode ter um nome da propriedade encapsulado dentro da sua classe. O que eu vou fazer? Eu vou colocar um underline.

[01:19] No getter, você não precisa saber que a propriedade que guarda valor é underline. Esse underline é uma convenção antiga do JavaScript para indicar que algo é privado, que você não deveria acessar isso fora do domínio da sua classe. Fiz isso, está aí o meu código. Mas do jeito que está, o que vai acontecer?

[01:39] Toda vez que eu criar uma negociação ou a propriedade data vai ser acessível. Se eu chegar agora aqui, salvei o meu código, voltei para cá, para o "app", criei uma "negociação", se chegar para fazer negociação._data eu consigo alterar a data. Não pode, regredimos. Uma negociação após criada, não pode ter nenhuma das suas propriedades internas, data, quantidade e numero, alteradas.

[02:12] O que eu faço? Eu coloco private, o modificador private. Salvei. Quando eu vou em "app.ts", eu estou tentando acessar o data e diz que data é privado e não pode ser acessado por fora, ninguém pode atribuir, só a própria classe.

[02:36] O mais bacana é que se agora eu uso o autocomplete eu nem vejo o _ data como um valor válido no autocomplete, porque ela é privada, ela não tem acesso a ela. Essa é uma forma que você vai ver muito comum em projetos, em Angular, projetos com Vue JS, que usa TypeScript, inclusive React, que teve integração com TypeScript, essa sintaxe do private.

[03:07] Uma coisa legal: se eu salvo isso daqui e olho lá para saber o que o TypeScript gerou, eu vejo que ele gerou sem nada, sem aquela verborragia que tínhamos antes, porque antes para ele emular aquele comportamento do JavaScript, ele tinha que escrever um código completamente diferente.

[03:32] Você vai pensar: "Flávio, mas nada aqui está me garantindo em runtime que alguém possa alterar a sua negociação." Isso é verdade. O que o TypeScript te garante é que no fluxo do seu código você não vai ter nenhuma situação que alguém vai estar alterando uma propriedade privada ou que não deveria poder estar alterando.

[03:55] O código que vai ser gerado no navegador ele continua sendo um código desprovido de todos os recursos do TypeScript, nada impede de alguém abrir o seu console do navegador, tentar alterar o seu código, que ele vai conseguir.

[04:08] O que você está garantido é que na hora que você gerar o seu código para o navegador, o fluxo do seu código que vai rodar ninguém durante a compilação do seu código pode chegar lá e escrever uma sintaxe, como essa agora, chegar lá no TypeScript, vou lá em "app.ts", negociação._data = new Date(), sabemos que ele nunca vai gerar um arquivo JavaScript com essa instrução, o TypeScript bloqueia.

[04:43] Por mais que o código no final seja gerado um código em JavaScript desprovido de todos os recursos que vimos aqui do TypeScript, você está garantindo que durante o runtime você tem 100% de certeza que ninguém vai fazer, vai cometer uma gafe de acessar propriedades que não existem ou modificar o estado de uma classe sua. Está bom.

### Aula 2 - Identificando erro de compilação - Exercício

O TypeScript é um superset da ES2015, ou seja, além de suportar os recursos da linguagem desta versão, adiciona outros. Um exemplo é o suporte ao modificador private.

Marque a opção na qual há um erro de compilação do TypeScript de acesso indevido a uma propriedade privada.

Resposta:  

```JavaScript
class Pessoa {
    private nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
let pessoa = new Pessoa('Barney', 18);
pessoa.nome = 'Martin';
```

> Alternativa correta! Há um erro de compilação. A propriedade nome é declarada com o modificador private, dessa forma, apenas métodos da própria classe podem acessá-la.

### Aula 2 - Revisão - Vídeo 7

Transcrição  
[00:00] Vamos fazer uma revisão. Nós vimos que precisamos baixar o compilador TypeScript através do node do “npm”, após instalado não é suficiente só baixá-lo, precisamos criar o arquivo "tsconfig.json", o arquivo centro nervoso do compilador. Toda vez que você executar esse compilador, ele vai ler esse arquivo para saber o que ele tem que fazer.

[00:22] Em se tratando o que ele tem que fazer, o que precisamos dizer para o compilador? Precisamos dizer que onde estar a pasta com os arquivos TypeScript que ele vai ter que compilar, todos os nossos arquivos TypeScript ficaram dentro da pasta "app", se você escrever algum arquivo "ts" fora de "app", você não está seguindo o fluxo do treinamento. Está bom?

[00:42] Precisamos dizer através de CompilerOptions onde os arquivos compilados serão gerados. Estamos dizendo que qualquer arquivo modificado na pasta 'app" vai ser gerado na pasta "dist" com a extensão "js" compilado transformado para JavaScript.

[01:01] Também colocamos noEmitOnError para dizer que se o arquivo TypeScript que eu estou salvando tiver um problema de compilação, que não faz sentido gerar um arquivo "js" para ele, então nada vai acontecer, nenhum arquivo "js" vai ser gerado. Está bom?

[01:17] Uma outra coisa que vimos no projeto é que quando eu vou lá no meu "package.json" criamos dois scripts, o compile e o watch. O compile quando executo vai compilar, vai transformar meus arquivos "ts" para JavaScript na devida pasta, mas só que ficar rodando esse comando toda hora não é muito legal, por isso criamos o watch.

[01:44] Esse watch vai ficar escutando, qualquer modificação dentro da pasta "dist" e se você modificou qualquer arquivo "ts" lá dentro automaticamente ele vai gerar o arquivo dentro da pasta "js". Tudo maravilhoso, mas vimos que precisamos compartilhar a pasta "dist" no navegador utilizando o nosso Live Server e, ao mesmo tempo, precisamos reexecutar o compilador do TypeScript.

[02:10] Como conseguimos isso? Executando o comando start, porque esse comando start vai executar o npm run watch combinado com o do server. É tudo maravilhoso, vamos para o abraço, porque qualquer alteração feita no meu arquivo "ts" o compilador TypeScript vai escutar, vai gravar na pasta "dist".

[02:30] E o Live Server qualquer modificação na pasta "dist" feita, ele vai fazer o refresh no navegador, então conseguimos alterando em um único lugar todo nosso pipeline vai ser executado e o resultado será refletido no navegador.

[02:46] Nós vimos também que na hora que declaramos arquivos TypeScript, como o nome diz, o TypeScript vai gerar um monte de checagem no nosso código e uma das checagens que nós vimos é que se eu omito um parâmetro no construtor da minha classe ele vai me indicar que tem um erro, então, eu como programador, vou lembrar lá e vou verificar qual parâmetro que eu tenho que passar.

[03:07] Vimos que ele também me permite ter o auto complete mais apurado, isso significa que quando eu clico .data eu consigo ter esse auto complete das propriedades da minha classe.

[03:22] Outra coisa que vimos é que o TypeScript me permite, por exemplo, se eu cometo uma gafe na hora de digitar, como ele sabe que estou utilizando tipo "negociação", ele sabe que você tem que escrever o correto, que não existe, não tem ninguém declarado aqui para nós.

[03:39] Também nós vimos que ao definir o nosso modelo, que podemos abdicar do modo privado do JavaScript usando a sintaxe tralha e nós substituímos pela instrução private do TypeScript, isso significa que se eu estou utilizando o meu auto complete, a própria IDE é integrada com o TypeScript, não vai sugerir os atributos aqui como private, adotado como private.

[04:08] Se eu removo esse private e salvo, volto lá, ele vai aparecer aqui porque não disse que eu quero esconder ele do desenvolvedor, que eu quero tornar ele privado.

[04:21] Se você está curioso para saber qual é o tipo dele, quando você não coloca nada é mesma coisa que public, tem um bônus aqui. Se você clicar agora aqui, todo mundo que é public aparece aqui para você, só que o TypeScript me permiti omitir o tipo public e inferir que é public quando você não define nenhum modificador de acesso.

[04:49] Temos tudo no lugar no entendimento embrionário, básico de TypeScript para podermos agora construir nossa aplicação e, à medida que vamos construindo nossa aplicação, vamos vendo qual recurso do TypeScript pode ajudar a escrever um código lindo, sem defeito, garantido que vai rodar sem problema durante a runtime. Está bom? Vejo vocês no próximo capítulo.

### Aula 2 - O que aprendemos?

Nesta aula, aprendemos sobre:

- Download do TypeScript;
- Configuração do compilador e papel do tsconfig.json;
- Integração com scripts do Node.js;
- Modificadores de acesso private e public;
- Benefícios iniciais da linguagem TypeScript.

## Aula 3 - Benefícios da Tipagem estática

### Aula 3 - O controller de negociação - Vídeo 1

Transcrição  
[00:00] Agora que temos o entendimento inicial do TypeScript, a dinâmica de forças entre compilador, arquivo TS e temos nossa modelagem de negociação vamos começar a construir nossa aplicação.

[00:13] Eu vou dar o npm run start para ele rodar o compilador em tempo real o TypeScript e abrir a nossa aplicação. O que eu quero fazer? Nossa aplicação, quando eu clicar em incluir ela tem que conseguir pegar a data que o usuário incluiu, a quantidade, o valor e criar uma instância de negociação. Por enquanto só vamos criar essa instância e exibir no console do navegador.

[00:41] Será que o TypeScript nos ajuda, atrapalha, como é essa história toda? Vamos ver como fazemos isso tudo usando a linguagem em TypeScript. Primeira coisa que eu vou fazer aqui eu vou usar o conceito controller.

[00:55] Um controller vai uma classe, vamos criar uma instância dessa classe, ela que vai controlar a interação desse form e quando eu clicar em incluir é essa negociação controller que vamos criar que vai pegar os dados do formulário e criar o meu modelo.

[01:15] Esse controller vai ser a ponte entre as interações do usuário na minha página e a criação de modelos, ele vai ser o meio de campo. Ele vai ter uma dependência de elementos de UI, a minha data, a minha quantidade, o meu valor, e vai fazer a comunicação disso com o nosso modelo.

[01:35] Vou voltar para o meu projeto, dentro de "App" eu tenho a pasta "controllers > New File" e vou criar um novo arquivo que eu vou chamar de negociacao-controller.ts. Cuidado, não é “js” é “ts”. Eu tenho a minha negociação controller aqui. Vou começar porque vou querer usar isso em algum outro lugar da minha aplicação, por isso vou começar com: export class Negociacaocontroller {.

[02:09] O que essa negociação controller vai ter? Eu preciso, assim que ela for instanciada, ela tem uma referência para o input da data, da quantidade e do valor. De começo o que vou colocar é o seguinte: vou criar private inputData; private inputQuantidade; private inputValor; }.

[02:54] No momento quando o meu construtor for inicializado dessa classe, olha o que vou fazer: constructor() { this.inputData =. Precisamos ter um conhecimento de JavaScript, lá na pasta "dist" vou abrir o html, sabemos que o campo data tem o id data, que o campo valor tem o id valor e que o campo quantidade tem o id quantidade.

[03:23] Preciso usar o document querySelector para pegar essa função e colocar aqui no meu código. Vou fazer: document.querySelector, isso aqui é JavaScript puro não tem nada de TypeScript, vou pegar o elemento que tem data, this.inputQuantidade vai ser document.querySelector (‘#quantidade), para pegar o input da quantidade.

[03:53] E this.inputValor = document.querySelector (‘#valor’). Então: constructor() { this.inputData = document.querySelector('#data'); this.inputQuantidade = document.querySelector('#quantidade'); this.inputValor = document.querySelector('#valor'); }.

[04:05] Isso significa que no momento que eu criar a instância de negociação controller, se estou criando uma instância de negociação controller o constructor vai ser executado. Aí vou ao DOM e pego esses elementos do dom atribuo aqui nessas propriedades do construtor da minha classe.

[04:25] Porque quando eu chamar o método adiciona, adiciona(), esse método tem que primeiro fazer: console.log(this.inputData);. Só para sabermos se realmente pegamos essas funções quando eu chamar.

[04:54] Na verdade, sabemos que eu tenho que criar uma negociação pegando a data, a quantidade e valor. Inicialmente vou dar um console.log para vermos como as coisas se encaixam. adiciona() { console.log(this.inputData); console.log(this.inputQuantidade); console.log(this.inputValor); }.

[05:06] Por aqui não tem mistério nenhum, a única novidade olhando aqui de TypeScript para nós é o modificador private aqui. Quando a minha negociação controller for criada ela vai guardar o inputValor, inputQuantidade e o inputData em uma propriedade da classe e toda vez que eu chamar o método adiciona ele vai imprimir no console esses elementos do dom que eu peguei.

### Aula 3 - Integração com o formulário - Vídeo 2

Transcrição  
[00:00] Vou lá em "app.ts" e quem eu quero importar é o negociação-controller. Só que vou mostrar uma coisa legal para vocês aqui, um atalho. Porém, temos que tomar cuidado, olha o que vou fazer: vou dizer queconst controller = new NegociacaoController();. Quando eu escrevo, o Visual Studio Code já vai me dá um atalho para importar o negociação-controller.

[00:33] Vou clicar aqui, quando eu faço isso, ele fez o auto complete para mim. import { NegociacaoController } from './controllers/negociacao-controller'; const controller = new NegociacaoController();

[00:41] Atenção redobrada, fez o auto complete para mim e fez o import automático. Maravilhoso. Mas você precisa colocar js no final, senão isso não vai funcionar. import { NegociacaoController } from './controllers/negociacao-controller.js'; Se você já viu código escrito em Angular, Reach ou Vue JS, eles não precisam colocar o js porque o sistema de build deles por debaixo dos panos vai lá e coloca esse js para eles.

[01:09] Para nós precisamos colocar, por isso cuidado com esse auto import para que você não esqueça de colocar o js no final, senão o seu código não vai funcionar. É um atalho bem legal, vamos tentar usá-lo.

[01:27] Criei meu controller. A sacada é que todas as vezes que você submete o formulário, olha aqui eu tenho o form e aqui eu tenho o botão, button primary.

[01:39] Toda vez que você submeter esse formulário eu quero chamar o método adiciona do meu controller, para isso eu preciso pegar esse formulário que está na minha página e colocar no meu código. Vou fazer: const form = document.querySelector('.form');, peguei o form e sabemos que se é um form vou colocar: form.addEventListener.

[02:18] Olha como o TypeScript é legal, eu fiz o querySelector e ele está me dizendo que está retornando algo do tipo element, que ganhou um tipo implícito element e por ser isso entende que todo element tem o addEventListener.

[02:38] Se você submeter form, submit, vou pegar o evento, vou passar o evento, pego o evento e vou chamar controller.adiciona();. form.addEventListener('submit', event => { controller.adiciona(); }).

[02:59] Vamos recapitular, quando a minha aplicação inicia vai criar uma instância de negociação controller, ela tem dentro dela uma referência por input da quantidade, por input da data, input do valor. E eu peguei o form e disse que toda vez que você submeter esse form eu vou chamar o adiciona.

[03:22] Sabemos que se eu fizer isso com a minha página ela vai recarregar. Vou mostrar para vocês um problema que temos que resolver aqui básico do JavaScript, mas ele é a ponta do iceberg para mostrar uma coisa bem legal aqui em TypeScript. Salvei, não tive erro de compilação. Quando eu chamar agora o adiciona, vamos voltar ao navegador, abrir o console. Vou escolher uma data qualquer, uma quantidade, um valor e vou clicar em incluir.

[04:33] Quando eu olho no console, você vai ver que eu vou clicar em incluir, a minha página está fazendo refresh. Ela está até exibindo no console, mas está fazendo refresh e não pode porque sabemos que todo formulário quando você submete, ele faz um refresh da página.

[04:52] Como a nossa aplicação tenta copiar uma single page application, que é uma página que não recarrega durante o seu uso, eu preciso cancelar o evento padrão do formulário que é submissão, vou fazer: event.preventDefault();.

[05:14] O TypeScript já inferiu que form é do tipo event, é como se eu já tivesse colocado o event aqui, mas como é parâmetro tem que está entre parênteses. O TypeScript automaticamente, como ele sabe que esse daqui é uma Arrow Function para o addEventListener, ele automaticamente infere que form é um event do tipo submit e vai fazer o auto complete para mim.

[05:43] Vou salvar, vou voltar para o navegador, vou limpar e digitar qualquer coisa, clico em incluir. Está tudo bonito, tudo maravilhoso.

[05:58] Conseguimos ver aqui tranquilamente que os inputs que colocamos no incluir quando eu clico exibindo foram obtidos pelo dom e a minha página não faz refresh. Agora vamos construir a nossa negociação com a informação que o usuário colocou para nós.

### Aula 3 - Surpresa ao instanciar uma negociação - Vídeo 3

Transcrição
[00:00] Agora que estamos com tudo pronto, “com a faca e o queijo na mão”, vimos que quando eu coloco as datas, a quantidade, o valor e clico em incluir eu tenho acesso aos elementos do dom. Sabemos que todo input tem a propriedade .value, que eu tenho acesso ao valor desse input, eu tenho os insumos para criar a minha negociação. Vamos voltar para lá.

[00:27] Vou voltar para o meu código, eu não vou fazer mais isso daqui porque vou ter uma const negociao = new Negociacao. Presta atenção, cuidado. O Visual Studio, de novo, me deu a opção de importar diretamente aqui em cima do meu código de negociação. Eu vou fazer isso: const negociao = new Negociacao();, fiz.

[01:04] Ele não importou, mas se eu clicar no azul, aparece “negociação importar”, eu posso fazer isso. Ele vai automaticamente importar para você não ter que digitar o caminho, mas você não pode esquecer de colocar o js no final senão não vai funcionar.

[01:31] Agora eu vou passar os valores que a minha negociação está esperando. O primeiro é a data, ( this.inputData.value, this;inputQuantidade.value, this.inputValor.value); } e por fim tenho uma negociação criada Não há nenhum erro de compilação, parece que meu código vai funcionar em runtime.

[02:01] Agora vou fazer um console.log(negociacao);. Vou salvar, vou esperar compilar. Tudo bonito, tudo maravilhoso. Verifique se você colocou o js aqui. Vou voltar para o navegador, vou dar um clear aqui, tirar esse “preserve log” e dar um clear. Vou colocar qualquer data, quantidade e valor, vou clicar em incluir e vemos nossa negociação que foi criada.

[02:31] Felicidade? Não. Não é felicidade nenhuma é tristeza porque se você olhar essa negociação, primeiro, a data tinha que ser um date e não essa string. Segundo, a quantidade está como string, o valor está como string. Isso faz parte da definição da nossa classe, eu espero que a quantidade seja um número, espero que o valor seja um número, espero que a data seja uma data.

[02:59] Se eu quiser fazer alguma operação matemática para somar a quantidade, o valor de uma negociação com a outra eu vou ter um bug porque duas strings somadas viram concatenação, não vai funcionar conforme o esperado.

[03:13] O que aconteceu? Por que o TypeScript não está brilhando aqui? Não está brilhando porque o nome já diz: TypeScript, faltou dizermos quais são os tipos dessas propriedades da minha negociação para que o TypeScript me diga que não posso colocar string porque não fará sentido.

[03:34] É isso que vamos entender no próximo vídeo, como é que “tipamos” a nossa classe negociação utilizando o recurso da tipagem estática do TypeScript para evitar que na hora que eu esteja escrevendo esse código ele me avise que vai dar problema. Como eu faço isso? Vamos lá ver.

### Aula 3 - O tipo implícito any - Vídeo 4

Transcrição  
[00:00] O que aconteceu? Não estamos usando a linguagem TypeScript. Deixa eu explicar. Eu vou lá para negociação, vou passar o mouse por cima de data, qual é o tipo que o Visual Studio Code está inferindo a partir do compilador TypeScript?

[00:19] Any, quantidade, valor, any. Você sabe que any em inglês é qualquer coisa, isso significa que a minha negociação, o construtor da minha negociação está aceitando qualquer coisa que você passar. Se você passar um abacaxi como data esse abacaxi vai entrar. Eu não tenho checagem nenhuma.

[00:47] O TypeScript adota o tipo any implicitamente. Isso é legal porque você consegue escrever um código rápido que você não precisa pensar muito, mas isso causa problemas no seu código como acabamos de ver. O que vamos fazer? A primeira coisa antes de tiparmos esse construtor, dizer que data tem que ser sempre date, quantidade tem que ser sempre número e valor tem que ser sempre número.

[01:10] Eu vou alterar uma configuração no compilador que eu sugiro quando você está começando um projeto do zero, você ativar. É que é para dizer para o TypeScript para ele não adotar o tipo any implicitamente, só se você por algum motivo do seu código você quiser que aquele campo seja any, por algum motivo de compatibilidade, ou seja o que for.

[01:34] Como fazemos isso? Vamos lá no meu "tsconfig", estou dentro do meu “tsconfig” tenho uma propriedade logo aqui que é "noImplicityAny" e eu vou colocar aqui true. Se segurem na cadeira porque quando eu ativar isso, o nosso programa vai parar de funcionar. Salvei. Já começou a ter erro de compilação em vários lugares. Vamos começar por partes.

[02:07] Vou lá para o meu "negociacao.ts" e vamos ver o que precisamos resolver. Já está mostrando aquele ponto que deu problema no construtor. O parâmetro data tem um tipo implícito any, eu tenho que dizer qual é o tipo correto. Qual é o tipo correto? Eu quero que seja date. Qual é o tipo da quantidade? Aí você sempre faz assim: quantidade: number. Qual é o tipo valor? valor: number. constructor(data: Date, quantidade: number, valor: number).

[02:35] Se você vem de linguagens como Java o tipo vem antes, aqui em TypeScript vem depois. Estou dizendo que na data só vai entrar date, quantidade number, valor number. E como esses valores aqui estão recebendo no construtor o TypeScript consegue inferir porque se você recebeu um date e aqui é o momento que você está atribuindo o valor a data ele consegue entender, se eu passo o mouse, que o valor é do tipo number, quantidade e date.

[03:11] Para ficar claro garanta, coloque o tipo aqui também: private _data: Date; private _quantidade: Number; private _valor: Number;. Quem está olhando a definição da sua classe vai ver number, o que não pode é que se aqui é number e aqui é string não vai encaixar, por isso você faz isso. E temos como simplificar isso, mas ainda não é a hora de lidar com simplificação é a hora de entendermos os fundamentos.

[03:37] Tipei o negociação, salvei. Ainda tem três erros que estão acontecendo lá no meu negociacao-controller. Vou lá em negociacao-controller. Faz sentido esse erro que estamos vendo? Faz, porque estou declarando uma propriedade da classe e não estou dizendo qual é o tipo.

[04:00] Inclusive, o TypeScript está te dizendo para evitar usar input. Como resolvemos isso? Vamos resolver agora o problema do negociacao-controller em um vídeo separado porque tem bastante coisa para vermos.

### Aula 3 - Revisando o tipo any - Exercício

Nos últimos vídeos, conferimos algumas situações envolvendo o tipo any do TypeScript. Marque apenas as opções verdadeiras sobre esse tipo:

Alternativa correta  
Por padrão, o tipo any é assumido automaticamente pelo TypeScript quando não definimos o tipo das nossas variáveis.

> Por exemplo, escrever apenas const nome; é o mesmo que escrever const nome: any; para o TypeScript.

Alternativa correta  
É possível desativar o tipo implícito any passando uma configuração especial para o compilador no arquivo tsconfig.json. Isso fará com que o compilador emita um erro em todos os locais que o tipo any foi adotado implicitamente.

> A configuração do tsconfig.json é, dentro de "compilerOptions", adicionar a propriedade "noImplicityAny": true.

### Aula 3 - Ajustando nosso controller - Vídeo 5

Transcrição  
[00:00] Como resolvemos esse problema de compilação resultante da ativação do noImplicitAny? A maneira mais fácil é você chegar aqui e dizer que o tipo dele é any, eu estou explicitando que o tipo dele é any. private inputDate: any; private inputQuantidade: any; private inputValor: any;.

[00:22] Você pode perguntar "Flávio, é tão simples assim?" É, mas qual é a ideia? A ideia é você evitar o tipo any. A primeira coisa é que como estou utilizando o tipo any qualquer coisa pode ser qualquer coisa e se eu tentar usar o autocomplete, se eu chegar aqui this.inputValor., por exemplo, eu não tenho nenhuma sugestão do compilador da IDE com base nas informações do TypeScript do que eu posso fazer com esse valor. Resolveu, mas resolveu meia boca.

[00:58] Vamos colocar um tipo que faça sentido. Uma coisa importante para ressaltarmos aqui para vocês ficarem espertos, é que esse tipo date que eu coloquei, esses tipos number, o TypeScript já vem com eles, já vem dentro dele para a linguagem JavaScript todos os tipos padrões da linguagem JavaScript.

[01:19] É por isso que tem um tipo date, tem um tipo number e por debaixo dos panos todos esses tipos vão me dar acesso a todos os métodos e propriedades que fazem sentido para esse tipo.

[01:32] Tanto isso é verdade que, eu chego no inputData:, this.inputData., não tem nada aqui, nenhum autocomplete que eu mostrei para vocês e agora se eu volto lá para negociação: this._data. é date quando eu dou ponto ele mostra todos os métodos relacionados a date.

[02:02] Porque o TypeScript tem certeza que só pode entrar um date aí em tempo de compilação. Isso significa que em runtime, se você não fizer nenhuma mágica para tentar colocar algo diferente lá dentro, você só vai ter um date.

[02:18] Voltando a falar nos tipos do TypeScript, o TypeScript também vem com tipos para elementos do dom. Essa data que estamos trabalhando aqui é do tipo html input element. Faz sentido porque o date, a quantidade e o valor se eu olho lá no meu html eles são input number, e input date, type date.

[02:52] Como é que fazemos isso? Vamos voltar lá para a nossa “negociação controller”, vou dizer que data, quantidade e valor são do tipo HTMLInputElement. Não precisa importar porque isso aqui já é padrão do TypeScript.

[03:16] Eu salvei, quando eu salvo estou com meu ambiente rodando, eu ainda tenho um erro de compilação. Se tivéssemos isso tudo bonito desde o início não cairemos naquele problema que tivemos de colocar strings dentro do nosso objeto, da nossa instância de negociação.

[03:36] Se você vai descendo aqui no seu código ou você clica na tecla "Ctrl" e clica, ele está reclamando. O que ele está reclamando?

[03:45] Ele está reclamando que agora que ele sabe que esse input é um html element, todo html element eu tenho agora o autocomplete: addEventListener, value. Sabemos que de um html input element, de um elemento do dom do tipo input, eu pego o valor através de .value. Olha que lindo, o TypeScript está me dizendo que todo input .value, o retorno dele é uma string, você está tentando passar uma string como se fosse um valor de date.

[04:23] O compilador está nos avisando, como eu tipei quantidade como html input element, ele está me lembrando que eu pegar data que é value. Porque todo input quando você dá .value é sempre uma string.

[04:39] Eu tenho que arrumar algum jeito de converter antes de passar para negociação, um input value aqui como um date. E também para cá, quando eu resolver esse problema aqui vai pular para essa linha daqui porque value é uma string e o nosso construtor da quantidade se vermos da negociação, é number.

[05:05] Precisamos fazer uma pré-conversão que graças ao TypeScript se tivéssemos fazendo todo ambiente configurado desde o início ele já me daria a dica que não é assim, que eu tenho que converter esses dados do elemento do dom para que seja possível passar para instância. É isso que vamos fazer no próximo vídeo.

### Aula 3 - Revisando código TypeScript - Exercício

Marina configurou seu arquivo tsconfig.json da seguinte maneira:

```JavaScript
{
    "compilerOptions": {
        "target": "es6",
        "outDir": "app/js",
        "noEmitOnError": true,
        "noImplicitAny": false
    },
    "include": [
        "app/ts/**/*"
    ]
}
```

Em seguida declarou a seguinte classe:

```JavaScript
 class Controller {

   private inputPreco: HTMLInputElement;

    constructor() {
        this.inputPreco = document.querySelector('#preco');
    }

    adiciona(event) {

        event.preventDefault();

        alert(this.inputPreco.value);
    }
}
```

Marque as alternativas verdadeiras a respeito da classe Controller:

Alternativa correta  
O código compila e é um código TypeScript válido.

> Apesar do parâmetro event não estar tipado com o tipo Event, o código compila, pois em seu arquivo tsconfig.json Marina usou "noImplicitAny": false. Nem era necessário ela ter definido que a propriedade é false, pois esse é o padrão. Um erro de compilação aconteceria se ela tivesse usado "noImplicitAny": true.

### Aula 3 - Convertendo dados de entrada - Vídeo 6

Transcrição  
[00:00] Vamos fazer essa conversão. A primeira coisa que eu tenho que converter é essa string que representa uma data um objeto do tipo date. Vou fazer: const date = new Date();. Se eu faço isso ele vai criar uma data na data de hoje, eu não quero isso eu quero que ele crie uma data respeitando o que o usuário digitou.

[00:23] Para fazer isso precisamos passar uma string, por exemplo, nesse formato: ano, mês e dia separados por vírgula. O construtor de date entende e cria uma data bonita representando essa data. Porém, quando estamos lendo do teclado, do value, do meu campo, da data, ele vem com hífen.

[00:47] O que eu preciso fazer? Eu preciso substituir todos os hifens por vírgula e então passar a string para o date. Para fazer isso vou criar uma expressão regular, sabemos que toda expressão regular é feita com “barra barra”, “//”. O que vou dizer?

[01:05] Encontra tudo que é hífen, mas não quero que você encontre só o primeiro não eu quero que você encontre todos, o primeiro, o segundo, o terceiro, o quarto, todas as ocorrências eu coloco um g de global. const exp = /-/g;

[01:15] Olha que bacana, se eu passo o mouse aqui em cima, de novo, como estou atribuindo essa variável pela primeira vez o TypeScript entende que essa é uma expressão regular. Se é uma expressão regular eu consigo chamar os métodos exp.test da expressão regular e por aí vai.

[01:38] Criei a expressão regular e agora vou dizer que o date vai ganhar o valor de this.inputData.value., como value é uma string ele também me mostrou todos os métodos relacionados da string e vou usar o replace.

[01:54] O replace pode receber como parâmetro a primeira expressão regular e segundo o que você quer colocar no lugar quando a expressão regular encontrar o que você está procurando. Eu vou pedir para substituir com vírgula. cont date = new Date(this.inputData.value.replace(exp, ',')); No construtor estou passando o resultado de replace e vai procurar todo mundo que tem hífen e vai substituir por vírgula e criar o meu date.

[02:22] Segunda linha, eu vou ter a quantidade que conseguimos converter para inteiro através de parseInt(this.inputQuantidade.value);. E const valor eu vou usar o parseFloat porque esse valor pode ter decimais, vai ser const valor = parseFloat(this.inputValor.value);.

[02:51] Agora que eu tenho todos os valores convertidos eu vou trocar aqui para o meu construtor, vou apagar aqui, vou passar. const negociacao = new Negociacao(date, quantidade, valor);.

[03:08] Se eu pego agora aqui e coloco o date por último, const negociacao = new Negociacao(quantidade, valor, date);, vai ter erro de compilação porque estou tentando passar um number para o primeiro parâmetro do meu construtor que é um date. O TypeScript também te ajuda nisso.

[03:20] O meu código está compilando, vou salvar. Nenhum erro. Volto para o navegador. Vou lá e coloco: 1/11/1111, coloco a quantidade 2 e o valor 111, clico em "incluir". Está lá perfeito, a minha data com o objeto data aqui representado, a quantidade numérica e o valor numérico.

[03:46] Vou colocar aqui uma 12 para vermos aqui. Fiz 12 aqui, coloquei o decimal. Está convertido, está tudo bonito, temos certeza que a nossa negociação tem os tipos que estamos esperando, mas podemos melhorar mais um pouco. É isso que vamos ver no próximo vídeo, é só questão de organização. Vamos ver no próximo vídeo como organizamos isso aqui melhor.

### Aula 3 - Convertendo uma data - Exercício

Você está contruindo uma classe JavaScript e, em um de seus métodos, você precisa criar um objeto Date a partir de uma string. Como você faria isso?

Alternativa correta  
const date = new Date('2021,10,20');

Alternativa correta! A string passada pelo construtor deve ter o ano, mês e dia separados por vírgula.

### Aula 3 - Organizando melhor nosso código - Vídeo 7

Transcrição  
[00:00] Se você está lendo o método adiciona, o que você quer ler? Se você começar a ler esse método você vai ver expressão regular, pegou date, pegou quantidade, converteu valor para no final criar uma negociação. Se o adiciona a ideia é criarmos uma negociação, podemos deixar o nosso código um pouco mais claro.

[00:19] Para isso vou criar um método criaNegociacao();. Esse método criaNegociacao eu vou mover esse código que cria a negociação para dentro dele. E agora que eu movi para dentro dele vou dar return Negociacao, se eu passo em cima sobre o nome do método vemos que o método retorna uma negociação do tipo negociação e agora vou fazer o seguinte: const negociacao = this.criaNegociacao();

[01:09] Fica mais claro eu isolando isso. Vou salvar. Volto para o navegador, vou criar a minha negociação, clico em "incluir" e está lá bonito, gerou a minha negociação.

[01:28] Agora uma coisa que estamos falando aqui para organizar melhor o nosso código é o seguinte, vimos que é uma boa ideia tipar variáveis, trabalharmos com tipos, mas também podemos colocar tipos em retorno de métodos. Se eu passar o mouse em cima do adiciona, você vai ver que o adiciona o TypeScript está dizendo que o tipo de retorno desse método é void porque ele não retorna nada.

[01:56] Se eu passo o mouse aqui em cima do criarNegociacao, qual o tipo de retorno? O JavaScript é inteligente o suficiente para entender que como você está retornando uma negociação, ele entende que o tipo de retorno do criarNegociacao é uma negociação.

[02:13] Tanto é verdade que se eu disser que negociação é uma string vou ter um erro de compilação porque o string eu não posso atribuir uma negociação no tipo string, porque estou forçando o tipo string aqui.

[02:28] É uma boa prática. Eu sugiro que não peguemos carona nessa inferência do TypeScript, vamos tipar os retornos, os métodos. Já que adiciona não retorna nada, vamos colocar void. Se criarNegociacao retorna negociacao, deixa isso mais claro.

[02:56] Porque tem uma pegadinha, quando você está criando o método, olha o que eu poderia ter feito, eu poderia ter tirado o retorno daqui, eu poderia ter escrito o método ao invés de retornar a negociação, eu podia retornar um valor.

[03:12] O que esse método está retornando agora? Number. É porque eu errei, não era para retornar valor era para retornar negociação. Se você já começa tipando o seu método quando você retornar algo que antes de você implementar o método você acabou de implementar algo que não condiz com o tipo do retorno, você já ver um erro. O que eu fiz? Não é valor é negociação, vou retornar a negociação.

[03:43] Eu sugiro vocês fazerem isso. Vai começar a escrever o método a primeira coisa eu sei que quando eu terminar de executar esse método ou ele não vai retornar nada, ou ele vai retornar uma negociação, você já coloca o tipo. E olha que legal, o tipo está aqui e eu não dei retorno nenhum, o TypeScript está falando que não retornei nada e se não retorno nada tenho que retornar um valor ou coloco criarNegociacao como void, já que void não retorna nada.

[04:11] Você está blindado antes de escrever o seu método de que você tem certeza que você não vai comer uma gafe e que você sempre vai retornar uma negociação como retorno. E se eu omitir o retorno de novo o TypeScript vai me dizer que eu esperava retornar uma negociação, mas não retornou. Vamos usar isso daqui, vou tipar todos os métodos da nossa aplicação. Negociação, void, constructor não tipamos.

[04:43] Vou voltar para a negociação. Meu get implicitamente está retornando um date, mas vou colocar explicitamente que retorna Date, que quantidade retorna number, que valor retorna number e que o volume retorna number. Se eu tivesse cometido um erro aqui, o TypeScript iria me indicar. Vamos fazer isso, evitar o tipo any. Você só usa o tipo Any se realmente for preciso, tipa as propriedades de classe e os métodos que recebem os constructor.

[05:25] Se for uma variável que você está criando você pode deixar uma variável dentro de um método, você pode deixar que o TypeScript infira esse tipo de variável para você. Parâmetro de método, parâmetro de constructor, retorno de método e propriedades de classe vai lá e coloca o tipo que você está esperando.

[05:42] Mesmo que você queira usar any você vai lá e diz que você quer usar any. Fica essa dica. Vou salvar e tudo continua funcionando, está uma beleza. Vamos para o próximo assunto.

### Aula 3 - Limpando o formulário - Vídeo 8

Transcrição
[00:00] Antes de irmos para o próximo capítulo, vamos fazer uma melhoria na nossa aplicação. O que está acontecendo? Eu vou lá no meu formulário, eu digito uma data, digito uma quantidade, digito um valor, clico em "incluir". Em teoria eu teria que incluir em uma tabela, fazer alguma coisa, mas estamos exibindo no console.

[00:20] O esperado é que se você acabou de incluir, vamos limpar o formulário e colocar o focus diretamente no campo da data para que o usuário já possa sair digitando e cadastrando uma nova negociação. Como vamos fazer isso? É JavaScript puro, mas o TypeScript nos ajuda a lembrar muita coisa sem precisarmos ir lá consultar a documentação do JavaScript e por aí vai.

[00:47] Eu vou criar um método limparFormulario(), esse método vai ser void, não vai fazer nada. Qual é a ideia? Ele não está pronto ainda, mas eu sei que após exibir a minha negociação, assim que eu criei uma negociação, exibe em uma tabela ou exibe no console.log eu quero limpar formulário. this.LimparFormulario();

[01:23] Esse método vai ter que chegar aqui, pegar cada input começando pelo data, this.inputData.value = ' ' e vou limpar, vou passar uma string em branco. Vou chegar no segundo this.inputQuantidade.value = ' '; e vou passar uma string em branco.

[01:43] Olha só o TypeScript me ajudando, esqueci de colocar value e ele está dizendo que string não pode ser atribuído para html input element. Vou colocar agora this.inputValor.value - ' '; também vai ser uma string em branco.

[02:00] Eu sei que após limpar todos esses métodos o inputData eu quero colocar o focus. Para fazer o focus no elemento do dom você coloca .f e como o TypeScript sabe que focus é um elemento do dom já te mostra o método focus, this.inputData.focus();

[02:22] Toda vez que eu adicionar uma negociação eu vou primeiro exibir no console, depois eu limpo e vai ser isso. Vou salvar, meu método é void, por isso não retorna nada, vou salvar. Vou voltar para o navegador, deu refresh, vou digitar aqui, vou clicar em "incluir". Cliquei, exibiu, limpou meu formulário e já colocou o foco no data. Muito melhor que a experiência do usuário.

[02:57] O que eu queria ressaltar aqui é que como esse input data, o input valor são elementos do dom o TypeSript sabe, porque você tipou com html input element, ele sabe que inputData é um elemento dom por isso te dá um monte de opções, até querySelector. Ele vai te dar todos os métodos e propriedades desse elemento do dom.

[03:21] Está chegando a hora de puxarmos um pouco mais no curso e vamos lá, vamos continuar. Vamos para uma revisão no próximo vídeo.

### Aula 3 - Revisão - Vídeo 9

Transcrição  
[00:00] Agora vou fazer uma revisão. A primeira coisa que vimos é que na nossa “negociação controller” quando definimos propriedades de uma classe, se não colocamos o tipo essa classe ganha implícito any. Ou seja, o TypeScript não sabe no momento da declaração dessa propriedade da sua classe qual é o tipo dessa propriedade, ele adota o tipo any.

[00:29] O problema do tipo any é que você pode passar qualquer valor para dentro desse tipo que a aplicação vai continuar aceitando, você volta a ter mais ou menos o mesmo comportamento do JavaScript padrão.

[00:42] Porque o JavaScript padrão não faz a crítica de tipos. O que vimos é que a boa prática é você em propriedades de uma classe você definir um tipo da propriedade da classe, definir tipos também não só da propriedade da classe, mas também parâmetros de métodos.

[01:03] Se o meu constructor da minha classe recebe parâmetros, é uma boa prática eu explicitar o tipo. Vai deixar claro que se o desenvolvedor tentar passar algum tipo diferente daquele esperado eu vou ter um erro em tempo de compilação.

[01:18] Vimos também a ideia de ativar no nosso compilador, se voltarmos lá no centro nervoso do TypeScript, o "tsconfig.json", a boa prática de começarmos um projeto do zero é colocar "noImplicitAny": true. Isso significa que o TypeSript vai te forçar a colocar any ou colocar um tipo da sua escolha na declaração de propriedades de classe e por aí vai.

[01:47] Vimos também que o TypeScript eu não preciso, nesse caso, na hora que estou criando uma instância de negociação eu não preciso colocar o tipo porque quando a variável está existindo no momento e eu faço uma atribuição, o TypeScript consegue inferir o tipo.

[02:02] Diferente do meu controller porque aqui eu não tenho nenhuma atribuição inicial para esse método. O TypeScript não tem como, se eu fizer isso daqui, deixar assim, o TypeScript não sabe qual é esse valor porque a atribuição está sendo feita no constructor.

[02:23] Se eu chegar aqui e fazer ‘nome’, em string, eu não precisaria colocar o tipo string aqui, porque como estou atribuindo valor nesse momento que a minha instância de classe é criada, ele infere que esse método é do tipo string. Fazer isso daqui é perda de tempo, você pode fazer também, mas só se você sentir necessidade de colocar isso porque a ideia do TypeScript é você ter tipagem estática e tentar escrever um pouco menos.

[03:00] No caso do html input eu não tenho aqui como saber qual é o valor inicial dessa propriedade, por isso que eu tive que colocar o tipo porque a atribuição não está sendo feita através do constructor. Vimos também que métodos é interessante colocarmos o tipo de retorno do método, se você vem em linguagens como Java normalmente o tipo é antes, é na declaração do nome do método.

[03:33] Vimos que quando um método não retorna nada colocamos void e por aí vai. Resumindo as boas práticas: começou um projeto do zero noImplicitAny, vai declarar propriedades de uma classe, define o tipo logo. Se você não sabe o tipo ou se você ainda quer utilizar o any nada te impede de você chegar lá e explicitar o tipo any.

[03:55] Mas você sabe que ao utilizar o tipo any eu perco todo auto complete, toda a checagem do TypeScript porque se esse método é qualquer coisa o TypeScript não consegue inferir, porém se esse método for um html input element agora a coisa muda de sentido, eu tenho o typecheckin, eu posso verificar tudo o que eu posso fazer com essa propriedade.

[04:20] Por fim, limpamos o nosso código, isolamos o código que cria a negociação do próprio método, o código que limpa o formulário é o próprio para que o método adicione esse método que temos, mais fácil de ler. Vamos para o próximo capítulo, lá a coisa começa a ficar um pouco mais puxada, mas como esse curso é o curso de fundamentos vou pegar leve com vocês. Vamos lá.

### Aula 3 - O que aprendemos?

Nesta aula, aprendemos sobre:

- O tipo implícito any;
- Benefícios da tipagem estática;
- Mais configurações do compilador tsc;
- Retorno de método explícito;
- Conversão de valores da interface do usuário.

## Aula 4 - 

### Aula 4 -  - Vídeo 1
### Aula 4 -  - Vídeo 2
### Aula 4 -  - Vídeo 3
### Aula 4 -  - Vídeo 4
### Aula 4 -  - Vídeo 5
### Aula 4 -  - Vídeo 6
### Aula 4 -  - Vídeo 7
### Aula 4 -  - Vídeo 8
### Aula 4 -  - Vídeo 9
