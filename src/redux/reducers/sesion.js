import { SESION_MENSAJES } from '../actions/sesion';

const initialState = {
  sesion: false
};

export const sesion = (state = initialState.sesion, action ) => {
  switch (action.type) {
    case SESION_MENSAJES.INICIAR:
      state = action.datosSesion;
      return state;
      
    case SESION_MENSAJES.CERRAR:
      state = false;
      return state;

    default:
      return state;
  }
};

export default sesion;