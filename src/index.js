import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);


