import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './path/to/your/rootReducer'; // Путь к вашему корневому редьюсеру
import App from './App';

const store = createStore(rootReducer); // Создание хранилища Redux

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
