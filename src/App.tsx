import React from 'react';
import './App.css';
import { DappWalletView } from './dapp-wallet-view';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>CDP quickstart</h1>
      <DappWalletView />
    </div>
  );
};

export default App;
