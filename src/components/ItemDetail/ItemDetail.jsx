import { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ id, nombre, precio, img, stock }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const handlerCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
  }

  return (
    <div className='contenedorItem'>
      <img src={img} alt={nombre} />
      <div className='nombre'>
        <h3>{nombre}</h3>
        <div className='Detalles'>
          <h3>${precio}</h3>
          <p className='descripcion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quia neque asperiores minima corrupti! Neque placeat ab expedita porro sint, obcaecati est nostrum, eligendi ratione eum unde facere cum dolore!</p>
          {
            agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>) : (<ItemCount minimo={1} stock={stock} FuncionAgregar={handlerCantidad} />)
          }
        </div>
      </div>
    </div >
  )
}

export default ItemDetail