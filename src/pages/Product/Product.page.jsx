//import { useParams } from 'react-router-dom';
import { useLocation } from "react-router";
import { Link  } from 'react-router-dom';
import './Product.page.scss';

export default function Product(props) {

  let data = useLocation();

  return (
    <div className="Product">
      <Link to="/">Volver a la tienda</Link>
      { data.state && (
        <div>
          <div className="title"><strong>{data.state.title}</strong></div>
          <div className="image">
            <figure>
              <img src={data.state.image} alt={data.state.title} />
            </figure>
          </div>
          <div>
            <strong>Descripcion:</strong><br />
            {data.state.description}
          </div>
          <div>
            <strong>Edicion: {data.state.category}</strong>
          </div>
          <div>
            <strong>Precio: {data.state.price}</strong>
          </div>
        </div>
        )
      }
    </div>
  );
}