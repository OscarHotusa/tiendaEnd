import { ACTIONS_PRODUCTS } from '../actions/catalogo';

const initialState = {
  productos: []
};


export const productos = (state = initialState.productos, action) => {
  switch (action.type) {
    case ACTIONS_PRODUCTS.OBTENER:
      state = action.payload;
      return state;

    default:
      return state;
    }
};

export default productos;