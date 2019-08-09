import React from 'react';
import './App.css';
import FormikUserForm from './UserForm';
import Card from './Card';
import RecipeCard from './RecipeCard';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      recipes: []
    }
  };

  getRecipeData = () => {
    axios
    .get("http://localhost:7000/api/restricted/data")
    .then(response => {
      console.log(response.data);
      this.setState({ recipes: response.data })
    })
    .catch(error => {
      console.log("ERROR", error)
    })
  }

  
  getUserData = () => {
    axios
    .get("http://localhost:7000/api/restricted/users")
    .then(response => {
      console.log(response.data);
      this.setState({ data: response.data })
    })
    .catch(error => {
      console.log("ERROR", error)
    })
  }

  componentDidMount() {
    this.getUserData();
    this.getRecipeData();
  } 
  
  
  render() {
    return (
      <div className="App">
        <FormikUserForm />
        <RecipeCard recipes={this.state.recipes}/>
        <Card data={this.state.data}/>
      </div>
    );
  }
}

export default App;