import React from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';
import '../css/Global.css';
import '../css/Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <WalletForm />
        <Table />
      </div>
    );
  }
}

export default Wallet;
