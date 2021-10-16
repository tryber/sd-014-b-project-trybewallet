import React, { /* useState, useEffect */ } from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
  const email = useSelector((state) => state.user.email);

  return (
    <header>
      <h3 data-testid="email-field">
        Email:
        <span> </span>
        { email }
      </h3>
      <h3 data-testid="total-field">
        Despesa Total: RS
        <span> </span>
        0
      </h3>
      <h3 data-testid="header-currency-field">BRL</h3>
    </header>
  );
}
