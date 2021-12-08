import React, { useEffect } from 'react';
import { getProducts } from '../../services/http.services';
import './ListProdu.component.scss';
import { useSelector, useDispatch } from 'react-redux';
import { cargarProductos } from '../../redux/actions/catalogo';
import Product from '../Product/Product.component'
import { useCallback } from 'react';



export default function Nav() {

  const productos = useSelector(state => state).productos;
  const dispatch = useDispatch();

  const obteinProduct = useCallback(() => {
    if( !productos.length ){
      getProducts()
        .then( (response) => {
          dispatch( cargarProductos(response) );
        })
        .catch( (error) => {
          console.trace('Error:',error)
        })
        .finally(() => {})
    };
  }, [productos,dispatch]);

  useEffect(() => {
    obteinProduct();
  }, [obteinProduct]);
  


  return (
  <div className="ListProdu">
    <h2>lista de productos</h2>
    <div className="lista">
      {
        productos.map((prod, ind) => (
          <Product key={ind} obj={prod} />
        ))
      }
    </div>
  </div>
  );
}