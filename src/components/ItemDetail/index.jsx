import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Shop } from "../../context/ChangoShop";
import ItemCount from "../ItemCount";
import "./style.css"



const ItemDetail = ({detail}) => {

    const [quantity, setQuantity] = useState(0)

    const {addProduct} = useContext(Shop)

    const onAdd = (cantidad) => {
        console.log(`Se agrego ${cantidad}`);
        setQuantity(cantidad)
        addProduct({...detail, quantity: cantidad})
    }

    // console.log(detail.title)

    return (
        <div className="detail-container">
            <img className="detail-img" src={detail.image} alt="detail" />
            <aside className="detail-aside">
                <h2><strong>{detail.title}</strong></h2>
                <h5>{detail.description}</h5>
                <p><strong>${detail.price}</strong></p>
                {
                    quantity === 0 ?
                    <ItemCount
                        stock={detail.stock} 
                        initial={1} 
                        onAdd={onAdd}    
                    />
                    :
                    <button className="btn btn-primary p-2">
                        <Link to="/cart" style={{color: "white"}}>
                            Go cart
                        </Link>
                    </button>
                }
            </aside>
        </div>
    );

}

export default ItemDetail