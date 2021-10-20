 <h1 align="center"> Projeto Vitrine Virtual </h1>

 <p> O projeto está dividido em 3 partes: app, client e server. </p>
 <p> No Server foi configurada a API, utilizando GraphQL e Apollo Server com as regras de negócio relacionadas a Campanha e Login. Uma rota alternativa foi criada para upload de imagens para o AWS S3.</p>
 <p> O Client é a interface de administrador onde são realizadas as ações das campanhas (criação, edição e exclusão), fazendo uso do Redux como gerenciador de estado e Redux-Saga para gerenciamento das chamadas assíncronas. Para a conexão do front-end web com o backend, foi  utilizado o Apollo Client.</p>
 <p> No App, com foco na plataforma Android, é apresentado o carrossel onde as campanhas são visualizadas pelos clientes durante o período cadastrado. Também utilizando Redux, Redux-saga e Apollo Client.</p>


<h3> Objetivos do projeto: </h3>

- [x] Utilizar tecnologias e arquitetura mais próximas ao MCM

- [x] Construir uma api com GraphQl e Apollo Server

- [x] Utilizar fluxo do github, com dailys revisão de código e divisão de branch por feature

- [x] Contruir uma ferramenta que permite manter Campanhas

- [x] Contruir uma ferramenta que permite visualizar as campanhas

<h3> Tecnologias e pacotes utilizados: </h3>

<h4> App </h4>

- Typescript
- React Native
- Redux
- Redux-Saga
- Apollo Client
- Styled-Components
- React Native Snap Carousel
- Navigation
- Jest

<h4> Client </h4>

- Typescript
- React
- Redux
- Redux-Saga
- Apollo Client
- Axios
- JWT
- Styled-Components
- Jest

<h4> Server </h4>

- Typescript
- Node
- Express
- Apollo Server
- GraphQl
- TypeORM
- Type GraphQL
- MongoDb
- AWS-SDK
- Multer / Multer-S3
- JWT
- bcrypt
- Jest
- Supertest

<h3> Como instalar na sua máquina? </h3>

- É preciso que em sua máquina tenha [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), [NodeJs](https://nodejs.org/en/download/) e [Android Studio](https://developer.android.com/studio?hl=pt)
- Clone o repositório na sua máquina com `git clone https://github.com/alinemartinsgh/vitrine_virtual.git`

- Entre na pasta root `cd vitrine_virtual` e instale as dependencias com
  `yarn`
- Entre na pasta `cd vitrine_virtual/server` e instale as dependencias com
  `yarn`. Inicie com `yarn start`
- Entre na pasta `cd vitrine_virtual/client` e instale as dependencias com
  `yarn`. Inicie com `yarn start`
- Entre na pasta `cd vitrine_virtual/app` e instale as dependencias com
  `yarn`. Faça o build para o emulador com `yarn android` e inicie a aplicação com `yarn start`

<h4> Considerações finais: </h4>

Sempre existem itens a corrigir e códigos para melhorar, por isso agradecemos qualquer crítica nesse sentido! Até a próxima o/

Autores: [Aline](https://github.com/alinemartinsgh) e [Leonardo](https://github.com/Leonardo-Antunes)
