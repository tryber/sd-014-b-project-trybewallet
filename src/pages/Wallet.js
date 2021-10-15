import React from 'react';
import Header from '../components/Header';
import Inputs from '../components/Inputs';

const URL_BASE = 'https://economia.awesomeapi.com.br/json/all';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.getInfoApi = this.getInfoApi.bind(this);
    this.state = {
      moeda: [],
    };
  }

  componentDidMount() {
    this.getInfoApi();
  }

  async getInfoApi() {
    const response = await fetch(URL_BASE);
    const moedaResponse = await response.json();
    const moedaArray = Object.keys(moedaResponse);
    const newArrayMoedas = moedaArray.filter((moeda) => moeda !== 'USDT');
    this.setState({ moeda: newArrayMoedas });
  }

  render() {
    const { moeda } = this.state;
    console.log(moeda);
    return (
      <div>
        <Header />
        <Inputs moeda={ moeda } />
      </div>
    );
  }
}

export default Wallet;
