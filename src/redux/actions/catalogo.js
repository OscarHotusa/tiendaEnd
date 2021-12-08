export const cargarProductos = (data) => {
  return {
    type: ACTIONS_PRODUCTS.OBTENER,
    payload: data
  }
};



  
export const ACTIONS_PRODUCTS = {
  OBTENER: "OBTENER_PRODUCTOS"
};
