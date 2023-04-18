import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img className='imgProduct' src={img} alt={nombre} />
        <h3 className='texto'>{nombre}</h3>
        <p className='texto'>${precio}</p>
        <Link to={`/item/${id}`} className="boton">Detalles</Link>
    </div>
  )
}

export default Item