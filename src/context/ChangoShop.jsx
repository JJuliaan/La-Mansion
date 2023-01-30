
import React, { useState } from "react";
import { createContext } from "react";

export const Shop = createContext()

const ChangoShop = ({children}) => {
    
    const [products, setProducts] = useState([])

    const addProduct = (product) => {
        const enElCarro = estaElProcuto(product.id)
        if (enElCarro) {
            const productoRepetido = products.find(element => element.id === product.id)
            productoRepetido.quantity += product.quantity
            setProducts([...products])
        } else {
            setProducts([...products, product])
        }
    }

    const deleteProduct = (product) => {
        setProducts(products.filter((item) => item.id !== product.id))
    }

    const countChango = () => {
        let cantidadTotal = 0;
        for (const product of products) {
            cantidadTotal += product.quantity
            
        }
        return cantidadTotal
    }

    const estaElProcuto = (id) => {
        return products.some(producto => producto.id === id)
    }

    const total = () =>{
        let total = 0
        for (const product of products) {
            total += product.price * product.quantity
        }
        return total
    }

    return(
        <Shop.Provider value={{products, addProduct, deleteProduct, countChango, total}}>
           {children}
        </Shop.Provider>
    )
}

export default ChangoShop