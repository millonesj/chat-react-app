import React from 'react';
import Dashboard from './components/dashboard'
import Store from './contexts/Store'

function App() {
  return (
    <div className="App">
      <Store>
      <Dashboard/>
      </Store>
    </div>
  );
}

export default App;
