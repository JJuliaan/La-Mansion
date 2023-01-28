import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../context/ChangoShop'

const Tabla = ({product}) => {

  const {deleteProduct} = useContext(Shop)

  const deleteAdd = (id) => {
    deleteProduct(id)
  }

  return (
    <tr style={{backgroundColor: 	"#D2691E"}}>
          <td>{product.id}</td>
          <td><img src={product.image} alt="table-row" style={{width: "50%"}}></img></td>
          <td>{product.title}</td>
          <td>{product.quantity}</td>
          <td>{product.price}</td>
          <td><button type='button' style={{backgroundColor: 'red'}} onClick>Remove</button></td>
    </tr>
  )
}

export default Tabla