import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './nocturno.component.css';


export default function ModoNocturno(){
  
  const [esDeDia, setEsDeDia] = useState(false);

  
  const changeMode = function(){
    setEsDeDia(!esDeDia);
    document.body.style.setProperty('--background', esDeDia ? '40,44,52' : '255,255,255');
    document.body.style.setProperty('--color', esDeDia ? '255,255,255' : '40,44,52' );
  }

  return (
    <div className='ModoNocturno navbar-fixed-top'>
      <button onClick={changeMode} className='btn'>
        { esDeDia ? (<FontAwesomeIcon icon={faSun} />) : (<FontAwesomeIcon icon={faMoon} />) }
      </button>
    </div>
  )
}

