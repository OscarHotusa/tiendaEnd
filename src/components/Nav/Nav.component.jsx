import './Nav.component.scss';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="Nav">
      <Link className="Nav-link" to='/'>Store</Link>
      <Link className="Nav-link" to='/about'>About</Link>
    </div>
  );
}