import React, { useRef, useState } from 'react';
import '../Login/Login.page.css';
import { accessPermited, addUser } from '../../redux/reducers/users';
import { Redirect, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { iniciarSesion } from '../../redux/actions/sesion.js';



export default function Register() {

  const sesion = useSelector(state => state).sesion;
  const dispatch = useDispatch();
  const name = useRef();
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
    return <Redirect to='/gestor'/>
  };
  function validarForm(event){
    event.preventDefault();
    seterrors([]);
    let envio = true;

    if( name.current.value.trim() ){
      name.current.classList.remove('ko')
    } else {
      name.current.classList.add('ko')
      seterrors(errors => [...errors, 'El nombre es un campo obligatorio']);
      envio = false;
    };
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

    if( envio ){
      //comprobamos disponibilidad de user
      let _email = user.current.value.trim().toLocaleLowerCase();
      let find = accessPermited.find(function(user){
        return user.email === _email;
      });
      if( find ){
        user.current.classList.add('ko')
        seterrors(errors => [...errors, 'Ya existe este usuario en la BBDD']);
        envio = false;
      } else {
        let _tmp = {
          name : name.current.value.trim(),
          pass : btoa( pass.current.value.trim() ),
          email : _email
        }
        addUser(_tmp);
        dispatch( iniciarSesion(_tmp) );
      }
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
        <h1>Registrese para poder acceder</h1>
        <Errors />
        <form onSubmit={validarForm}>
          <label className="labelText">
            <input type="text" ref={name} onChange={inputChange} />
            <span>Name</span>
          </label>
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
              <Link className="link" to="/">Login</Link>
            </div>
            <div className="dualIndi">
              <button type="submit" className="btnLogin">Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
