import React from 'react'
import "./tabla"
import { Shop } from '../../context/ChangoShop'
import { useContext } from 'react'
import Tabla from './tabla'
import generateOrdenObject from '../../services/generateOrdenObjects'
import { useState } from 'react'

const Cart = () => {

  const {products, total} = useContext(Shop)

  const [formVis, setFormVis] = useState(false)

  const confirmPurchase = () => {

    const order = generateOrdenObject({
      nombre: "",
      email: "",
      telefono: "",
      cart: products,
      total: total()

    })

    setFormVis(true)

    console.log(order);
  }
  

  return(
    <>
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
      </table> 
      <button onClick={confirmPurchase}>Confirm Purchase</button>
      { formVis ? 
      <form>
        <input placeholder='Ingrese El Nombre'/>
      </form>
      : null
      }
    
    </>
  )
}

export default Cart