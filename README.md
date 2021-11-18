# Projeto Trybe Wallet

## Lista de requisitos

  ### [Página de Login]
    - [1. Crie uma página inicial de login com os seguintes campos e características:]
    - [2. Realize as seguintes verificações nos campos de email, senha e botão:]
    - [3. Utilize o Redux para salvar no estado global as informações da pessoa logada]
  ### [Página da Carteira]
  ### [Configurando sua página]
    - [4. Crie uma página para sua carteira com as seguintes características:]
  ### [Header (cabeçalho)]
    - [5. Crie um header para a página de carteira contendo as seguintes características:]
  ### [Formulário de adição de Despesa]
    - [6. Desenvolva um formulário para adicionar uma despesa contendo as seguintes características:]
    - [7. Implemente a lógica para preencher as opções do campo "Moedas", buscando as siglas das moedas da API:]
    - [8. Desenvolva a opção de "Adicionar despesa" na sua tabela de gastos]
  ### [Tabela de Gastos]
    - [9. Desenvolva uma tabela com os gastos contendo as seguintes características:]
    - [10. Crie um botão para deletar uma despesa da tabela contendo as seguintes características:]
  ### [Bônus](#bônus)
    - [11. Crie um botão para editar uma despesa da tabela contendo as seguintes características:]

---

# Habilidades
Neste projeto, verificamos se voce é capaz de:

  * Criar um store Redux em aplicações React

  * Criar reducers no Redux em aplicações React

  * Criar actions no Redux em aplicações React

  * Criar dispatchers no Redux em aplicações React

  * Conectar Redux aos componentes React

  * Criar actions assíncronas na sua aplicação React que faz uso de Redux.

---

## O que deverá ser desenvolvido

Neste projeto você vai desenvolver uma carteira de controle de gastos com conversor de moedas, ao utilizar essa aplicação um usuário deverá ser capaz de:
  - Adicionar, remover e editar um gasto;
  - Visualizar uma tabelas com seus gastos;
  - Visualizar o total de gastos convertidos para uma moeda de escolha;


## Desenvolvimento

Você deve desenvolver uma aplicação em React que use Redux como ferramenta de manipulação de estado.

Através dessa aplicação, será possível realizar as operações básicas de criação e manipulação de um estado de redux.

---

## Configurando o Redux DevTools
Pra usarmos o Redux DevTools com o Redux-Thunk, vamos utilizar uma biblioteca chamada `composeWithDevTools`, ela já está no package.json, a única coisa que você vai precisar fazer é configurar a sua store, por exemplo:

```
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
```

---

## Documentação da API de Cotações de Moedas

Sua página _web_ irá consumir os dados da API do _awesomeapi API de Cotações_ para realizar a busca de câmbio de moedas. Para realizar essas buscas, vocês precisarão consultar o seguinte _endpoint_:

- https://economia.awesomeapi.com.br/json/all

O retorno desse endpoint será algo no formato:
```
{
   {
     "USD": {
       "code":"USD",
       "codein":"BRL",
       "name":"Dólar Comercial",
       "high":"5.6689",
       "low":"5.6071",
       "varBid":"-0.0166",
       "pctChange":"-0.29",
       "bid":"5.6173",
       "ask":"5.6183",
       "timestamp":"1601476370",
       "create_date":"2020-09-30 11:32:53"
       },
      ...
   }
}
```

Se você quiser aprender mais informações sobre a API, veja a [documentação](https://docs.awesomeapi.com.br/api-de-moedas).