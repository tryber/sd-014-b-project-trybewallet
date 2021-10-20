import React from 'react';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  fetchAPI() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((response) => console.log(response));
  }

  render() {
    return <div>TrybeWallet</div>;
  }
}

export default Wallet;
