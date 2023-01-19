import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
    return(
        <div className="card" style={{width: '18rem'}}>
            <img src={product.image} className="card-img-top" alt={`id-${product.id}`}/>
            <div className="card-body">
                <h3 className="card-title">{product.title}</h3>
                <p className='card-text'>{product.description}</p>
                <p className="card-text"><strong>${product.price}</strong></p>
                <Link to={`/detail/${product.id}`} className="btn btn-primary">Go detail</Link>
            </div>
        </div>
    )
}



export default Item