import { useState, useEffect } from 'react'
import './ItemListContainer.css'
import { getProducts, GetProductosPorCategoria } from '../../asyncmock'
import ItemList from '../ItemsList/ItemList';
import { useParams } from "react-router-dom";

const ItemListContainer = (propiedad) => {

  const [products, setProducts] = useState([]);

  const {idCategoria} = useParams();

  useEffect(() => {

    const functionProductos = idCategoria ? GetProductosPorCategoria : getProducts;



    functionProductos(idCategoria)
      .then(response => setProducts(response))
      .catch(error => console.log(error))
  }, [idCategoria]);

  return (
    <div>
      <h2 style={{fontSize:'40px', margin:'0', textAlign:'center'}}>Productos</h2>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer