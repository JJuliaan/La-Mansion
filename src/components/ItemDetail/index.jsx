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
                        stock={20} 
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

    // return(
        
    //     <div class="card mb-3" style={{paddingTop: "12px"}}>
    //         <div class="row g-0">
    //             <div class="col-md-7" style={{display: "flex", justifyContent: "center", width: "-webkit-fill-available"}}>
    //             <img src={detail.image} class="img-fluid rounded-start" alt="..." style={{width: "600px"}}/>
    //             </div>
    //             <div class="col-md-5">
    //             <div class="card-body">
    //                 <h2 class="card-title"><strong>{detail.title}</strong></h2><br />
    //                 <h5 class="card-text">{detail.description}</h5><br />
    //                 <p class="card-text"><strong>{detail.price}</strong></p>
    //             </div>
    //             </div>
    //         </div>
    //         </div>
    // )
}

export default ItemDetail