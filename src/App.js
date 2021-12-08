import { React } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './bootstrap.min.css';
import './format.css';

import Login from './pages/Login/Login.page';
import Register from './pages/Register/Register.page';
import Store from './pages/Store/Store.page';
import Product from './pages/Product/Product.page';

import ModoNocturno from './components/nocturno/nocturno.component';


export default function App() {

  const sesion = useSelector(state => state).sesion;

  return (
    <BrowserRouter>
      <div className="App">
      <ModoNocturno />

        <Switch>
          <Route exact path="/">
            { !sesion ? <Login /> : <Redirect to='/store'/> }
          </Route>
          <Route path="/register">
            { !sesion ? <Register /> : <Redirect to='/store'/> }
          </Route>
          <Route path="/product/:id">
            { !sesion ? <Redirect to='/'/> : <Product /> }
          </Route>
          <Route path="/store">
            { sesion ? <Store /> : <Redirect to='/'/> }
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}