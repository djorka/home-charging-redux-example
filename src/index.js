import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Component from './features/nested-components/Component';
import PokemonUseEffect from './features/PokemonUseEffect';
import Pokemon from './features/rtk-pokemon/Pokemon'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/component">Component</Link>
            </li>
            <li>
              <Link to="/pokemon/useeffect">Pokemon useEffect</Link>
            </li>
            <li>
              <Link to="/pokemon/rtkquery">Pokemon RTK query</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/pokemon/rtkquery" component={Pokemon} />
            <Route path="/pokemon/useeffect" component={PokemonUseEffect} />
            <Route path="/component" component={Component} />
            <Route path="" component={App} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
