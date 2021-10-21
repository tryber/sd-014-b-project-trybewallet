import React from 'react';
import Expenditures from '../components/Expenditures';
import Header from '../components/Header';
import requestCurrency from '../Api/api';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    let data = await requestCurrency();
    data = Object.keys(data);
    this.setStateData(data);
  }

   setStateData = (data) => {
     data = data.filter((expenditure) => expenditure !== 'USDT');
     this.setState({ data });
   }

   render() {
     const { data } = this.state;
     return (
       <main>
         <Header />
         <Expenditures data={ data } />
       </main>
     );
   }
}

export default Wallet;
