import { createStore, combineReducers } from 'redux';
import { productos } from './reducers/catalogo';
import { sesion } from './reducers/sesion';

let reducers = combineReducers({
  productos: productos,
  sesion: sesion
});


let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;