import React from 'react';

class SelectMoeda extends React.Component {
  constructor() {
    super();
    this.state = {
      moedas: [],
    };
  }

  componentDidMount() {
    const fetchMoeda = () => {
      const url = 'https://economia.awesomeapi.com.br/json/all';
      fetch(url).then((response) => response.json())
        .then((data) => {
          this.setState({ moedas: Object.keys(data)
            .filter((moeda) => (moeda !== 'USDT')) });
        });
    };
    fetchMoeda();
  }

  render() {
    const { moedas } = this.state;
    return (
      <div>
        <div>
          {console.log(moedas)}
        </div>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            {moedas.map((item) => <option key={ item } value={ item }>{item}</option>)}
          </select>
        </label>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   USD: state.wallet,
// });

export default SelectMoeda;
