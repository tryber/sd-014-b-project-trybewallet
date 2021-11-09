import React, { Component } from 'react';

class ButtonAdd extends Component {
    render() {
        const { onClick } = this.props;
        return (
            <section>
              <button
                type="button" data-testid="total-field" onClick={ onClick }>Adicionar despesas</button>
            </section>   
        )
    }
}

export default ButtonAdd;