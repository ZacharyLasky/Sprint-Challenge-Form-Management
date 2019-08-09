import React from 'react';
import './App.css';
import FormikUserForm from './UserForm';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  };

  
  getUserData = () => {
    axios
    .get("http://localhost:7000/api/restricted/users")
    .then(response => {
      console.log(response.data);
      // this.setState({ data: response.data })
    })
    .catch(error => {
      console.log("ERROR", error)
    })
  }

  componentDidMount() {
    this.getUserData();
  } 
  
  
  render() {
    return (
      <div className="App">
        <FormikUserForm />
      </div>
    );
  }
}

export default App;