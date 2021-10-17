import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/header/Header';

export default function Wallet() {
  const { email } = useSelector((state) => state.user);
  return (
    <div>
      <Header email={ email }>forms</Header>
    </div>
  );
}
