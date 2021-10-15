import React from 'react';
import Header from '../components/Header';
import InputLabel from '../components/InputLabel';
import SelectLabel from '../components/SelectLabel';
import DATA from '../data';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      // Valor: '',
      // Descrição: '',
      // Moeda: 'USD',
      // 'Método de pagamento': 'Dinheiro',
      // Tag: 'Alimentação',
    };
  }

  handleEntries = ({ target: { name, value } }) => this.setState({ [name]: value });

  render() {
    return (
      <div>
        <Header />
        <form>
          <InputLabel name="Valor" callbackFunc={ this.handleEntries } />
          <SelectLabel
            name="Moeda"
            callbackFunc={ this.handleEntries }
            ITEMS={ DATA.currency }
          />
          <SelectLabel
            name="Método de pagamento"
            callbackFunc={ this.handleEntries }
            ITEMS={ DATA.payment }
          />
          <SelectLabel
            name="Tag"
            callbackFunc={ this.handleEntries }
            ITEMS={ DATA.tag }
          />
          <InputLabel name="Descrição" callbackFunc={ this.handleEntries } />
        </form>
      </div>);
  }
}

export default Wallet;
