# Hero Finder Project

Este projeto tem como finalidade buscar e exibir as informações dos heróis da Marvel usando uma API disponibilizada pela própria.

## Arquitetura e tecnologias utilizadas

A opção de arquitetura para esse projeto foi a de módulos que funcionam independentes, importando para si todas as dependências que devem ser utilizadas.

A linguagem utilizada foi TypeScript que possui fortíssima tipagem.

Para o frontend foi utilizada a combinação de [React](https://pt-br.reactjs.org/) e [Next.js](https://nextjs.org/). Para gerenciar os estados da aplicação, foi utilizado [Redux](https://redux.js.org/).

Para estilização dos componentes foi escolhido o framework [Semantic UI](https://react.semantic-ui.com/) que possui um bom suporte ao React. Foi utilizado também o [Tailwindcss](https://tailwindcss.com/), uma biblioteca utilitária para CSS.

## Como instalar o projeto?

### 1. Variáveis de ambiente

Para usar a aplicação deve-se primeiro criar um arquivo na raiz do projeto para configurar as variáveis de ambiente da aplicação.

Pode-se configurar utilizando o comando abaixo que irá copiar todas as configurações iniciais:

```bash
cp .env.local.example .env.development.local
```

Deve-se configurar as variáveis com as respectivas chaves da [Marvel API](https://developer.marvel.com/) que podem ser obtidas seguindo as orientações [nesse link](https://developer.marvel.com/).

```env
MARVEL_API_PUBLIC_KEY=''
MARVEL_API_PRIVATE_KEY=''
MARVEL_API_URL='https://gateway.marvel.com/v1/public'
```

### 2. Pacotes da aplicação

A escolha para gerenciamento dos pacotes da aplicação foi [Yarn](https://yarnpkg.com/).

Para instalação dos pacotes necessários deve-se executar o seguinte comando na raiz do projeto:

```bash
yarn install
```

### 3. Execução do projeto modo desenvolvedor

Para executar o projeto no modo desenvolvedor deve-se executar o comando:

```bash
yarn run dev
```

### 4. Compilação e execução

Para compilar e executar a aplicação deve-se executar primeiro:

```bash
yarn build
```

e em seguida:

```bash
yarn start
```

A saída deve ser algo do tipo:

```bash
user@MacBook-de-Jose hero-finder % yarn start
yarn run v1.22.10
$ next start
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
info  - Using webpack 5. Reason: no custom webpack configuration in next.config.js https://nextjs.org/docs/messages/webpack5
```

## Autor

Desenvolvido por José Francisco. Qualquer dúvida ou sugestão pode-se entrar em contato através do email [jose.fcts@gmail.com](mailto:jose.fcts@gmail.com)
