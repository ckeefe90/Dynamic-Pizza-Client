import React, { Component } from 'react';
import { config } from 'chai';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LandingPage from './LandingPage';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Randomize from './Randomize';
import PizzaError from './PizzaError';
import UserContext from './UserContext';
import PizzaContext from './PizzaContext';

class App extends Component {
  state = {
    pizzas: [],
    error: null,
  };

  setPizzas = pizzas => {
    this.setState({
      pizzas,
      error: null,
    })
  }

  login = (user, cb) => {
    if (!user) {
      this.setState({ user }, cb)
    } else
      return fetch(config.API_ENDPOINT + "/login", {
        method: "POST",
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(user)
      })
        .then(res => {
          if (res.ok) {
            return res.json()
          } else
            throw new Error('Username or password does not match')
        })
        .then(token => {
          localStorage.setItem('user', token)
          this.setState({ user: token }, () => this.getPizzas().then(cb))
        })
  }

  logOut = () => {
    localStorage.removeItem('user')
    this.setState({ pizzas: [], user: null }, () => this.props.history.push('/'))
  }

  signUp = (user, cb) => {
    console.log('config.API_ENDPOINT', config.API_ENDPOINT)
    return fetch(config.API_ENDPOINT + "/signup", {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else
          throw new Error('Unable to create a new account')
      })
      .then(token => {
        localStorage.setItem('user', token)
        this.setState({ user: token }, () => this.getPizzas().then(cb))
      })
  }

  getPizzas = () => {
    return fetch(config.API_ENDPOINT + "/pizzas", {
      method: "GET",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${this.state.user}`
      },
    })
      .then(async res => {
        if (res.ok) {
          return res.json()
        } else if (res.status === 401) {
          localStorage.removeItem('user')
          throw new Error('Unauthorized')
        } else {
          const json = await res.json()
          throw new Error(json.error.message)
        }
      })
      .then(pizzas => {
        this.setState({
          pizzas,
        })
      })
  }

  addPizza = (pizza, cb) => {
    return fetch(config.API_ENDPOINT + "/pizzas", {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${this.state.user}`
      },
      body: JSON.stringify(pizza)
    })
      .then(async res => {
        if (res.ok) {
          return res.json()
        } else {
          const json = await res.json()
          throw new Error(json.error.message)
        }
      })
      .then(newPizza => {
        this.setState({
          pizzas: [...this.state.pizzas, newPizza],
        }, cb)
      })
  }

  updatePizza = (id, updatedPizza) => {
    return fetch(`${config.API_ENDPOINT}/pizzas/${id}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${this.state.user}`
      },
      body: JSON.stringify(updatedPizza)
    })
      .then(async res => {
        if (res.ok) {
          return res
        } else {
          const json = await res.json()
          throw new Error(json.error.message)
        }
      })
      .then(() => {
        this.setState({
          pizzas: this.state.pizzas.map(b =>
            (b.id !== id) ? b : { ...b, ...updatedPizza })
        })
      })
  }

  deletePizza = pizzaId => {
    return fetch(`${config.API_ENDPOINT}/pizzas/${pizzaId}`, {
      method: "DELETE",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${this.state.user}`
      },
    })
      .then(async res => {
        if (res.ok) {
          return res
        } else {
          const json = await res.json()
          throw new Error(json.error.message)
        }
      })
      .then(() => {
        const newPizza = this.state.pizzas.filter(b =>
          b.id !== pizzaId
        )
        this.setState({ pizzas: newPizza })
      })
  }

  componentDidMount() {
    const user = localStorage.getItem('user')
    if (user) {
      this.setState({ user }, this.getPizzas)
    }
  }

  render() {
    const userContextValue = {
      user: this.state.user,
      setUser: this.login,
      addUser: this.signup,
      logOut: this.logOut
    }

    const pizzaContextValue = {
      pizzas: this.state.pizzas,
      savePizza: this.savePizza,
      updatePizza: this.updatePizza,
      deletePizza: this.deletePizza,
    }

    return (
      <PizzaError>
        <UserContext.Provider value={userContextValue}>
          <>
            <Header />
            <main>
              <PizzaContext.Provider value={pizzaContextValue}>
                <Switch>
                  <Route exact path='/' render={props => <LandingPage />} />
                  <Route path='/SignUp' render={props => <SignUp />} />
                  <Route path='/SignIn' render={props => <SignIn />} />
                  <Route path='/Randomize' render={props => <Randomize />} />
                  {/* <Route path='/MyPizzaList' render={props => <MyPizzaList />} />  */}
                </Switch>
              </PizzaContext.Provider>
            </main>
            <Footer />
          </>
        </UserContext.Provider>
      </PizzaError >
    );
  }
}

export default withRouter(App);