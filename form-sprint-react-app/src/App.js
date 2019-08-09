import React from 'react';
import './App.css';
import FormikUserForm from './UserForm';

class App extends React.Component {
  constructor() {
    super();
    
  };
  
  render() {
    return (
      <div className="App">
        <FormikUserForm />
      </div>
    );
  }
}

export default App;