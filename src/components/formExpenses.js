import React from 'react';

const paymentMethods = ['', 'Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

const expensesCategory = ['', 'Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

function formEstructure(response) {
  return (
    <form>
      <label htmlFor="value">
        Valor:
        <input
          type="text"
          id="value"
          placeholder="Digite o Valor"
        />
      </label>
      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          id="description"
          placeholder="Digite a Descrição"
        />
      </label>
      <label htmlFor="currency">
        Moeda:
        <select id="currency">
          { response.length > 0 && response.map((coin) => (
            <option key={ coin } value={ coin }>{coin}</option>)) }
        </select>
      </label>
      <label htmlFor="paymentMethod">
        Método de pagamento:
        <select id="paymentMethod">
          { paymentMethods.map((method) => (
            <option key={ method } value={ method }>{method}</option>)) }
        </select>
      </label>
      <label htmlFor="category">
        Tag:
        <select id="category">
          { expensesCategory.map((category) => (
            <option key={ category } value={ category }>{category}</option>)) }
        </select>
      </label>
      <button
        type="button"
        onClick={ () => console.log('clicou') }
      >
        Adicionar despesa

      </button>
    </form>
  );
}
// código visto nesse site, utilizado abaixo
// delete object.key => código para deletar chave determinada de um objeto determinado
// https://stackoverflow.com/questions/3455405/how-do-i-remove-a-key-from-a-javascript-object
function FormExpenses() {
  const [currenciesArray, setResponse] = React.useState([]);
  async function fetchApiCurrencies() {
    const promise = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await promise.json();
    delete json.USDT;
    setResponse(Object.keys(json));
  }
  // https://dev.to/vinodchauhan7/react-hooks-with-async-await-1n9g
  React.useEffect(() => {
    fetchApiCurrencies();
  }, []);

  return formEstructure(currenciesArray);
}

export default FormExpenses;
