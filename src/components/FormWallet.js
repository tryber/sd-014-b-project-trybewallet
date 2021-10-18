import React from 'react';
import Input from './Input';
import SelectMoeda from './selects/SelectMoeda';
import SelectPay from './selects/SelectPay';
import SelectTag from './selects/SelectTag';

class FormWallet extends React.Component {
  render() {
    return (
      <div>
        <Input
          label="Valor"
          id="valor-input"
          type="number"
          name="valor"
          // value={ email }
          // onChange={ this.handleChange }
        />
        <Input
          label="Descrição"
          id="Descrição"
          type="text"
          name="Descrição"
          // value={ email }
          // onChange={ this.handleChange }
        />
        <SelectMoeda />
        <SelectPay />
        <SelectTag />
      </div>
    );
  }
}

export default FormWallet;
