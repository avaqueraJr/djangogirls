import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import DataDisplay from './components/DataDisplay.jsx';
import LoginForm from './components/LoginForm.jsx'; // Import LoginForm
import RegistrationForm from './components/RegistrationForm.jsx'; // Import RegistrationForm
import React from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* Include the DataDisplay component here */}
      <DataDisplay />
      {/* Include the LoginForm and RegistrationForm components here */}
      <LoginForm />
      <RegistrationForm />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
