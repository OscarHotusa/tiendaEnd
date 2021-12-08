import React, { useRef, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './Login.page.css';
import accessPermited from '../../redux/reducers/users';
import { iniciarSesion } from '../../redux/actions/sesion.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';




export default function Login() {

  const sesion = useSelector(state => state).sesion;
  const dispatch = useDispatch();
  const user = useRef();
  const pass = useRef();
  let [errors, seterrors] = useState([]);
  const regExp =  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  function Errors(){
    if( !errors.length ) return null;
    return (
      <ul className="errors">
        {errors.map( ( (error,index) => (
          <li
            key={index}
          >{error}</li>)
        ))}
      </ul>
    )
  };
  function RediLogin(){
    if( !sesion ) return null;
    return <Redirect to='/store'/>
  };
  function validarForm(event){
    event.preventDefault();
    seterrors([]);
    let envio = true;

    if( 
      user.current.value.trim() 
      && regExp.test( user.current.value.trim() ) 
    ){
      user.current.classList.remove('ko')
    } else {
      user.current.classList.add('ko')
      seterrors(errors => [...errors, 'El usuario es un campo obligatorio con formato de email']);
      envio = false;
    };

    if( pass.current.value.trim().length > 5 ){
      pass.current.classList.remove('ko')
    } else {
      pass.current.classList.add('ko')
      seterrors(errors => [...errors, 'La contraseña es un campo obligatorio con con tamaño superior a 5 caracteres']);
      envio = false;
    };

    if( envio ) logueamos();

  };
  function logueamos(){
    let _email = user.current.value.trim().toLocaleLowerCase();
    let _pass = btoa( pass.current.value.trim() );
    let find = accessPermited.find(function(user){
      return user.email === _email && user.pass === _pass;
    });

    if( !find ){
      seterrors(errors => [...errors, 'No se encuentra registrado o ha introducido incorrectamente los datos.']);
      pass.current.classList.add('ko');
      user.current.classList.add('ko');
      
    }
    if( find ){
      dispatch( iniciarSesion(find) );
    }

  };
  function inputChange(event){
    event.target.value.trim()
    ? event.target.classList.add('fill')
    : event.target.classList.remove('fill');
  };

  return (
    <div className="Login">
      <RediLogin />
      <div className="center">
        <h1>Para acceder debe loguearse</h1>
        <Errors />
        <form onSubmit={validarForm}>
          <label className="labelText">
            <input type="text" ref={user} onChange={inputChange} />
            <span>User</span>
          </label>
          <label className="labelText">
            <input type="password" ref={pass} onChange={inputChange} />
            <span>Pass</span>
          </label>
          <div className="dual">
            <div className="dualIndi">
              <Link className="link btn-link" to="/register">Registrarse</Link>
            </div>
            <div className="dualIndi">
              <button type="submit" className="btnLogin btn">
                <FontAwesomeIcon icon={faSignInAlt} />
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}