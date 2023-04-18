import React from 'react'
import './CardWidget.css'

const CardWidget = () => {
    const imgCarrito = "https://images.vexels.com/media/users/3/200097/isolated/preview/942820836246f08c2d6be20a45a84139-icono-de-carrito-de-compras-carrito-de-compras.png";
  return (
    <div>
        <img className="imgCarrito" src={imgCarrito} alt="Carrito" />
        <strong style={{textStroke: '1px black', color: "blue", paddingRight: '20px'}}>3</strong>
    </div>
  )
}

export default CardWidget