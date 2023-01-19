import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList";
import productjson from "../../data/productos.json";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()
    console.log(categoryId);
    
    useEffect(()=> {

        const getProducts = async () => {
            const obtenerProductos = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(productjson)
                },)
            })

            obtenerProductos
            .then( response => {
                if (categoryId) {
                    const productosFiltrados = response.filter(producto => producto.category === categoryId)
                    console.log(productosFiltrados)
                    setProducts(productosFiltrados)
                } else {
                    setProducts(response)
                }
            })
            .catch(err => console.log("error"))
        }

        getProducts()
        
        
        // fetch('https://fakestoreapi.com/products')
    //         .then(res=>{
    //             console.log(res)
    //             return res.json()
    //         })
    //         .then(json=>{
    //             if(categoryId) { 
    //                 const filtrador = json.filter(productos => productos.category === categoryId)
    //                 console.log(filtrador);
    //                 setProducts(filtrador)
    //             } else {
    //                 setProducts(json)
    //             }
    //         })
    //         .catch((err) => {
    //             alert("Hubo Un Error")
    //         });
    }, [categoryId])

    // // console.log(products);

    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList productos={products}/>
        </div>
    )
}

export default ItemListContainer