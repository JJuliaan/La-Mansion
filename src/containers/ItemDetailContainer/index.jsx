import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    
    const {id} = useParams()

    useEffect(()=> {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>{
                console.log(res)
                return res.json()
            })
            .then(json=>{
                console.log(json)
                setDetail(json)
            })
            .catch((err) => {
                alert("Hubo Un Error")
            });
    }, [id])


    return(
        <div>
            <ItemDetail detail={detail}/>
        </div>
    )
}

export default ItemDetailContainer