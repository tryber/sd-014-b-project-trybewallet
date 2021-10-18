import React from 'react';
import Header from '../components/Header';
import InputBase from '../components/InputBase';
import Select from '../components/Select';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = { coins: [],
      Valor: 0,
      Descrição: '',
      Moeda: 'USD',
      Metodo: 'Dinheiro',
      Tag: 'Alimentação',
    };
  }

  async componentDidMount() {
    const coins = await this.getCoinsForApi();
    const size = Object.keys(coins).length;
    for (let index = 0; index < size; index += 1) {
      const element = Object.keys(coins)[index];
      this.addCoinsToStateArray(element);
    }
  }

   getCoinsForApi = async () => {
     const json = await fetch('https://economia.awesomeapi.com.br/json/all');
     const data = await json.json();
     return data;
   }

   addCoinsToStateArray = (element) => {
     if (element !== 'USDT') {
       this.setState((prevState) => ({
         coins: [...prevState.coins, element],
       }));
     }
   }

   handleChange = (event) => {
     this.setState({ [event.target.name]: event.target.value });
   }

   handleClick = () => {
     console.log('clicou');
   }

   metodoDePagamentoArray = () => ['Dinheiro', 'Cartão de crédito', 'Cartão de débito']

   tagArray = () => ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde']

   render() {
     const { coins, Valor, Descrição, Moeda, Metodo, Tag } = this.state;
     return (
       <main>
         <Header />
         <form>
           <InputBase
             name="Valor"
             type="number"
             changeValue={ this.handleChange }
             value={ Valor }
           />
           <InputBase
             name="Descrição"
             type="text"
             value={ Descrição }
             changeValue={ this.handleChange }
           />
           <Select
             NewId="moeda"
             name="Moeda"
             handleValue={ this.handleChange }
             value={ Moeda }
             optArray={ coins }
             label="Moeda"
           />
           <Select
             NewId="metodo-de-pagamento"
             name="Metodo"
             handleValue={ this.handleChange }
             value={ Metodo }
             optArray={ this.metodoDePagamentoArray() }
             label="Método de pagamento"
           />
           <Select
             NewId="tag"
             name="Tag"
             value={ Tag }
             handleValue={ this.handleChange }
             optArray={ this.tagArray() }
             label="Tag"
           />
         </form>
       </main>);
   }
}

export default Wallet;
