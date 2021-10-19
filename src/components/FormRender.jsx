import React, { Component } from 'react';
import Value from './Value';
import Currency from './Currency';
import Description from './Description';
import PayMethod from './PayMethod';
import Tag from './Tag';

class FormRender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { value, description } = this.state;
    return (
      <div>
        <form>
          <Value value={ value } handleChange={ this.handleChange } />
          <Description value={ description } handleChange={ this.handleChange } />
          <Currency />
          <PayMethod />
          <Tag />
        </form>
      </div>
    );
  }
}

export default FormRender;
