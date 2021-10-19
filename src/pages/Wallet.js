import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EditedForm from '../components/EditedForm';
import RegularForm from '../components/RegularForm';
import Header from '../components/Header';
import Table from '../components/Table';
import '../css/walletCss.css';
import '../css/loginPageCss.css';

class Wallet extends React.Component {
  render() {
    const { edited } = this.props;
    return (
      <div className="wallet-container">
        <div className="header">
          <Header />
        </div>
        <div className="tableAndForm-container">
          <div className="login-box">
            {edited ? <EditedForm /> : <RegularForm /> }
          </div>
          <Table />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  edited: wallet.edited,
});

Wallet.defaultProps = {
  edited: undefined,
};

Wallet.propTypes = {
  edited: PropTypes.bool,
};

export default connect(mapStateToProps)(Wallet);
