import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {  createStoreHook, Provider } from 'react-redux';
import rootReducer from '../services/reducers/index.js';
import { createStore } from 'redux';
const store = createStore(rootReducer);
console.log(store);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
