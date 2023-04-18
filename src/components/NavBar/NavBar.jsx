import React from 'react'
import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>

      <Link to={"/"} className="boton">Home</Link>

      <ul>
        <li>
          <NavLink to={`/categoria/1`} className="boton">Mouses</NavLink>
        </li>
        <li>
          <NavLink to={`/categoria/2`} className="boton">Teclados</NavLink>
        </li>
        <li>
          <NavLink to={`/categoria/3`} className="boton">Auriculares</NavLink>
        </li>
        <li>
          <NavLink to={`/categoria/4`} className="boton">Camaras</NavLink>
        </li>
      </ul>

      <CardWidget />

    </header>
  )
}

export default NavBar