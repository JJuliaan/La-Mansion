import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()
    console.log(categoryId);
    
    useEffect(()=> {
        fetch('https://fakestoreapi.com/products')
            .then(res=>{
                console.log(res)
                return res.json()
            })
            .then(json=>{
                if(categoryId) { 
                    const filtrador = json.filter(productos => productos.category === categoryId)
                    console.log(filtrador);
                    setProducts(filtrador)
                } else {
                    setProducts(json)
                }
            })
            .catch((err) => {
                alert("Hubo Un Error")
            });
    }, [categoryId])

    // console.log(products);

    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList productos={products}/>
        </div>
    )
}

export default ItemListContainer