# Desafio de ReactJS do DevMozao

Este repositório tem como propósito realizar o [desafio de ReactJS do DevMozao](https://github.com/devMozao/desafio-reactjs), que, apesar de não realizar mais feedbacks, eu achei uma ótima oportunidade de aprender e aplicar ReactJS com TypeScript.

## 📌 Objetivo do desafio

Construir uma aplicação web em ReactJS que busque o perfil de desenvolvedores na API pública do GitHub e exibir os seus dados em uma página de perfil.

## 🤔 Como usar

Para instalar e rodar o projeto, é necessário o [Node.js v16.13.1](https://nodejs.org/en/) e o gerenciador de pacotes [yarn](https://yarnpkg.com/).

Ao instalar as ferramentas necessárias e o projeto em sua máquina, é só rodar os seguintes comandos para respectivamente, instalar as dependências do projeto, rodar o ambiente de desenvolvimento e rodar o build da aplicação:

```bash
# Instale as dependências do projeto
$ yarn install

# Rode o ambiente de desenvolvimento
$ yarn start

# Realize o build da aplicação
$ yarn build
```

## 🤖 Tecnologias utilizadas

Como proposto pelo desafio, utilizei o **ReactJS**, e junto à ele optei pelo **TypeScript**, pois assim seria uma oportunidade de aprender a integrar TS ao React.

Como boilerplate, utilizei o **create-react-app (CRA)**, já que com ele vem a estrutura pronta, com algumas dependências que ajudam no desenvolvimento, tendo apenas que mudar algumas coisas em relação ao **eslint** e **prettier**.

Ao longo da aplicação também utilizei o **styled-components** para a estilização e componentização dos elementos, e o **react-router-dom**, para navegar entre as páginas.

## 📂 Estrutura do projeto

O projeto contém todo seu código dentro do diretório ``src``, onde está localizado os principais arquivos como o ``App.tsx``, ``index.tsx`` e o ``routes.tsx``, e outros diretórios, como o ``components``, ``hooks``, ``pages``, ``style`` e ``util``.

O arquivo ``App.tsx`` contém o componente que provê estilização global às rotas e os temas light e dark com o ``ThemeProvider`` do ``styled-components``, o ``index.tsx`` renderiza o App no ``public/index.html`` na div com id root.

No arquivo ``routes.tsx`` temos as rotas do projeto, que utiliza do ``react-router-dom`` para gerenciar as duas rotas, ``/`` e ``/profile/:id``, com suas respectivas páginas, ``HomePage`` e ``ProfilePage``.

No diretório ``pages``, temos ambas as páginas, divididas em duas pastas cada uma com dois arquivos, o arquivo do componente da página, ``<Nome>Page.tsx``, e o arquivo da estilização da páginam, ``style.tsx``. Como estou utilizando o ``styled-components``, os componentes utilizados em cada página estão definidos no ``style.tsx``, e componentes compartilhados entre ambas as páginas, estão no diretório ``componentes``.

No diretório ``components``, como dito anteriormente, contém componentes compartilhados entre ambas as páginas, divididos de forma similar ao diretório ``pages``, com dois arquivos dentro de um diretório com o nome do componente, ``<NomeDoComponente>.tsx`` e ``style.tsx``.

No diretório ``hooks``, há hooks customizados para a utilização em toda a aplicação.

No diretório ``styles``, há estilizações que são aplicadas globalmente no arquivo ``GlobalStyle.ts``, o arquivo ``themes.ts`` com os temas light e dark com suas respectivas cores para cada parte das páginas e componentes, e o ``styled.d.ts``, que contém a tipagem desses temas.

No diretório ``util``, há códigos utilitários, que podem ser desaclopados de onde são utilizados para serem usados amplamente em toda a aplicação.

```bash
.
├── LICENSE     
├── README.md   
├── package.json
├── public
│   ├── favicon.ico  
│   ├── index.html   
│   ├── logo192.png  
│   ├── logo512.png  
│   ├── manifest.json
│   └── robots.txt   
├── src
│   ├── App.tsx      
│   ├── components        
│   │   ├── Search        
│   │   │   ├── Search.tsx
│   │   │   └── style.ts  
│   │   └── Switch
│   │       ├── Switch.tsx
│   │       └── style.ts
│   ├── hooks
│   │   └── usePersistedState.ts
│   ├── index.tsx
│   ├── pages
│   │   ├── HomePage
│   │   │   ├── HomePage.tsx
│   │   │   └── style.ts
│   │   └── ProfilePage
│   │       ├── ProfilePage.tsx
│   │       └── style.ts
│   ├── react-app-env.d.ts
│   ├── routes.tsx
│   ├── style
│   │   ├── GlobalStyle.ts
│   │   ├── styled.d.ts
│   │   └── themes.ts
│   └── util
│       └── periodBetweenDate.tsx
├── tsconfig.json
└── yarn.lock
```

