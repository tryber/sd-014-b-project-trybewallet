import React from 'react';
import { connect } from 'react-redux';
import FormRender from '../components/FormRender';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header data-testid="email-field">
          <p>{email}</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <FormRender />
      </div>
    );
  }
}

const mapStateToProps = ({ user: { email } }) => ({ email });

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
