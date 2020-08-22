import React from 'react';
import './App.css';

import Main from './Main';

import SebNav from './components/SebNav';
import SebFooter from './components/SebFooter';

function App() {
  const navItems = [
    {link:"blog", text: "blog"},
  ];

  return (
    <div className="App">
    <body id="page-top">
      <SebNav items={navItems} />
      <Main />
      <SebFooter />

    </body>

    </div>
  );
}

export default App;
