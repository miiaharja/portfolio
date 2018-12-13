import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LocalizeProvider } from "react-localize-redux";
import * as serviceWorker from './serviceWorker';

const Main = props => (
<LocalizeProvider>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </LocalizeProvider>
);

ReactDOM.render(<Main />, document.getElementById('root'));

serviceWorker.unregister();
