import React from "react";

const ItemDetail = ({detail}) => {
    return(
        <div class="card mb-3" style={{paddingTop: "65px"}}>
            <div class="row g-0">
                <div class="col-md-7">
                <img src={detail.image} class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-5">
                <div class="card-body">
                    <h2 class="card-title"><strong>{detail.title}</strong></h2><br />
                    <h5 class="card-text">{detail.description}</h5><br />
                    <p class="card-text"><strong>{detail.price}</strong></p>
                </div>
                </div>
            </div>
            </div>
    )
}

export default ItemDetail