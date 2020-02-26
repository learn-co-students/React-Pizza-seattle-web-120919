import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    pizzas: [],
    currentPizza: null
  }

  componentDidMount(){
    this.fetchPizzas()
  }

  fetchPizzas = () => {
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(data => this.setState({
      pizzas: data
    }))
  }

  chooseEditPizza = (pizza) => {
    this.setState({
      ...this.state,
      currentPizza: pizza
    })
  }

  changePizza = (value, property) => {
    this.setState({
      ...this.state,
      currentPizza: {
        ...this.state.currentPizza,
        [property]: value
      }
    })
  }

  submitEdit = () => {
    this.setState({
      ...this.state,
      pizzas: this.state.pizzas.map(pizza => {
          if(pizza.id === this.state.currentPizza.id){
            return pizza = this.state.currentPizza
          }
          return pizza
        })
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm currentPizza={this.state.currentPizza} changePizza={this.changePizza} submitEdit={this.submitEdit}/>
        <PizzaList pizzas={this.state.pizzas} chooseEditPizza={this.chooseEditPizza}/>
      </Fragment>
    );
  }
}

export default App;
