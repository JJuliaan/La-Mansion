import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
import productosJson from "../../data/productos.json";

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    
    const {id} = useParams()
    console.log(id);

    
    useEffect(()=> {
        const getIdProducts = async () =>{
            const idProductos = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(productosJson)
                },)
            })
            idProductos
            .then(response => {
                if (id) {
                    const productosFiltradoId = response.find(productoId => productoId.id.toString() === id)
                    setDetail(productosFiltradoId)
                    console.log(productosFiltradoId)
                } else {
                    setDetail(response)
                }
                })
                .catch(err => console.log("error"))
            }


            getIdProducts()



        // fetch(`https://fakestoreapi.com/products/${id}`)
        //     .then(res=>{
        //         console.log(res)
        //         return res.json()
        //     })
        //     .then(json=>{
        //         console.log(json)
        //         setDetail(json)
        //     })
        //     .catch((err) => {
        //         alert("Hubo Un Error")
        //     });
    }, [id])


    return(
        <div>
            <ItemDetail detail={detail}/>
        </div>
    )
}

export default ItemDetailContainer