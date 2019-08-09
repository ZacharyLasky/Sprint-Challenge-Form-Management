import React from 'react';
import './App.css';
import UserForm from './UserForm';

class App extends React.Component {
  constructor() {
    super();
    
  };
  
  render() {
    return (
      <div className="App">
        <UserForm />
      </div>
    );
  }
}

export default App;