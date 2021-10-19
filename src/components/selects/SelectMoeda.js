import PropTypes from 'prop-types';
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
    const { value, onChange, name } = this.props;
    return (
      <div>
        {console.log(moedas)}
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name={ name } value={ value } onChange={ onChange }>
            {moedas.map((item) => <option key={ item } value={ item }>{item}</option>)}
          </select>
        </label>
      </div>
    );
  }
}

SelectMoeda.propTypes = {
  name: PropTypes.isRequired,
  onChange: PropTypes.isRequired,
  value: PropTypes.isRequired,
};

// const mapStateToProps = (state) => ({
//   USD: state.wallet,
// });

export default SelectMoeda;
