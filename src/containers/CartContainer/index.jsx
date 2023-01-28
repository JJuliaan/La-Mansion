import React from 'react'
import "./tabla"
import { Shop } from '../../context/ChangoShop'
import { useContext } from 'react'
import Tabla from './tabla'

const Cart = () => {

  const {products} = useContext(Shop)

  

  return(
    <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Imagen</th>
      <th scope="col">Nombre</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Price</th>
      <th scope='col'></th>
    </tr>
  </thead>
  <tbody>
    {products.map(product => {
      return <Tabla key={products.id} product={product}/>
    })}
  </tbody>
  <tfoot>

  </tfoot>
</table>
  )
}

export default Cart