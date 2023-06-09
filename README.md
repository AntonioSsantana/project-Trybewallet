# Projeto TrybeWallet

A TrybeWallet é uma aplicação de controle de gastos que permite aos usuários adicionar, remover e editar seus gastos. Além disso, oferece a funcionalidade de conversão de moedas, permitindo que os usuários visualizem o total de gastos convertidos para uma moeda de escolha.

## Funcionalidades

A aplicação possui as seguintes funcionalidades:

- Adicionar um gasto: Os usuários podem adicionar um novo gasto fornecendo detalhes como descrição, valor e moeda.
- Remover um gasto: Os usuários podem remover um gasto existente da lista.
- Editar um gasto: Os usuários podem editar os detalhes de um gasto existente, como descrição, valor e moeda.
- Visualizar tabela de gastos: Os usuários podem visualizar uma tabela com seus gastos, exibindo a descrição, valor e moeda de cada gasto.
- Conversor de moedas: Os usuários podem escolher uma moeda de referência e visualizar o total de gastos convertidos para essa moeda.

## Dependências

O projeto utiliza as seguintes dependências:

```json
"dependencies": {
    "@redux-devtools/extension": "3.2.2",
    "@testing-library/jest-dom": "5.16.5",
    "@testing-library/react": "13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-icons": "4.4.0",
    "react-redux": "8.0.2",
    "react-router-dom": "^5.3.3",
    "react-scripts": "5.0.1",
    "redux": "4.2.0",
    "redux-thunk": "2.4.1",
    "stylelint-order": "5.0.0"
  }
```

## Dependências de Desenvolvimento

```json
"devDependencies": {
    "@sheerun/mutationobserver-shim": "0.3.3",
    "cypress": "10.4.0",
    "cypress-multi-reporters": "1.6.1",
    "eslint-config-trybe-frontend": "^1.3",
    "jest-localstorage-mock": "2.4.21",
    "mocha": "10.0.0",
    "mochawesome": "7.1.3",
    "mochawesome-merge": "4.2.1",
    "mochawesome-report-generator": "6.2.0",
    "stylelint": "14.9.1",
    "stylelint-config-standard": "26.0.0"
  }
```

## Scripts

O projeto possui os seguintes scripts:

- `start`: Inicia o projeto em modo de desenvolvimento.
- `build`: Compila o projeto para produção.
- `test`: Executa os testes utilizando o Jest.
- `eject`: Ejeta as configurações do Create React App.
- `test-coverage`: Executa os testes e gera um relatório de cobertura.
- `lint`: Executa a verificação de linting utilizando o ESLint.
- `lint:styles`: Executa a verificação de linting nos arquivos CSS utilizando o Stylelint.

```json
"scripts": {
    "cy": "env CY_CLI=true cypress run",
    "cy:open": "cypress open --e2e --browser chrome",
    "start": "env ESLINT_NO_DEV_ERRORS=true react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "test-coverage": "react-scripts test --coverage --watchAll=false",
    "lint": "eslint --no-inline-config --no-error-on-unmatched-pattern -c .eslintrc.json . --ext .js, .jsx",
    "lint:styles": "npx stylelint '**/*.css'"
  }
```

## Como Utilizar

1. Clone o repositório em sua máquina local.
2. Instale as dependências do projeto utilizando o comando `npm install`.
3. Execute o projeto utilizando o comando `npm start`.
4. Para criar uma nova build do projeto, utilize o comando `npm run build`.
5. Execute os testes utilizando o comando `npm test` ou `npm run test-coverage`.
6. Verifique o linting do código utilizando o comando `npm run lint` e `npm run lint:styles`.
