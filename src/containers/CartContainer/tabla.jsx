import React from 'react'

const Tabla = ({product}) => {

  const arrayProductos = [product]

  const buttonRemove = () => {

    

  }

  return (
    <tr style={{backgroundColor: "yellowgreen"}}>
          <td>{product.id}</td>
          <td><img src={product.image} alt="table-row" style={{width: "50%"}}></img></td>
          <td>{product.title}</td>
          <td>{product.quantity}</td>
          <td>{product.price}</td>
          <td><button type='button' style={{backgroundColor: 'red'}}>Remove</button></td>
    </tr>
  )
}

export default Tabla