import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import Column from './Column';

export default class InputGroup extends React.Component {
  render() {
    const { children, inline } = this.props;

    return (
      <div className="InputGroup">
        {
          inline
            ? <Row>{ children }</Row>
            : <Column alignItems="start">{ children }</Column>
        }
      </div>
    );
  }
}

InputGroup.propTypes = {
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool,
};

InputGroup.defaultProps = {
  inline: false,
};
