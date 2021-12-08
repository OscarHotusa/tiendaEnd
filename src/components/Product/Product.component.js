import { memo } from 'react';
import { Link  } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



export function Product({obj}){
  let abrirProducto = (prod) => {
    // Nos devuelve un producto con ID entre 1 y 20 (Ambos incluidos).
    return {
      pathname: '/product/' + prod.id,
      state: prod
    }  
  };

  return (
    <Card className='elementoLista'>
      <CardMedia
        component="img"
        height="140"
        image={obj.image}
        alt="green iguana"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {obj.title}
        </Typography>
        <Typography variant="body2" color="secondary">
          {obj.description}
        </Typography>
      </CardContent>
      
      <CardActions>
        <Link to={abrirProducto(obj)}>
          <Button size="small" color="primary">
            See more
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
};

export default memo( Product );