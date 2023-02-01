import React from 'react'
import "./tabla"
import { Shop } from '../../context/ChangoShop'
import { useContext } from 'react'
import Tabla from './tabla'
import generateOrdenObject from '../../services/generateOrdenObjects'
import { useState } from 'react'
import { collection, addDoc, doc, updateDoc } from "firebase/firestore"
import { db } from '../../firebase/config'
import { Link } from 'react-router-dom'
import FormComp from '../../components/Form'
import Spinner from 'react-bootstrap/Spinner';


const Cart = () => {

  const {products, total, cleanCart} = useContext(Shop)

  const [formVis, setFormVis] = useState(false)

  const [loader, setLoader] = useState(false)

  const confirmPurchase = async (data) => {

    try {
      setLoader(true)

      const order = generateOrdenObject({
        
        nombre: data.nombre,
        email: data.email,
        telefono: data.phone,
        cart: products,
        total: total()
  
      })
      // setFormVis(true)
      console.log(order);
  
      const docRef = await addDoc(collection(db, "orders"), order)
      cleanCart()

      for (const productsCart of products) {
        const productRef = doc(db, "products", productsCart.id)

        await updateDoc(productRef, {
          stock: productsCart.stock - productsCart.quantity
        })

      }

      alert("Orden confirmada con ID: " + docRef.id)
      
    } catch (error) {
      console.log("Error")
    } finally {
      setLoader(false)
      setFormVis(false)
    } 


  }
  

  return(
    <>
      {
        products.length !== 0 ?
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
          {
            loader  ?
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            :
            <button onClick={() => setFormVis(true)}>Confirm Purchase</button>
          }
        </>
        :
        <>
        <h1>No hay productos en el carrito</h1>
        <button>
          <Link to = "/">Home</Link>
        </button>
        </>
      }
      {
        formVis ?
        <FormComp
          confirmPurchase = {confirmPurchase}
          formVis = {formVis}
          setFormVis = {setFormVis}
        />
        : null
      }
    </>
  )
}

export default Cart