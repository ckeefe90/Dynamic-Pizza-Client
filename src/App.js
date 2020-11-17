import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Route, Switch, withRouter } from 'react-router-dom';
import LandingPage from './LandingPage';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Randomize from './Randomize';

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' render={props => <LandingPage />} />
          <Route path='/SignUp' render={props => <SignUp />} />
          <Route path='/SignIn' render={props => <SignIn />} />
          <Route path='/Randomize' render={props => <Randomize />} />
          {/* <Route path='/MyPizzaList' render={props => <MyPizzaList />} />  */}
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default withRouter(App);