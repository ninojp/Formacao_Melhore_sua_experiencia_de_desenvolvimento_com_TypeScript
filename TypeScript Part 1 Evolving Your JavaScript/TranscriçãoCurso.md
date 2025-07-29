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

## Aula 3 - 

### Aula 3 -  - Vídeo 1
### Aula 3 -  - Vídeo 2
### Aula 3 -  - Vídeo 3
### Aula 3 -  - Vídeo 4
### Aula 3 -  - Vídeo 5
### Aula 3 -  - Vídeo 6
### Aula 3 -  - Vídeo 7
### Aula 3 -  - Vídeo 8
### Aula 3 -  - Vídeo 9
